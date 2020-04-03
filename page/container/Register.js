import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'

export default class Register extends React.Component {
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          {/* dark-content Status bar */}
          <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 10}>
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
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  this.secondTextInput.focus()
                }}
                blurOnSubmit={false}
              ></TextInput>
              <Ionicons name="ios-contact" style={styles.Icon} size={25} />

              <View style={{ marginTop: 30 }}>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Email Address"
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                  ref={(input) => {
                    this.secondTextInput = input
                  }}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    this.thirdTextInput.focus()
                  }}
                  blurOnSubmit={false}
                ></TextInput>
                <Ionicons name="ios-mail" style={styles.Icon} size={25} />
              </View>

              <View style={{ marginTop: 30 }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  autoCapitalize="none"
                  placeholder="Password"
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                  ref={(input) => {
                    this.thirdTextInput = input
                  }}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    this.fourthTextInput.focus()
                  }}
                  blurOnSubmit={false}
                ></TextInput>
                <Ionicons name="ios-lock" style={styles.Icon} size={25} />
              </View>

              <View style={{ marginTop: 30 }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  autoCapitalize="none"
                  placeholder="Confirm Password"
                  onChangeText={(repassword) => this.setState({ repassword })}
                  value={this.state.repassword}
                  ref={(input) => {
                    this.fourthTextInput = input
                  }}
                ></TextInput>
                <Ionicons name="ios-lock" style={styles.Icon} size={25} />
              </View>
            </View>
          </KeyboardAvoidingView>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>Create Account</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ fontSize: 16, marginVertical: '10%' }}>Back to</Text>
            <TouchableOpacity style={{ marginVertical: '10%' }} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#0074E1' }}> Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    marginTop: 200,
    marginHorizontal: 40
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 26,
    fontSize: 16,
    paddingLeft: 28
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0142C0',
    borderRadius: 4,
    height: 40,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  Icon: {
    position: 'absolute'
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
//             source={require('../../assets/Icon.png')}

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
