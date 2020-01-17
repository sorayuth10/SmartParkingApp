import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from 'react-native';  
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

                <View style={styles.InputContainer}>     
                <Input
                placeholder='Username'
                textAlign='left'
                
                leftIcon={
                  <Icon
                    name='user'
                    size={25}
                    color='black'
                    
                  />
                }
                />
                </View>

                <View style={styles.InputContainer}>
                  <Input
                secureTextEntry
                placeholder='Password'
                autoCapitalize="none"
                textAlign='left'
                leftIcon={
                  <Icon
                    name='lock'
                    size={25}
                    color='black'
                  />
                }
                errorStyle={{color: 'red', textAlign: 'right'}}
                errorMessage='Forget Password?'
                />
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
      margin: 0,    
      backgroundColor: 'white',  
    },

    LogoContainer: {  
      marginTop: 80 ,  
      paddingTop: 60,
      paddingVertical: 20,
      backgroundColor: 'white',
      alignItems: 'center'  
    },

    InputContainer: {  
      margin: 10, 
      marginTop: 20 , 
      flexDirection: 'row',  
      justifyContent: 'space-between',
      backgroundColor: 'white',  
      
    },

    buttonContainer: {  
        margin: 20,
              
    }
})

     {/* <Button
        title="xxxxx"
        onPress={() => navigate('Home', {name: 'xxxx'})}
      /> */}
    
 