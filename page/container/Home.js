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
              style={{ 
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 10.1, 
                alignItems: 'flex-start', 
                marginLeft: 20,
                marginTop:40

              }}
              source={require('../../image/logo.png')}
            />
            
            <Image
              style={{
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 10,
                marginRight: 25,
                marginTop:40
               
              }}
              source={require('../../image/account.png')}
            />
           
          
            
            
            
         
            
         
            
          <View style={styles.menumore}>
            {/* <Menu
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
            </Menu> */}
           
          </View>
        </View>
          <View style={styles.text}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>PLACE</Text>
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
    // borderBottomWidth: 15,
    // borderBottomColor: '#A9A9A9',
    // shadowOffset: { height: 5,width: 100 },
    // shadowRadius: 15,
    // shadowOpacity: 0.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 80,
    height: 175,
    bottom:30
    
     
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500'
  },
  
  menumore: {
    position: 'absolute',
    top: 100,
    right: 10,
    width: 40,
    height: 35,
    // backgroundColor: 'rgba(21, 22, 48, 0.1)',
  }
})
