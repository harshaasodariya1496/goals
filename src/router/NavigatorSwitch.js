import React from 'react'; 
import Login from '../screens/Login';
import {useSelector} from 'react-redux';
import EmployeeNavigator from './EmployeeNavigator';
import ManagerNavigator from './ManagerNavigator';
import AuthNavigator from './AuthNavigator';  

function NavigatorSwitch() {
  const user = useSelector(state => state.user.userDetails);
 
  if (user?.userType.toLowerCase() == 'employee') return <EmployeeNavigator />;
  else if (user?.userType.toLowerCase() == 'manager')
    return <ManagerNavigator />;
  else return <AuthNavigator />;
}

export default NavigatorSwitch;
