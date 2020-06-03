import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Loading } from './containers/Loading'
import Login from './containers/Login'
import Register from './containers/Register'

import Home from './containers/Home'
import NewProfile from './containers/NewProfile'
import Profile from './containers/Profile'
import Parking from './containers/Parking'
import AboutUs from './containers/AboutUs'
import TimerBook from './containers/TimerBook'

import * as firebase from 'firebase'
import { firebaseConfig } from './configs/config'

firebase.initializeApp(firebaseConfig)

const AppStack = createStackNavigator(
  {
    Home: Home,
    NewProfile: NewProfile,
    Profile: Profile,
    Parking: Parking,
    AboutUs: AboutUs,
    TimerBook: TimerBook
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
