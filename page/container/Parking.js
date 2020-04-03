import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'
import { Dialog, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog'

export const Parking = (props) => {
  const { navigation } = props
  const [defaultNamePlace, setNamePlace] = useState({ namePlace: 'default' })
  const [dialogVisible, setDialogVisible] = useState(false)
  const dialogHead = `Book a ${defaultNamePlace.namePlace.name} park`

  useEffect(() => {
    const fetching = async () => {
      try {
        const paramsNamePlace = await navigation.getParam('namePlace', '')
        await setNamePlace({ namePlace: paramsNamePlace })
      } catch (e) {
        console.log(e)
      }
    }
    fetching()
    // IIFE
    // (async function fetching() {
    //   await navigation.getParam('namePlace', '')
    //   setNamePlace({ namePlace: navigation.getParam('namePlace', '') })
    // } ) ( )
  }, [])

  const handleBooking = () => {
    console.log('Booking')
    navigation.navigate('TimerBook')
  }

  const handleCar = () => {
    console.log('Car')
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

      <View style={styles.Text}>
        <Text style={styles.Text2}>เหลือที่ว่าง</Text>
        <Text style={styles.Text1}>10 คัน</Text>

        <Text style={styles.Text3}>จากทั้งหมด</Text>
        <Text style={styles.Text4}>10 คัน</Text>
      </View>

      <View style={styles.form}>
        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>001</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>002</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>003</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>004</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>005</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={require('../../image/Green.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: '7%' }} />

      <View style={styles.form}>
        <TouchableOpacity onPress={handleCar}>
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

        <TouchableOpacity onPress={handleCar}>
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

        <TouchableOpacity onPress={handleCar}>
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

        <TouchableOpacity onPress={handleCar}>
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

        <TouchableOpacity onPress={handleCar}>
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
      <TouchableOpacity
        style={styles.buttonBook}
        onPress={() => {
          setDialogVisible(true)
        }}
      >
        <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Book a park</Text>
      </TouchableOpacity>
      <Dialog
        width={0.9}
        rounded
        visible={dialogVisible}
        dialogTitle={
          <DialogTitle
            title={dialogHead}
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
              text="Confirm"
              style={{
                backgroundColor: 'white',
                alignSelf: 'center'
              }}
              bordered
              onPress={() => {
                handleBooking()
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
        onTouchOutside={() => {
          setDialogVisible(false)
        }}
      >
        <DialogContent>
          <Text>You have 15 minutes left to book a park. Are you sure you want to confirm ?</Text>
        </DialogContent>
      </Dialog>
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
    marginVertical: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  buttonBook: {
    marginHorizontal: '35%',
    backgroundColor: '#093540',
    borderRadius: 4,
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
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
