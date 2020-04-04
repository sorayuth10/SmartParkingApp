import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import * as Network from 'expo-network'
import { NavigationActions, StackActions } from 'react-navigation'

// const [defaultStatusConnected, setStatusConnected] = useState(null)

export const RetryConnected = (props) => {
  const { navigation } = props
  useEffect(async() => {
    await Network.getNetworkStateAsync().then((data) => {
        navigation.dispatch(data.isConnected == true ? LinkToHome : '')
    })
  }, [navigation])

//   const checkingNetwork = async () => {
//     await Network.getNetworkStateAsync().then((data) => {
//       if (data.isConnected == true) {
//         navigation.dispatch(LinkToHome)
//         setStatusConnected(true)
//       }
//     })
//   }

  const LinkToHome = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })]
  })

  return (
    <View style={styles.container}>
      <Text>You lost internet conection.</Text>
    </View>
  )
}
export default RetryConnected
