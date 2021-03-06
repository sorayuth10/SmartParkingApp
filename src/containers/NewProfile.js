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
import { NavigationActions, StackActions } from 'react-navigation'

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Home' })]
})
export default class Register extends React.Component {
  state = {
    brand: '',
    license: '',
    province: '',
    errorBrand: null,
    errorLicense: null,
    errorProvince: null
  }

  handleFinish = () => {
    if (this.state.brand == ''.trim()) return this.setState({ errorBrand: 'Fill data in this form.' })
    else this.setState({ errorBrand: null })
    if (this.state.license == ''.trim()) return this.setState({ errorLicense: 'Fill data in this form.' })
    else this.setState({ errorLicense: null })
    if (this.state.province == ''.trim()) return this.setState({ errorProvince: 'Fill data in this form.' })
    else this.setState({ errorProvince: null })
    const { displayName } = firebase.auth().currentUser
    this.setState({ displayName })

    firebase
      .database()
      .ref('UserAuth/' + firebase.auth().currentUser.uid + '/DataPersonal')
      .set({
        Fullname: displayName
      })
    setTimeout(() => {
      firebase
        .database()
        .ref('UserAuth/' + firebase.auth().currentUser.uid + '/Cars/001')
        .set({
          Brand: this.state.brand,
          License: this.state.license,
          Province: this.state.province
        })
        .catch((error) => this.setState({ errorMessage: error.message }))
    }, 500)
    this.props.navigation.dispatch(resetAction)
  }
  signOutUser = () => {
    firebase.auth().signOut()
  }

  // RegisterData =() =>{
  //     firebase
  //         .auth()
  //   var key = firebase.database().ref('/UserAuth').push().key
  //   firebase.database().ref('/UserAuth').child(key).set(
  //     {
  //       Name: this.state.name
  //     }
  //   ).then(() => {

  //   }).catch(error => this.setState({errorMessage: error.message}))

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          {/* dark-content Status bar */}
          <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

          <View style={styles.form}>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 10}>
              {/* add profile img */}
              <TouchableOpacity style={styles.profile}>
                <Ionicons name="ios-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }} />
              </TouchableOpacity>

              <Text>{this.state.displayName}</Text>

              {/* <Text style={styles.inputTitle}> Full Name </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="words"
            onChangeText={fullname => this.setState({ fullname })}
            value={this.state.fullname}
          ></TextInput> */}

              <View style={{ marginTop: 30 }}>
                <Text style={styles.inputTitle}> Brand </Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Example : TOYOTA"
                  onChangeText={(brand) => this.setState({ brand })}
                  value={this.state.brand}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    this.secondTextInput.focus()
                  }}
                  blurOnSubmit={false}
                ></TextInput>
                <View style={styles.errorMessage}>
                  {this.state.errorBrand && <Text style={styles.error}>{this.state.errorBrand}</Text>}
                </View>
              </View>

              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputTitle}> License Plate </Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Example : กข 1234"
                  onChangeText={(license) => this.setState({ license })}
                  value={this.state.license}
                  ref={(input) => {
                    this.secondTextInput = input
                  }}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    this.thirdTextInput.focus()
                  }}
                  blurOnSubmit={false}
                ></TextInput>
                <View style={styles.errorMessage}>
                  {this.state.errorLicense && <Text style={styles.error}>{this.state.errorLicense}</Text>}
                </View>
              </View>

              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputTitle}> Province </Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Example : กรุงเทพมหานคร"
                  onChangeText={(province) => this.setState({ province })}
                  value={this.state.province}
                  ref={(input) => {
                    this.thirdTextInput = input
                  }}
                ></TextInput>
                <View style={styles.errorMessage}>
                  {this.state.errorProvince && <Text style={styles.error}>{this.state.errorProvince}</Text>}
                </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={this.handleFinish}>
                <Text style={{ color: 'white', fontWeight: '500' }}>Submit</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>

          <TouchableOpacity style={{ alignSelf: 'center' }}onPress={this.signOutUser}><Text>Log out</Text></TouchableOpacity>

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
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  error: {
    color: 'red',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginVertical: 35,
    marginHorizontal: 38,
    marginTop: 60
  },
  inputTitle: {
    color: 'black',
    fontSize: 18
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 20,
    fontSize: 15,
    color: 'black',
    paddingLeft: '1.5%'
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: 'green',
    borderRadius: 4,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  back: {
    position: 'absolute',
    top: 35,
    left: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(21, 22, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    width: 100,
    height: 100,
    backgroundColor: '#E1E2E6',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
})
