import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Button, Alert } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'

export const Profile = (props) => {
  const { navigation } = props
  const [user, setUser] = React.useState({
    displayName: '',
    License: '',
    Brand: '',
    Province: ''
  })
  const [photoURL, setphotoURL] = React.useState(require('../../assets/account.png'))
  const signOutUser = () => {
    firebase.auth().signOut()
  }
  useEffect(() => {
    getUser()
  }, [])
  const getUser = () => {
    setUser((prev) => ({ ...prev, displayName: firebase.auth().currentUser.displayName }))
    firebase
      .database()
      .ref(`UserAuth/${firebase.auth().currentUser.uid}/Cars/001`)
      .on('value', (data) => {
        setUser((prev) => ({ ...prev, Brand: data.toJSON().Brand }))
        setUser((prev) => ({ ...prev, License: data.toJSON().License }))
        setUser((prev) => ({ ...prev, Province: data.toJSON().Province }))
      })
    if (firebase.auth().currentUser.photoURL != null) {
      console.log(firebase.auth().currentUser.photoURL)
      setphotoURL({ uri: firebase.auth().currentUser.photoURL })
    }
  }
  const aboutUs = () => {
    navigation.navigate('AboutUs')
  }

  return (
    <View style={styles.contianer}>
      {/* dark-content Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>

        {/* Back button */}
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={32}></Ionicons>
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <View styles={styles.profileImage}>
          <Image source={photoURL} style={styles.image} resizeMode="center"/>
        </View>
        <Text style={{ fontSize: 35,marginTop: 20 }}>{user.displayName}</Text>
      </View>
      {/* <Text style={{textAlign:'center'}}>My car</Text> */}
      <View style={styles.carinfostyle}>
      <View style={styles.img}>
        <Image source={require('../../assets/car.png')} style={styles.carIcon} resizeMode="center"></Image>
        <Text style={{ marginTop: 15, fontSize: 18, marginLeft: '10%' }}>{user.Brand}</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('../../assets/license.png')} style={styles.carIcon} resizeMode="center"></Image>
        <Text style={{ marginTop: 15, fontSize: 18, marginLeft: '10%' }}>{user.License}</Text>
      </View>
      </View>
      <View style={{ alignContent : 'center'}}>
        <Text style={{ marginTop: 10, fontSize: 18, marginRight: '1%', alignSelf: 'center' }}>{user.Province}</Text>
      </View>
      
      <View style={styles.button}>
        <TouchableOpacity style={styles.aboutButton} justifyContent="space-between" onPress={aboutUs}><Text style={styles.buttonText}>About Us</Text></TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} justifyContent="space-between" onPress={signOutUser}><Text style={styles.buttonText}>Log out</Text></TouchableOpacity>
      </View>
    </View>
  )
}
export default Profile

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  profile: {
    marginTop: 30,
    alignItems: 'center'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  image: {
    width: 200,
    height: 200
  },
  carinfostyle:{
    width : 220, 
    alignSelf:'center',
    marginTop: 10,
    // borderColor: '#1919ff',
    // borderWidth: 2,
  },
  img: {
    flexDirection: 'row',
    // justifyContent: 'center'
  },
  carIcon: {
    width: 50,
    height: 50,
    marginLeft: 30
  },
  back: {
    position: 'absolute',
    top: 60,
    left: 20,
    paddingLeft: 10,
    width: 80,
    height: 35,
    // backgroundColor: 'rgba(21, 22, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  header: {
    paddingTop: 60,
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
    fontSize: 25,
    fontWeight: '500'
  },
  button: {
    justifyContent: 'center'
  },
  aboutButton: {
    backgroundColor: '#9A9A9A',
    alignSelf: 'center',
    borderColor: 'white',
    borderRadius: 10,
    width: '60%',
    height: 40,
    marginTop: 10
  },
  logoutButton:{
    backgroundColor: '#BE0000',
    alignSelf: 'center',
    borderColor: 'white',
    borderRadius: 10,
    width: '60%',
    height: 40,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    fontSize: 20
  },
})
