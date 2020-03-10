import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'
import {Dialog,DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog'

export const Parking = (props) => {
  const { navigation } = props

  const [defaultNamePlace, setNamePlace] = useState({ namePlace: "default" })

  const [dialogVisible, setDialogVisible] = useState(false)

  useEffect(() => {
    const fetching = async () => {
      try {
        const paramsNamePlace = navigation.getParam('namePlace', '')
        setNamePlace({ namePlace : paramsNamePlace })
      } catch (e) {
        console.log(e)
      }
    }
    fetching()
  }, [])

  const handleBooking = () => {
    console.log('Booking')
    //จองงง
  }

  return (
    <View style={styles.container}>
      {/* dark-content Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

      <View style={styles.header}>
        {/* Back button */}
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={32} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{defaultNamePlace.namePlace.name}</Text>
      </View>

      <View style={styles.form}>
        <TouchableOpacity
          onPress={() => {
            setDialogVisible(true)
          }}
        >
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>001</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>
        <Dialog
          width={0.7}
          visible={dialogVisible}
          rounded
          onTouchOutside={() => {
            setDialogVisible(false)
          }}
          dialogTitle={
            <DialogTitle
              title="Booking Park 001"
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                alignItems: 'center'
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="OK"
                style={{
                  backgroundColor: 'white',
                  alignSelf: 'center'
                }}
                bordered
                onPress={() => {
                  setDialogVisible(false)
                }}
                key="button-1"
              />
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {
                  setDialogVisible(false)
                }}
                key="button-2"
              />
            </DialogFooter>
          }
        ><DialogContent>
      </DialogContent></Dialog>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>002</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>003</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>004</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>005</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Image
              style={{
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 5.2,
                transform: [{ rotate: '180deg' }]
              }}
              source={require('../../image/Green.png')}
            />
            <Text style={{ alignSelf: 'center' }}>006</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Image
              style={{
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 5.2,
                transform: [{ rotate: '180deg' }]
              }}
              source={require('../../image/Green.png')}
            />
            <Text style={{ alignSelf: 'center' }}>007</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Image
              style={{
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 5.2,
                transform: [{ rotate: '180deg' }]
              }}
              source={require('../../image/Green.png')}
            />
            <Text style={{ alignSelf: 'center' }}>008</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Image
              style={{
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 5.2,
                transform: [{ rotate: '180deg' }]
              }}
              source={require('../../image/Green.png')}
            />
            <Text style={{ alignSelf: 'center' }}>009</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.item}>
            <Image
              style={{
                width: Dimensions.get('window').width / 5,
                height: Dimensions.get('window').height / 5.2,
                transform: [{ rotate: '180deg' }]
              }}
              source={require('../../image/Green.png')}
            />
            <Text style={{ alignSelf: 'center' }}>010</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Parking

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
    marginTop: '25%',
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
