import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from 'react-native';  
import { Image,SocialIcon,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
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
    placeholder='First name'
    textAlign='left'
    
    />
    </View>

    <View style={styles.InputContainer}>     
    <Input
    placeholder='Last name'
    textAlign='left'

    />
    </View>

    <View style={styles.InputContainer}>     
    <Input
    placeholder='Email address'
    textAlign='left'
    
    />
    </View>

    <View style={styles.InputContainer}>
      <Input
    secureTextEntry
    placeholder='Password'
    autoCapitalize="none"
    textAlign='left'

    />
    </View>  

    <View style={styles.buttonContainer}>  
        <Button  
            onPress={this.onPressButton}  
            title="CREAT ACCOUNT"
            color="#0074E1"  
        />  
    </View>  

    <View style={styles.buttonContainer}>  
        <Button  
            onPress={this.onPressButton}  
            title="BLACK"  
            color="#B1B1B1"  
        />  
    </View>  
  
</View>  
);  
}  
}  

const styles = StyleSheet.create({  

container: {  
margin: 0,    
backgroundColor: 'white',  
},

LogoContainer: {  
marginTop: 10 ,  
paddingTop: 80,
paddingVertical: 20,
backgroundColor: 'white',
alignItems: 'center'  
},

InputContainer: {  
margin: 20, 
marginTop: 10 , 
flexDirection: 'row',  
justifyContent: 'space-between',
backgroundColor: 'white',  

},

buttonContainer: {  
margin: 20,
marginTop: 30,
  
}
})