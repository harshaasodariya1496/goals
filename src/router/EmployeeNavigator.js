import React, {useEffect} from 'react';
import {scale} from 'react-native-size-matters';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import {CommonActions, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Team from '../screens/Team';
import AddTeam from '../screens/Team/AddTeam';
import Lead from '../screens/Team/TeamOption/Lead';
import Sale from '../screens/Team/TeamOption/Sale';
import TeamOption from '../screens/Team/TeamOption';
import TeamDetails from '../screens/Team/TeamDetails';
import AddLead from '../screens/Team/TeamOption/AddLead';
import AddSale from '../screens/Team/TeamOption/AddSale';
import LeadDetail from '../screens/Team/TeamOption/LeadDetail';
import Opportunity from '../screens/Team/TeamOption/Opportunity';
import TeamActions from '../screens/Team/TeamOption/TeamActions';
import SalesDetail from '../screens/Team/TeamOption/SalesDetails';
import Opportunities from '../screens/Team/TeamOption/Opportunities';
import AddOpportunity from '../screens/Team/TeamOption/AddOpportunity';

import Setting from '../screens/Setting';

import Customers from '../screens/Customers';
import AddCustomers from '../screens/Customers/AddCustomer';
import ViewCustomer from '../screens/Customers/ViewCustomer';
import CustomerDetail from '../screens/Customers/ViewCustomer/CustomerDetail';

import Chat from '../screens/Discussion/Chat';
import Discussion from '../screens/Discussion';
import AddGroup from '../screens/Discussion/AddGroup';

import Highlights from '../screens/HighLights';
import AddHighlight from '../screens/HighLights/AddHighlight';

import {images} from '../utils/images';
import {Colors} from '../utils/colors';

import styles from './style';
import EmployeeDrawer from './EmployeeDrawer';
import AddDeal from '../screens/AddDeal';
import Dashboard from '../screens/Employee/Dashboard';
import Goals from '../screens/Employee/Goals';
import Commissions from '../screens/Employee/Commissions';
import SplashScreen from 'react-native-splash-screen';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Tab = CurvedBottomBar;

const Menu = ({navigation}) => {
  return <View></View>;
};

const DashboardNavigator = () => {
  const DashboardStack = createStackNavigator();

  return (
    <DashboardStack.Navigator screenOptions={{headerShown: false}}>
      <DashboardStack.Screen name="DashboardMain" component={Dashboard} />
    </DashboardStack.Navigator>
  );
};

const GoalNavigator = () => {
  const GoalStack = createStackNavigator();

  return (
    <GoalStack.Navigator screenOptions={{headerShown: false}}>
      <GoalStack.Screen name="GoalMain" component={Goals} />
    </GoalStack.Navigator>
  );
};
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="AddDeal"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="TeamActions" component={TeamActions} />
      <HomeStack.Screen name="AddDeal" component={AddDeal} />
    </HomeStack.Navigator>
  );
};
const DiscussionNavigator = () => {
  const DiscussionStack = createStackNavigator();

  return (
    <DiscussionStack.Navigator screenOptions={{headerShown: false}}>
      <DiscussionStack.Screen name="DiscussionMain" component={Discussion} />
      <DiscussionStack.Screen name="AddGroup" component={AddGroup} />
      <DiscussionStack.Screen name="Setting" component={Setting} />
    </DiscussionStack.Navigator>
  );
};
const MenuNavigator = () => {
  const MenuStack = createStackNavigator();

  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name="Menu" component={Menu} />
    </MenuStack.Navigator>
  );
};

function EmpTab({navigation}) {
  const _renderIcon = (routeName, selectedTab) => {
    let image = '';
    switch (routeName) {
      case 'Home':
        image = images.dashboard;
        break;
      case 'Goals':
        image = images.goals;
        break;
      case 'Discussion':
        image = images.discussion;
        break;
      case 'Menu':
        image = images.menu;
        break;
    }

    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={image}
          style={[
            styles.tabIcon,
            {
              tintColor:
                routeName == selectedTab ? Colors.lightBlue : Colors.grey2,
            },
          ]}
        />
        <Text
          style={[
            styles.tabText,
            {
              color: routeName == selectedTab ? Colors.lightBlue : Colors.grey2,
            },
          ]}>
          {routeName.replace('Tab', '')}
        </Text>
      </View>
    );
  };
  // const isDrawerOpen = useDrawerStatus();
  // console.log('isDrawerOpen----', isDrawerOpen);

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('call', routeName);
          if (routeName == 'Menu')
            navigation.dispatch(DrawerActions.toggleDrawer());
          // navigation.navigate('Sidebar');
          else
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: routeName}],
              }),
            );
        }}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      height={scale(55)} 
      bgColor={Colors.white}
      circlePosition={'CENTER'}
      circleWidth={scale(40)}
      tabBar={renderTabBar}
      renderCircle={({selectedTab, navigate}) => (
        <TouchableOpacity
          style={{top: scale(-23), alignItems: 'center'}}
          onPress={() => {
            navigate('Dashboard');
          }}>
          <Image source={images.tabLogo} style={[styles.tabHomeIcon]} />
        </TouchableOpacity>
      )}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={DashboardNavigator} position="LEFT" />
      <Tab.Screen name="Goals" component={GoalNavigator} position="LEFT" />
      <Tab.Screen name="Dashboard" component={HomeNavigator} />
      <Tab.Screen
        name="Discussion"
        component={DiscussionNavigator}
        position="RIGHT"
      />
      <Tab.Screen
        name="Menu"
        component={MenuNavigator}
        position="RIGHT"
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.dispatch(DrawerActions.toggleDrawer());
          },
        })}
      />
    </Tab.Navigator>
  );
}
const EmployeeDrawerNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName="Emp"
      drawerContent={props => <EmployeeDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: screenWidth,
        },
      }}>
      <Drawer.Screen name="Emp" component={EmpTab} />
      <Drawer.Screen name="Commissions" component={Commissions} />
      <Drawer.Screen name="Highlights" component={Highlights} />
      <Drawer.Screen name="AddHighlight" component={AddHighlight} />
      <Drawer.Screen name="Customers" component={Customers} />
      <Drawer.Screen name="AddGroup" component={AddGroup} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="AddCustomers" component={AddCustomers} />
      <Drawer.Screen name="ViewCustomers" component={ViewCustomer} />
      <Drawer.Screen name="CustomerDetail" component={CustomerDetail} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
};

function EmployeeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="EmployeeDrawerNavigator"
        component={EmployeeDrawerNavigator}
      />
    </Stack.Navigator>
  );
}

export default EmployeeNavigator;
