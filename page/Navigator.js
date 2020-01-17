import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from "./Container/Login";
import Home from "./Container/Home";
import Register from "./Container/Register";

const AppNavigator = createStackNavigator({
  Login : { screen: Login },
  Home : { screen: Home },
  Register : {screen: Register},
});

const App = createAppContainer(AppNavigator);

export default App;