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
    <View style={styles.Text}> 
    <Text style = {styles.Text1}>
    3 คัน
    </Text>

    <Text style = {styles.Text2}>
    เหลือที่ว่าง
    </Text>

    <Text style = {styles.Text3}>
    3 คัน
    </Text>

    <Text style = {styles.Text4}>
    ทั้งหมด
    </Text>
   
    </View>
 


    <View style={styles.car}> 
    <View style={{flex: 1, flexDirection: 'row'}}>  
   
    <Image
            style={{ width: 105, height: 200}}
            source={require('../../image/Green.png')} /> 
    <Image
            style={{ width: 105, height: 200}}
            source={require('../../image/Green.png')} /> 
    <Image
            style={{ width: 105, height: 200}}
            source={require('../../image/Green.png')} /> 
    </View> 
    </View>  

    <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="ดูสถานที่อื่นๆ"
                        color="#848484" 
                        onPress={() => navigate('Park', {name: 'Park'})}
                    />  
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

Text: {
  textAlign: "center",
  alignItems:'center',
  
  
  marginTop: 30  
 
},


Text1: {
  color: 'red',
  textAlign: "center",
  fontSize :40,
  alignItems:'center',

  
},

Text2: {
  color: '#7D7D7D',
  textAlign: "center",
  fontSize :20,
  flexDirection:'row',
  alignItems:'center',
 
  
},

Text3: {
  color: 'red',
  textAlign: "center",
  fontSize :40,
  alignItems:'center',
 
  
},

Text4: {
  color: '#7D7D7D',
  textAlign: "center",
  fontSize :20,
  alignItems:'center',
  
  
},


car: {  
  marginTop: 40,     
  backgroundColor: 'red',  
  alignItems: 'center'
},

buttonContainer: {  
  marginTop: 300,   
  margin:20  
  
  
},




})