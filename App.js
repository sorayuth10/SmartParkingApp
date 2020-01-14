import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Button,Image,SocialIcon,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Image
        style={{ width: 150, height: 150 }}
        source={require('./image/Icon.png')}
      />
<Input
  placeholder='Username'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>

<Input

  placeholder='Password'
  leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    />
  }
  errorStyle={{ color: 'red' }}
  errorMessage='ลืมรหัสผ่าน'
/>
<View style={styles.container1}>
      <Button
        title="Log in"
      />
     </View>
     <View style={styles.container2}>
       <Button
        title="Register"
      />
      </View>
  
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 0.1,
    backgroundColor: 'white',
    
  },
  container2: {
    flex: 0.2,
    backgroundColor: 'white',
    
  },

});
