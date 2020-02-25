import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'

export default class Profile extends React.Component {
  state = {
    // email: "",
    // displayName: ""
  }

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser
    this.setState({ email, displayName })
  }

  signOutUser = () => {
    firebase.auth().signOut()
  }
  render() {
    return (
      <View style={styles.container}>
        {/* dark-content Status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

        {/* Back button
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={32} color="#FFF" />
        </TouchableOpacity> */}

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>

          {/* Back button */}
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={32}></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={{ color: 'black', textAlign: 'center' }}>Email: {this.state.email}</Text>
          <Text style={{ color: 'black', textAlign: 'center' }}>Name: {this.state.displayName}</Text>
        </View>

        <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
          <Text style={{ color: '#0074E1', textAlign: 'center' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    marginHorizontal: 20
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
  }
})
