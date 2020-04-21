import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class AboutUs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* dark-content Status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#EBECF4" animated={true} />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>About Us</Text>

          {/* Back button */}
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={32}></Ionicons>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.LogoContainer}>
            <Image style={{ width: 350, height: 180, alignItems: 'center' }} source={require('../../assets/km.jpg')} />
          </View>

          <View style={styles.form}>
            <Image style={{ width: 170, height: 160, alignItems: 'center' }} source={require('../../assets/Por.jpg')} />
            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>NITHI SEMANUANG</Text>
            <Text style={{ fontSize: 14, textAlign: 'center' }}>Hardware Developer</Text>

            <Image style={{ width: 170, height: 160, alignItems: 'center', marginTop: 20 }} source={require('../../assets/Nine.jpg')} />
            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>PAPON PROMMOOL</Text>
            <Text style={{ fontSize: 14, textAlign: 'center' }}>Administration / Document Controller</Text>

            <Image style={{ width: 170, height: 160, alignItems: 'center', marginTop: 20 }} source={require('../../assets/O.jpg')} />
            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>SORAYUTH CHAROENSRISAN</Text>
            <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 20 }}>Software Developer</Text>

          </View>
        </ScrollView>
      </View>
    )
  }
}

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

  LogoContainer: {
    alignItems: 'center'
  },

  form: {
    marginVertical: 20,
    marginHorizontal: 20,
    marginTop: 25,
    alignItems: 'center'
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
  }
})
