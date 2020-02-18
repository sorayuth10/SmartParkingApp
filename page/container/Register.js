import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox, StatusBar } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'

export default class Register extends React.Component {
  static navigationOptions = {
    headerShown: false //remove header
  }

  state = {
    fullname: '',
    email: '',
    password: '',
    repassword: '',
    errorMessage: null
  }

  handleRegister = () => {
    if (this.state.password != this.state.repassword)
      return this.setState({ errorMessage: 'Password and Re-type password not same' })

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCardentials) => {
        return userCardentials.user.updateProfile({
          displayName: this.state.fullname
        })
      })
      .catch((error) => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
      {/* dark-content Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

        {/* Back button */}
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={32} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="words"
            placeholder="Full Name"
            onChangeText={(fullname) => this.setState({ fullname })}
            value={this.state.fullname}
          ></TextInput>

          <View style={{ marginTop: 30 }}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Email Address"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 30 }}>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>

          <View style={{ marginTop: 30 }}>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              placeholder="Re-type password"
              onChangeText={(repassword) => this.setState({ repassword })}
              value={this.state.repassword}
            ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <CheckBox
              value={this.state.checked}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
            />
            <Text style={{ marginTop: 5, fontSize: 16, marginHorizontal: 10 }}>
              I accept the Term & Conditions and I acknowledge Privacy Policy
            </Text>
          </View>
        </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>Register</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ fontSize: 16, marginVertical: '10%' }}>Back to</Text>
          <TouchableOpacity style={{ marginVertical: '10%' }} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#0074E1' }}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorMessage: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  error: {
    color: 'red',
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginTop: 250,
    marginHorizontal: 40
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 20,
    fontSize: 16
  },
  button: {
    marginTop: 20,
    marginHorizontal: 60,
    backgroundColor: 'blue',
    borderRadius: 4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    position: 'absolute',
    top: 40,
    left: 30,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'rgba(21, 22, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
// import { Image,SocialIcon,Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default class Register extends React.Component {
//   static navigationOptions = {
//     title: 'Register',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//   return (
//     <View style={styles.container}>
//     <View style={styles.LogoContainer}>
//     <Image
//             style={{ width: 150, height: 160, alignItems: 'center'}}
//             source={require('../../image/Icon.png')}

//     />
//     </View>

//     <View style={styles.InputContainer}>
//     <Input
//     placeholder='Name'
//     textAlign='left'

//     />
//     </View>

//     <View style={styles.InputContainer}>
//     <Input
//     placeholder='Email'
//     textAlign='left'

//     />
//     </View>

//     <View style={styles.InputContainer}>
//     <Input
//     placeholder='Username'
//     textAlign='left'

//     />
//     </View>

//     <View style={styles.InputContainer}>
//       <Input
//     secureTextEntry
//     placeholder='Password'
//     autoCapitalize="none"
//     textAlign='left'

//     />
//     </View>

//     <View style={styles.buttonContainer}>
//         <Button
//             onPress={this.onPressButton}
//             title="CREAT ACCOUNT"
//             color="#0074E1"
//         />
//     </View>

//     <View style={styles.buttonContainer}>
//         <Button
//             onPress={this.onPressButton}
//             title="BLACK"
//             color="#B1B1B1"
//         />
//     </View>

// </View>
// );
// }
// }

// const styles = StyleSheet.create({

// container: {
// margin: 0,
// backgroundColor: 'white',
// },

// LogoContainer: {
// marginTop: 10 ,
// paddingTop: 80,
// paddingVertical: 20,
// backgroundColor: 'white',
// alignItems: 'center'
// },

// InputContainer: {
// margin: 20,
// marginTop: 10 ,
// flexDirection: 'row',
// justifyContent: 'space-between',
// backgroundColor: 'white',

// },

// buttonContainer: {
// margin: 20,
// marginTop: 30,

// }
// })
