import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  LayoutAnimation,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import * as firebase from 'firebase'
import * as Facebook from 'expo-facebook'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }))
  }
  handleLoginFB = async () => {
    try {
      await Facebook.initializeAsync('639314790199535')
      const { type, token, expires, permissions, declinedPermissions } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile']
      })
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
        // console.log(`${await response.json()}`)
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            console.log(error)
          })
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`)
      // alert(`Facebook Login Error: ${message}`)
    }
  }

  render() {
    LayoutAnimation.easeInEaseOut() //Animation

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          {/* dark-content Status bar */}
          <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

          <Image style={styles.backgroundImage} source={require('../../assets/background.png')} />

          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 10}>
            <View style={styles.LogoContainer}>
              <Image
                style={{ width: 150, height: 160, alignItems: 'center' }}
                source={require('../../assets/logo.png')}
              />
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Email"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  this.secondTextInput.focus()
                }}
                blurOnSubmit={false}
              ></TextInput>
              <Ionicons name="ios-contact" style={styles.Icon} size={25} />

              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Password"
                  autoCapitalize="none"
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                  ref={(input) => {
                    this.secondTextInput = input
                  }}
                ></TextInput>
                <Ionicons name="ios-lock" style={styles.Icon} size={25} />
              </View>
            </View>
          </KeyboardAvoidingView>

          <View style={styles.errorMessage}>
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          </View>

          <TouchableOpacity style={styles.buttonLogin} onPress={this.handleLogin}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Login</Text>
          </TouchableOpacity>
          <View style={{ marginTop: '2%' }} />
          <TouchableOpacity style={styles.buttonLoginFB} onPress={this.handleLoginFB}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Login with Facebook</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ fontSize: 16, marginVertical: '10%', color: 'white' }}>Don't have an account? </Text>
            <TouchableOpacity
              style={{ marginVertical: '10%' }}
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#0074E1' }}>Register now</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 12, color: 'gray', alignSelf: 'center', position: 'absolute', bottom: 0 }}>
            Smart Parking Project © 2020
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  // _submit = () => {
  //   alert(`Confirmation email has been sent to ${this.state.email}`);
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ED9703'
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 800,
    width: 600,
    opacity: 1
  },

  LogoContainer: {
    marginTop: '10%',
    paddingVertical: 20,
    alignItems: 'center'
  },
  errorMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%'
  },
  error: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center'
  },
  form: {
    marginTop: '10%',
    marginHorizontal: '10%',
    bottom: 10
  },
  input: {
    borderBottomColor: '#E3E3E3',
    backgroundColor: '#E3E3E3',
    borderRadius: 30,
    paddingLeft: 50,
    fontSize: 18,
    height: 40
  },
  buttonLogin: {
    marginHorizontal: '35%',
    backgroundColor: '#093540',
    borderRadius: 4,
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonLoginFB: {
    marginHorizontal: '35%',
    backgroundColor: '#3b5998',
    borderRadius: 4,
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  Icon: {
    position: 'absolute',
    marginTop: 8,
    height: 25,
    marginLeft: 15
  }
})

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView, KeyboardAvoidingView, TouchableHighlight, TextInput } from 'react-native';
// import { Image,SocialIcon,Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default class Login extends React.Component {
//   static navigationOptions = {
//    title: 'Login',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//   return (
//     <View style={styles.container}>
//                 <View style={styles.LogoContainer}>
//                 <Image
//                         style={{ width: 150, height: 160, alignItems: 'center'}}
//                         source={require('../../assets/Icon.png')}

//                 />
//                 </View>

//                 <View style={styles.inputContainer}>
//                 <Icon style={styles.Icon}
//                         name='user'
//                         size={25}
//                         color='black'
//                 />
//                 <TextInput style={styles.input}
//                         placeholder="Username"
//                         onChangeText={(Username) => this.setState({Username})}
//                 />
//                 </View>

//                 <View style={styles.inputContainer}>
//                 <Icon style={styles.Icon}
//                         name='lock'
//                         size={25}
//                         color='black'
//                         marginLeft='55'
//                         margin='20'
//                         paddingLeft='50'
//                 />
//                 <TextInput style={styles.input}
//                         placeholder="Password"
//                         secureTextEntry={true}
//                         underlineColorAndroid='transparent'
//                         onChangeText={(Password) => this.setState({Password})}/>
//                 </View>

//                 <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this.onPressButton}
//                         title="Log in"
//                         color="#009933"
//                         onPress={() => navigate('Home', {name: 'Home'})}
//                     />
//                 </View>

//                 <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this.onPressButton}
//                         title="Register"
//                         color="#0074E1"
//                         onPress={() => navigate('Register', {name: 'Register'})}
//                     />
//                 </View>

//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//    /* container: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: 'black',
//         marginHorizontal: 25,
//         margin: 50
//     }, */

//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//     },

//     LogoContainer: {
//       marginTop: '10%',
//       paddingTop: '1%',
//       paddingVertical: 20,
//       backgroundColor: 'white',
//       alignItems: 'center'
//     },

//     inputContainer: {
//       borderBottomColor: '#E3E3E3',
//       backgroundColor: '#E3E3E3',
//       borderRadius:30,
//       width:325,
//       height:50,
//       marginBottom:1,
//       flexDirection: 'row',
//       marginLeft:15,
//       marginTop: '5%',
//       paddingTop: '7%',
//       alignItems:'center'

//   },

//     Icon:{
//       height:25,
//       marginLeft:15,
//       borderBottomColor: '#FFFFFF',
//   },

//     input:{
//       height:45,
//       marginLeft:20,
//       borderBottomColor: '#FFFFFF',
//       flex:1,
//   },

//     buttonContainer: {
//       marginTop: '10%' ,
//       paddingTop: '2%',
//       width:325,
//       height:50,
//       margin:'5%',
//       marginBottom:'0%'

//   }
// })

//      {/* <Button
//         title="xxxxx"
//         onPress={() => navigate('Home', {name: 'xxxx'})}
//       /> */}
