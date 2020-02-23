import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Loading } from './container/Loading'
import Login from './container/Login'
import Register from './container/Register'

import Home from './container/Home'
import NewProfile from './container/NewProfile'
import Profile from './container/Profile'
import Parking from './container/Parking'
import AboutUs from './container/AboutUs'

import * as firebase from 'firebase'
import { firebaseConfig } from '../config'

firebase.initializeApp(firebaseConfig)

const AppStack = createStackNavigator(
  {
    Home: Home,
    NewProfile: NewProfile,
    Profile: Profile,
    Parking: Parking,
    AboutUs: AboutUs
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
)

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Loading'
    }
  )
)
