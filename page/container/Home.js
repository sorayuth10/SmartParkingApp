import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView, Dimensions } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'
import styled from 'styled-components/native'

// CSS
const Container = styled.View`
  display: flex;
`
const List = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default class Home extends React.Component {
  //Menu Options
  _menu = null
  setMenuRef = (ref) => {
    this._menu = ref
  }
  showMenu = () => {
    this._menu.show()
  }

  state = {
    arrangePlace: [],
    showFirstAddData: true
  }

  componentDidMount() {
    firebase
      .database()
      .ref('UserAuth/' + firebase.auth().currentUser.uid)
      .once('value', (snap) => {
        if (!snap.exists()) {
          this.props.navigation.navigate('NewProfile')
        } else {
          // this.props.navigation.navigate('Home')
          this.toggleFirstAddData()
          let arrangePlace = []
          firebase
            .database()
            .ref('Devices')
            .on('value', (data) => {
              arrangePlace = Object.values(data.val()).map(({ Place: { img, name } }) => ({ img, name }))
              const filteredArrangePlace = arrangePlace.filter(
                ({ name }, index, selfs) => selfs.findIndex((self) => self.name === name) === index
              )
              this.setState(() => ({ arrangePlace: filteredArrangePlace }))
            })
        }
      })
  }

  toggleFirstAddData = () => {
    this.setState({
      showFirstAddData: false
    })
  }

  _renderFirstAddData() {
    if (this.state.showFirstAddData) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewProfile')}>
          <Text>Add car data</Text>
        </TouchableOpacity>
      )
    }
  }

  handleProfile = () => {
    this._menu.hide()
    this.props.navigation.navigate('Profile')
  }

  handleAbouUs = () => {
    this._menu.hide()
    this.props.navigation.navigate('AboutUs')
  }
  signOutUser = () => {
    firebase.auth().signOut()
  }

  placeList() {
    return this.state.arrangePlace.map(({ img, name }, index) => (
      <React.Fragment key={index}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Parking', { namePlace: { name } })}>
          <View style={styles.placeItem}>
            <Image style={{ width: Dimensions.get('window').width / 2.02, height: 125 }} source={{ uri: img }} />
            <Text key={index} style={{ alignSelf: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      </React.Fragment>
    ))
  }

  render() {
    return (
      <Container>
        {/* dark-content Status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

        <View style={styles.header}>
          <Image
            style={{
              width: '28%',
              height: '75%',
              alignItems: 'flex-start',
              marginLeft: 20,
              marginTop: 40
            }}
            source={require('../../image/logo.png')}
          />
          <Text style={styles.headerTitle}>PLACE</Text>
          <Image
            style={{
              width: '20%',
              height: '50%',
              marginRight: 25,
              marginTop: 70,
              borderRadius: 50
            }}
            source={require('../../image/account.png')}
          />

          <View style={styles.menumore}>
            <Menu
              ref={this.setMenuRef}
              button={
                <Text style={{ paddingLeft: 19, marginTop: 52 }} onPress={this.showMenu}>
                  <Ionicons name="md-more" size={32} />
                </Text>
              }
            >
              <MenuItem onPress={this.handleProfile}>Profile</MenuItem>
              <MenuItem onPress={this.handleAbouUs}>About Us</MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.signOutUser}>Log out</MenuItem>
            </Menu>
          </View>
        </View>

        <ScrollView style={{ marginTop: -50 }}>
          <List>{this.placeList()}</List>
        </ScrollView>
        {this._renderFirstAddData()}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    paddingBottom: 15,
    backgroundColor: '#ED9703',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 60,
    height: 190,
    bottom: 75,
    marginTop: 20
  },
  headerTitle: {
    top: 50,
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 20
  },
  menumore: {
    position: 'absolute',
    top: 100,
    right: 10,
    width: 40,
    height: 35
    // backgroundColor: 'rgba(21, 22, 48, 0.1)',
  }
})
