import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'
import { Dimensions } from 'react-native'

export default class Home extends React.Component {
  //Menu Options
  _menu = null

  setMenuRef = (ref) => {
    this._menu = ref
  }

  // hideMenu = () => {
  //   this._menu.hide();
  // };

  showMenu = () => {
    this._menu.show()
  }

  static navigationOptions = {
    headerShown: false //remove header
  }
  state = {
    // email: "",
    // displayName: ""
  }

  componentDidMount() {
    if (!firebase.auth().currentUser.displayName) {
      this.props.navigation.navigate('NewProfile')
    } 
    else {
      // this.props.navigation.navigate('Home')
      var ref = firebase.database().ref('Place').on('value') 
    }
  }
 
  handleProfile = () => {
    this._menu.hide()
    this.props.navigation.navigate('Profile')
  }
  handleParking = () => {
    this.props.navigation.navigate('Parking')
    //send params...
  }
  handleAbouUs = () => {
    this._menu.hide()
    this.props.navigation.navigate('AboutUs')
  }
  signOutUser = () => {
    firebase.auth().signOut()
  }

  /*CONCEPT fetching data to place page*/
  //loop: n times
  //// use forloop n times
  //// use forloop 2 times for horizontal
  //// end loop horizontal
  //// n next times..

  render() {
    return (
      <View style={styles.container}>
        {/* dark-content Status bar */}
        <StatusBar barStyle="dark-content"></StatusBar>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Place</Text>

          <View style={styles.menumore}>
            <Menu
              ref={this.setMenuRef}
              button={
                <Text style={{ paddingLeft: 20 }} onPress={this.showMenu}>
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

        <View style={styles.form}>
          <TouchableOpacity onPress={this.handleParking}>
            <View style={styles.item}>
              <Image style={{ width: Dimensions.get('window').width/2.02, height: 125 }} source={require('../../image/ConventionHall.jpg')} />
              <Text style={{ alignSelf: 'center' }}>ConventionHall</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleParking}>
            <View style={styles.item}>
              <Image style={{ width: Dimensions.get('window').width/2.02, height: 125 }} source={require('../../image/ConventionHall.jpg')} />
              <Text style={{ alignSelf: 'center' }}>ConventionHall</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header: {
    paddingTop: 35,
    paddingBottom: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
    shadowColor: '#454D65',
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500'
  },
  form: {
    marginVertical: 20,
    flexDirection: 'row'
  },
  menumore: {
    position: 'absolute',
    top: 33,
    right: 1,
    width: 40,
    height: 35
    // backgroundColor: 'rgba(21, 22, 48, 0.1)',
  },
  item: {
    marginHorizontal: '.2%'
  }
})