import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView, Dimensions } from 'react-native'
import * as firebase from 'firebase'
import styled from 'styled-components/native'
import { NavigationActions, StackActions } from 'react-navigation'

// CSS
const Container = styled.View`
  display: flex;
`
const List = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Home = (props) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'NewProfile' })]
  })
  const { navigation } = props
  const [arrangePlace, setArrangePlace] = useState([])
  const [urlDefault, setUrlDefault] = useState(require('../../assets/account.png'))

  useEffect(() => {
    if (firebase.auth().currentUser.photoURL != null) {
      setUrlDefault({ uri: firebase.auth().currentUser.photoURL })
    }
    firebase
      .database()
      .ref('UserAuth/' + firebase.auth().currentUser.uid)
      .once('value', (snap) => {
        if (!snap.exists()) {
          navigation.dispatch(resetAction)
        } else {
          let arrangePlace = []
          firebase
            .database()
            .ref('Devices')
            .on('value', (data) => {
              arrangePlace = Object.values(data.val()).map(({ Place: { img, name } }) => ({ img, name }))
              const filteredArrangePlace = arrangePlace.filter(
                ({ name }, index, selfs) => selfs.findIndex((self) => self.name === name) === index
              )
              setArrangePlace(filteredArrangePlace)
            })
        }
      })
  }, [])

  const handleProfile = () => {
    navigation.navigate('Profile')
  }

  const _placeList = () => {
    return arrangePlace.map(({ img, name }, index) => (
      <React.Fragment key={index}>
        <TouchableOpacity onPress={() => navigation.navigate('Parking', { namePlace: { name } })}>
          <View style={styles.placeItem}>
            <Image style={{ width: Dimensions.get('window').width / 2.02, height: 125 }} source={{ uri: img }} />
            <Text key={index} style={{ alignSelf: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      </React.Fragment>
    ))
  }

  return (
    <Container>
      {/* dark-content Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

      <View style={styles.header}>
        <Image
          style={{
            width: '25%',
            height: '75%',
            alignItems: 'flex-start',
            marginLeft: 10,
            marginTop: 40
          }}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.headerTitle}>PLACES</Text>
        <TouchableOpacity onPress={handleProfile}>
          <Image
            style={{ marginTop: 70, marginRight: 15, width: 70, height: 70, borderRadius: 50 }}
            source={urlDefault}
          />
          {/* {uri: firebase.auth().currentUser.photoURL} */}
        </TouchableOpacity>
      </View>

      <ScrollView style={{ marginTop: -50 }}>
        <List>{_placeList()}</List>
      </ScrollView>
    </Container>
  )
}
export default Home

const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    paddingBottom: 15,
    backgroundColor: '#ED9703',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 60,
    height: 190,
    bottom: 75,
    marginTop: 20
  },
  headerTitle: {
    top: 50,
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 25,
    marginRight: 15
  },
})
