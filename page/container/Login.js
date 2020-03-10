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
  LayoutAnimation
} from 'react-native'
import * as firebase from 'firebase'

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

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 10
    LayoutAnimation.easeInEaseOut() //Animation

    return (
      <View style={styles.container}>
        {/* dark-content Status bar */}
        <StatusBar barStyle="dark-content"  backgroundColor="#EBECF4" animated={true} />
        <Image style= { styles.backgroundImage } source={require('../../image/background.png')}/>

        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.LogoContainer}>
            <Image style={{ width: 150, height: 160, alignItems: 'center' }} source={require('../../image/logo.png')} />
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
              ></TextInput>
              <Ionicons name="ios-lock" style={styles.Icon} size={25} />
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.errorMessage}>
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Login</Text>
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

  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 800,
    width : 600,
    opacity: 1
},

  LogoContainer: {
    marginTop: '25%',
    paddingVertical: 20,
    alignItems: 'center'
  },
  errorMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%'
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
  button: {
    marginHorizontal: '35%',
    backgroundColor: 'green',
    borderRadius: 4,
    width: '80%',
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
//                         source={require('../../image/Icon.png')}

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
