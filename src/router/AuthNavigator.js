import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SplashScreen from 'react-native-splash-screen';
const Stack = createStackNavigator();

function AuthNavigator() { 
  return (
    <Stack.Navigator
      initialRouteName="ManagerDrawer"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
