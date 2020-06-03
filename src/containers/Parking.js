import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import { Dialog, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog'
import { NavigationActions, StackActions } from 'react-navigation'
import config from '../configs'
import useForceUpdate from 'use-force-update'

export const Parking = (props) => {
  const { navigation } = props
  const [defaultNamePlace, setNamePlace] = useState('default')
  const [dialogVisible, setDialogVisible] = useState(false)
  const dialogHead = `Book a ${defaultNamePlace} park`
  const Green = require('../../assets/Green.png')
  const Red = require('../../assets/Red.png')
  const Grey = require('../../assets/Grey.png')
  const [carPark, setCarPark] = useState([])
  const forceUpdate = useForceUpdate()
  const refeshPage = () => {
    setTimeout(() => {
      forceUpdate()
    }, 5000)
  }
  const fetchingNamePlace = useCallback(async () => {
    try {
      const paramsNamePlace = await navigation.getParam('namePlace', '')
      await setNamePlace(paramsNamePlace.name)
    } catch (e) {
      console.log(e)
    }
  }, [])
  const fetchingSensor = useCallback(async () => {
    let sensor = await axios.get(`${config.apiUrl}/${defaultNamePlace}`)
    setCarPark(sensor.data)
  }, [defaultNamePlace])
  const parkReport = (num) => {
    if (carPark[num] === 0) {
      return Red
    } else if (carPark[num] === 1) {
      return Green
    } else {
      return Grey
    }
  }
  const sumAvailable = () => carPark.reduce((a, b) => a + b, 0)

  useEffect(() => {
    fetchingNamePlace()
    setTimeout(() => {
      fetchingSensor()
    }, 1200)
    refeshPage()
  }, [refeshPage])

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'TimerBook' })]
  })

  const handleBooking = () => {
    navigation.dispatch(resetAction)
  }

  const handleCar = () => {}

  return (
    <View style={styles.container}>
      {/* dark-content Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

      <View style={styles.header}>
        {/* Back button */}
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={32} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{defaultNamePlace}</Text>
      </View>

      <View style={styles.Text}>
        <Text style={{ fontSize: 15 }}>เหลือที่ว่าง</Text>
        <Text style={{ fontSize: 20, color: 'red' }}> {sumAvailable()} คัน</Text>
        <Text style={{ fontSize: 15 }}>จากทั้งหมด</Text>
        <Text style={{ fontSize: 20 }}>10</Text>
      </View>

      <View style={styles.form}>
        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>001</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={parkReport(0)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>002</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={parkReport(1)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>003</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={parkReport(2)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>004</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={parkReport(3)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCar}>
          <View style={styles.item}>
            <Text style={{ alignSelf: 'center' }}>005</Text>
            <Image
              style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 5.2 }}
              source={parkReport(4)}
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
              source={parkReport(5)}
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
              source={parkReport(6)}
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
              source={parkReport(7)}
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
              source={parkReport(8)}
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
              source={parkReport(9)}
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
  },
  header: {
    paddingTop: 60,
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
    fontSize: 25,
    fontWeight: '500'
  },
  Text: {
    alignItems: 'center',
    paddingTop: 15
  },
  back: {
    position: 'absolute',
    top: 60,
    left: 20,
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
