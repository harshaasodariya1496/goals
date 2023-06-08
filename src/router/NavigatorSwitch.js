import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';
import EmployeeNavigator from './EmployeeNavigator';
import ManagerNavigator from './ManagerNavigator';
import AuthNavigator from './AuthNavigator';
const Stack = createNativeStackNavigator();

function NavigatorSwitch() {
  const user = useSelector(state => state.user.userDetails);
  console.log(user);
  if (user?.userType.toLowerCase() == 'emp') return <EmployeeNavigator />;
  else if (user?.userType.toLowerCase() == 'manager')
    return <ManagerNavigator />;
  else return <AuthNavigator />;
}

export default NavigatorSwitch;
