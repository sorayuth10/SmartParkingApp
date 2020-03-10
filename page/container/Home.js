import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView, Dimensions, } from 'react-native'
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
    arrangePlace: []
  }

  componentDidMount() {
    if (!firebase.auth().currentUser.displayName) {
      this.props.navigation.navigate('NewProfile')
    } else {
      // this.props.navigation.navigate('Home')
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
  }

  handleProfile = () => {
    this._menu.hide()
    this.props.navigation.navigate('Profile')
  }
  // handleParking = (name) => {
  //   this.props.navigation.navigate('Parking', { namePlace: { name } })
  //   console.log(name)
  //   //send params...
  // }
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
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Parking', { namePlace: {name} })}> 
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
              style={{ width: Dimensions.get('window').width / 4, height: Dimensions.get('window').height / 8, alignSelf: 'flex-start', marginLeft: 10}}
              source={require('../../image/logo.png')}
            />
            
        
            <View style={styles.item}>
            <Image
              style={{
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 10,
                alignSelf: 'flex-end', 
                marginRight: 40,
                marginTop:10
                
              }}
              source={require('../../image/account.png')}
            />
            <Text style={{ alignSelf: 'center', marginRight: 35}}>Prayut Janocha</Text>
          </View>
            
            
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

        <ScrollView>
          <List>{this.placeList()}</List>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    paddingBottom: 15,
    backgroundColor: '#ED9703',
    justifyContent: 'center',
    borderBottomWidth: 40,
    borderBottomColor: '#EBECF4',
    shadowColor: '#454D65',
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
   
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500'
  },
  menumore: {
    position: 'absolute',
    top: 60,
    right: 1,
    width: 40,
    height: 35
    // backgroundColor: 'rgba(21, 22, 48, 0.1)',
  }
})
