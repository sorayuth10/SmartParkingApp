import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import * as firebase from 'firebase'
import { NavigationActions, StackActions } from 'react-navigation'
import QRCode from 'react-native-qrcode'

const INITIAL_TIME = 900000

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Home' })]
})
class TimerBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: INITIAL_TIME,
      start: false,
      notification: {}
    }

    this.countdown = this.countdown.bind(this)
    this.handleClickStartStop = this.handleClickStartStop.bind(this)
  }

  async sendPushNotification() {
    let ExpoToken = {}
    firebase
      .database()
      .ref('UserAuth/' + firebase.auth().currentUser.uid + '/pushToken')
      .on('value', (data) => {
        ExpoToken = data
      })

    let response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: ExpoToken,
        sound: 'default',
        title: 'Booking',
        body: 'Timeup to book a park!'
      })
    })
  }

  handleClickStartStop() {
    const { start, countdown, time } = this.state

    if (!start) {
      const expiredDate = new Date().getTime() + time + 1000

      const countdownFn = setInterval(() => this.countdown(expiredDate), 1000)
      this.setState({ countdown: countdownFn })
    } else {
      this.props.navigation.dispatch(resetAction)
      clearInterval(countdown)
      // Notifications.cancelAllScheduledNotificationsAsync()
      this.setState({ start: false, time: INITIAL_TIME })
    }
  }

  countdown(expiredDate) {
    const { countdown } = this.state
    const currentDate = new Date().getTime()
    let newTime = expiredDate - currentDate
    let start = true

    if (newTime < 0) {
      newTime = INITIAL_TIME
      start = false
      this.sendPushNotification()
      clearInterval(countdown)
      // Notifications.cancelAllScheduledNotificationsAsync()
    }

    this.setState({ time: newTime, start })
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync()
    this.handleClickStartStop()
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
    // this.registerForPushNotificationsAsync()
  }

  registerForPushNotificationsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    // only asks if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    // On Android, permissions are granted on app installation, so
    // `askAsync` will never prompt the user

    // Stop here if the user did not grant permissions
    if (status !== 'granted') {
      console.log('No notification permissions!')
      return
    }
    // Get the token that identifies this device
    let token = await Notifications.getExpoPushTokenAsync()

    // POST the token to your backend server from where you can retrieve it to send push notifications.
    try {
      firebase
        .database()
        .ref('UserAuth/' + firebase.auth().currentUser.uid + '/pushToken')
        .set(token)
    } catch (error) {
      console.log(error)
    }
  }

  _handleNotification = (notification) => {
    // do whatever you want to do with the notification
    this.setState({ notification: notification })
  }

  render() {
    const { time, start } = this.state
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((time % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0')

    return (
      <View style={styles.container}>

        <View style={styles.positonQR}>
          <QRCode
            value={'smartparking'}
            //Setting the value of QRCode
            size={400}
            //Size of QRCode
            bgColor="#000"
            //Backgroun Color of QRCode
            fgColor="#fff"
            //Front Color of QRCode
          />
        </View>

        <Text style={styles.timeCountdown}>{`${minutes}:${seconds}`}</Text>

        <TouchableOpacity style={styles.button} onPress={this.handleClickStartStop}>
          <Text style={styles.fontButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeCountdown: {
    marginTop: -180,
    fontSize: 50,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#555555',
    marginTop: 20
  },
  fontButton: {
    fontSize: 40,
    padding: 10
  },
  positonQR: {
    marginLeft: '65%'
  }
})

export default TimerBook
