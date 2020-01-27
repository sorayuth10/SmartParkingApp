import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';  
import { Image,SocialIcon,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Park extends React.Component {
  static navigationOptions = {
    title: 'Park',
    
  };
  render() {
    const {navigate} = this.props.navigation;
  return (
    
    <View style={styles.container}>          
    <View style={styles.Park1}> 
    <Text style = {styles.Text1}>
    สถานที่จอดรถ
    </Text>

    <View style={styles.kmitl}> 
    <View style={{flex: 1}}>  
    <Image
          onPress={this.onPressButton}
          style={{ width: 200, height: 200}}
          source={require('../../image/kmitl.jpg')} /> 
          onPress={() => navigate('Home', {name: 'Home'})}
   
    </View> 
    </View>  

    <Text style = {styles.Text2}>
    สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
    </Text>


    </View> 
                
    </View>
);  
}  
}  

const styles = StyleSheet.create({  

container: {  
flex: 1,    
backgroundColor: 'white',
},

Text1: {
    color: 'black',
    textAlign: "center",
    fontSize :35,
    alignItems:'center',
    marginTop : 50
  },

kmitl: {
    color: 'black',
    textAlign: "center",
    alignItems:'center',
    marginTop : 50
  
    
  },  
  
  Text2: {
    color: '#7D7D7D',
    textAlign: "center",
    fontSize :20,
    marginTop : 225
  
   
   
    
  },

 




})