import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Button, Alert } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'

// export default class Profile extends React.Component {
//   state = {
//     // email: "",
//     // displayName: ""
//   }

//   componentDidMount() {
//     const { email, displayName } = firebase.auth().currentUser
//     this.setState({ email, displayName })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* dark-content Status bar */}
//         <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

//         {/* Back button
//         <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
//           <Ionicons name="ios-arrow-round-back" size={32} color="#FFF" />
//         </TouchableOpacity> */}

// <View style={styles.header}>
//   <Text style={styles.headerTitle}>Profile</Text>

//   {/* Back button */}
//   <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
//     <Ionicons name="ios-arrow-back" size={32}></Ionicons>
//   </TouchableOpacity>
// </View>

//         <View style={styles.form}>
//           <Text style={{ color: 'black', textAlign: 'center' }}>Email: {this.state.email}</Text>
//           <Text style={{ color: 'black', textAlign: 'center' }}>Name: {this.state.displayName}</Text>
//         </View>

//         <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
//           <Text style={{ color: '#0074E1', textAlign: 'center' }}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//     // justifyContent: 'center',
//     // alignItems: 'center'
//   },
// header: {
//   paddingTop: 35,
//   paddingBottom: 10,
//   backgroundColor: '#FFF',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderBottomWidth: 1,
//   borderBottomColor: '#EBECF4',
//   shadowColor: '#454D65',
//   shadowOffset: { height: 5 },
//   shadowRadius: 15,
//   shadowOpacity: 0.2,
//   zIndex: 10
// },
// headerTitle: {
//   fontSize: 20,
//   fontWeight: '500'
// },
//   form: {
//     marginVertical: 20,
//     marginHorizontal: 20
//   },
//   back: {
//     position: 'absolute',
//     top: 30,
//     left: 1,
//     paddingLeft: 10,
//     width: 80,
//     height: 35,
//     // backgroundColor: 'rgba(21, 22, 48, 0.1)',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     flexDirection: 'row'
//   }
// })

export const Profile = (props) => {
  const { navigation } = props

  const signOutUser = () => {
    firebase.auth().signOut()
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
          <Image source={require('../../assets/account.png')} style={styles.image} resizeMode="center"></Image>
        </View>
        <Text style={{ fontSize: 35 }}>Profile Name</Text>
      </View>
      {/* <Text style={{textAlign:'center'}}>My car</Text> */}
      <View style={styles.img}>
        <Image source={require('../../assets/car.png')} style={styles.carIcon} resizeMode="center"></Image>
        <Text style={{ marginTop: 15, fontSize: 18, marginRight: '2%' }}>Toyota</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('../../assets/license.png')} style={styles.carIcon} resizeMode="center"></Image>
        <Text style={{ marginTop: 15, fontSize: 18, marginRight: '2%' }}>กข 1111</Text>
      </View>

      <Button title="Edit Profile" styles={{ marginTop: 50 }} onPress={() => Alert.alert('Edit Profile')} />
      <Button title="About Us" onPress={aboutUs} />
      <Button title="Log out" onPress={signOutUser} />
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
    alignItems: 'center'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  image: {
    width: 200,
    height: 200
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  carIcon: {
    width: 50,
    height: 50,
    marginRight: '8%'
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 1,
    paddingLeft: 10,
    width: 80,
    height: 35,
    // backgroundColor: 'rgba(21, 22, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
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
  }
})
