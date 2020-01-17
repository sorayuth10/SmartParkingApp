import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from 'react-native';  
import { Image,SocialIcon,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}> 
    
    </View>
  )}
}  

const styles = StyleSheet.create({  
container: {  
margin: 1,    
backgroundColor: 'white',  
}, 
})