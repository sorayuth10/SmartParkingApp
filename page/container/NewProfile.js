import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'

export default class Register extends React.Component {
  state = {
    brand: '',
    license: '',
    province: '',
    errorMessage: null
  }

  handleFinish = () => {
    // console.log(firebase.auth().currentUser.uid)
    const { displayName } = firebase.auth().currentUser
    this.setState({ displayName })
    console.log(displayName)

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
    this.props.navigation.navigate('Home')
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
      <View style={styles.container}>
        {/* dark-content Status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

        {/* Back button
      <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
        <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
      </TouchableOpacity> */}

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>
          {/* add profile img */}
          <TouchableOpacity style={styles.profile}>
            <Ionicons name="ios-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
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
            ></TextInput>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={styles.inputTitle}> License Plate </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Example : กข 1234"
              onChangeText={(license) => this.setState({ license })}
              value={this.state.license}
            ></TextInput>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={styles.inputTitle}> Province </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Example : กรุงเทพมหานคร"
              onChangeText={(province) => this.setState({ province })}
              value={this.state.province}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleFinish}>
          <Text style={{ color: 'white', fontWeight: '500' }}>Submit</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={{ color: "black", fontSize: 13 }}>
           Back to SmartparkingApp?{" "}
            <Text style={{ fontWeight: "500", color: "red" }}>Login</Text>
          </Text>
        </TouchableOpacity> */}
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
    marginTop : 100
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
    color: 'black'
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: 'green',
    borderRadius: 4,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
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
