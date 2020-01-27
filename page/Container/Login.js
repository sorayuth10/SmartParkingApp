import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView, KeyboardAvoidingView, TouchableHighlight, TextInput } from 'react-native';  
import { Image,SocialIcon,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class Login extends React.Component {
  static navigationOptions = {
   title: 'Login',
  };
  render() {
    const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}> 
                <View style={styles.LogoContainer}>  
                <Image
                        style={{ width: 150, height: 160, alignItems: 'center'}}
                        source={require('../../image/Icon.png')}
                    
                />
                </View> 


                <View style={styles.inputContainer}>
                <Icon style={styles.Icon}
                        name='user' 
                        size={25}
                        color='black'
                />
                <TextInput style={styles.input}
                        placeholder="Username"
                        onChangeText={(Username) => this.setState({Username})}
                />
                </View>


                <View style={styles.inputContainer}>
                <Icon style={styles.Icon}
                        name='lock'
                        size={25}
                        color='black'
                        marginLeft='55'
                        margin='20' 
                        paddingLeft='50'
                />
                <TextInput style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(Password) => this.setState({Password})}/>
                </View>


                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Log in"
                        color="#009933" 
                        onPress={() => navigate('Home', {name: 'Home'})}
                    />  
                </View>  

                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Register"  
                        color="#0074E1"
                        onPress={() => navigate('Register', {name: 'Register'})}  
                    />  
                </View>  
              

            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
   /* container: {  
        flex: 1,  
        justifyContent: 'center',
        backgroundColor: 'black',  
        marginHorizontal: 25,
        margin: 50
    }, */
    
    container: {    
      flex: 1,
      backgroundColor: 'white',  
    },


    LogoContainer: {  
      marginTop: '10%',  
      paddingTop: '1%',
      paddingVertical: 20,
      backgroundColor: 'white',
      alignItems: 'center'  
    },


    inputContainer: {
      borderBottomColor: '#E3E3E3',
      backgroundColor: '#E3E3E3',
      borderRadius:30,
      width:325,
      height:50,
      marginBottom:1,
      flexDirection: 'row',
      marginLeft:15,
      marginTop: '5%',  
      paddingTop: '7%',
      alignItems:'center'
     
  },


    Icon:{
      height:25,
      marginLeft:15,
      borderBottomColor: '#FFFFFF',    
  },


    input:{
      height:45,
      marginLeft:20,
      borderBottomColor: '#FFFFFF',
      flex:1,  
  },


    buttonContainer: {  
      marginTop: '10%' ,  
      paddingTop: '2%',
      width:325,
      height:50,
      margin:'5%',
      marginBottom:'0%'
              
  }
})

     {/* <Button
        title="xxxxx"
        onPress={() => navigate('Home', {name: 'xxxx'})}
      /> */}
    
 