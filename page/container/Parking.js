import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import Dialog, { DialogContent } from 'react-native-popup-dialog'

export default class Parking extends React.Component {
  static navigationOptions = {
    headerShown: false //remove header
  }
  state = {
    // email: "",
    // displayName: ""
  }

  componentDidMount() {
    // const { email, displayName } = firebase.auth().currentUser
    // this.setState({ email, displayName })
  }

  handleBooking() {
    //จองงง
  }

  render() {
    return (
      <View style={styles.container}>
        {/* dark-content Status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#16a085" animated={true} />

        <View style={styles.header}>
          {/* Back button */}
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={32} />
            <Text> Place</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>ใส่ชื่อสถานที่</Text>
        </View>

        <View style={styles.form}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visible: true })
            }}
          >
            <View style={styles.item}>
              <Image
                style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park001</Text>
            </View>
          </TouchableOpacity>
          <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({ visible: false })
            }}
          >
            <DialogContent>
              <Text>oiioioi</Text>
            </DialogContent>
          </Dialog>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park002</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park003</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park004</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park005</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{
                  width: Dimensions.get('window').width / 5,
                  height: Dimensions.get('window').height / 5.2,
                  transform: [{ rotate: '180deg' }]
                }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park006</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{
                  width: Dimensions.get('window').width / 5,
                  height: Dimensions.get('window').height / 5.2,
                  transform: [{ rotate: '180deg' }]
                }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park007</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{
                  width: Dimensions.get('window').width / 5,
                  height: Dimensions.get('window').height / 5.2,
                  transform: [{ rotate: '180deg' }]
                }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park008</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{
                  width: Dimensions.get('window').width / 5,
                  height: Dimensions.get('window').height / 5.2,
                  transform: [{ rotate: '180deg' }]
                }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park009</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleBooking}>
            <View style={styles.item}>
              <Image
                style={{
                  width: Dimensions.get('window').width / 5,
                  height: Dimensions.get('window').height / 5.2,
                  transform: [{ rotate: '180deg' }]
                }}
                source={require('../../image/Green.png')}
              />
              <Text style={{ alignSelf: 'center' }}>park010</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  form: {
    marginVertical: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
// import { Image,SocialIcon,Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default class Home extends React.Component {
//   static navigationOptions = {
//     title: 'Home',

//   };
//   render() {
//     const {navigate} = this.props.navigation;
//   return (

//     <View style={styles.container}>
//     <View style={styles.Text}>
//     <Text style = {styles.Text1}>
//     3 คัน
//     </Text>

//     <Text style = {styles.Text2}>
//     เหลือที่ว่าง
//     </Text>

//     <Text style = {styles.Text3}>
//     3 คัน
//     </Text>

//     <Text style = {styles.Text4}>
//     ทั้งหมด
//     </Text>

//     </View>

//     <View style={styles.car}>
//     <View style={{flex: 1, flexDirection: 'row'}}>

//     <Image
//             style={{ width: 105, height: 200}}
//             source={require('../../image/Green.png')} />
//     <Image
//             style={{ width: 105, height: 200}}
//             source={require('../../image/Green.png')} />
//     <Image
//             style={{ width: 105, height: 200}}
//             source={require('../../image/Green.png')} />
//     </View>
//     </View>

//     <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this.onPressButton}
//                         title="ดูสถานที่อื่นๆ"
//                         color="#848484"
//                         onPress={() => navigate('Park', {name: 'Park'})}
//                     />
//                 </View>
//     </View>
// );
// }
// }

// const styles = StyleSheet.create({

// container: {
// flex: 1,
// backgroundColor: 'white',
// },

// Text: {
//   textAlign: "center",
//   alignItems:'center',

//   marginTop: 30

// },

// Text1: {
//   color: 'red',
//   textAlign: "center",
//   fontSize :40,
//   alignItems:'center',

// },

// Text2: {
//   color: '#7D7D7D',
//   textAlign: "center",
//   fontSize :20,
//   flexDirection:'row',
//   alignItems:'center',

// },

// Text3: {
//   color: 'red',
//   textAlign: "center",
//   fontSize :40,
//   alignItems:'center',

// },

// Text4: {
//   color: '#7D7D7D',
//   textAlign: "center",
//   fontSize :20,
//   alignItems:'center',

// },

// car: {
//   marginTop: 40,
//   backgroundColor: 'red',
//   alignItems: 'center'
// },

// buttonContainer: {
//   marginTop: 300,
//   margin:20

// },

// })
