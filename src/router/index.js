import React from 'react';
import {scale} from 'react-native-size-matters';
import {View, Image, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Team from '../screens/Team';
import Login from '../screens/Login';
import Goals from '../screens/Goals';
import Reports from '../screens/Reports';
import Setting from '../screens/Setting';
import Sidebar from '../screens/Sidebar';
import Customers from '../screens/Customers';
import Dashboard from '../screens/Dashboard';
import Chat from '../screens/Discussion/Chat';
import AddTeam from '../screens/Team/AddTeam';
import Discussion from '../screens/Discussion';
import Lead from '../screens/Team/TeamOption/Lead';
import Sale from '../screens/Team/TeamOption/Sale';
import TeamOption from '../screens/Team/TeamOption';
import TeamDetails from '../screens/Team/TeamDetails';
import AddGroup from '../screens/Discussion/AddGroup';
import AddSale from '../screens/Team/TeamOption/AddSale';
import AddLead from '../screens/Team/TeamOption/AddLead';
import AddCustomers from '../screens/Customers/AddCustomer';
import ViewCustomer from '../screens/Customers/ViewCustomer';
import Opportunity from '../screens/Team/TeamOption/Opportunity';
import AddOpportunity from '../screens/Team/TeamOption/AddOpportunity';
import CustomerDetail from '../screens/Customers/ViewCustomer/CustomerDetail';

import {images} from '../utils/images';
import {Colors} from '../utils/colors';

import styles from './style';

const Stack = createNativeStackNavigator();

const Tab = CurvedBottomBar;

const Menu = ({navigation}) => {
  return <View></View>;
};

const DashboardNavigator = () => {
  const DashboardStack = createNativeStackNavigator();

  return (
    <DashboardStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Dashboard">
      <DashboardStack.Screen name="MainDashboard" component={Dashboard} />
      <DashboardStack.Screen name="Reports" component={Reports} />
    </DashboardStack.Navigator>
  );
};

const TeamNavigator = () => {
  const TeamStack = createNativeStackNavigator();

  return (
    <TeamStack.Navigator screenOptions={{headerShown: false}}>
      <TeamStack.Screen name="TeamContainer" component={Team} />
      <TeamStack.Screen name="AddTeam" component={AddTeam} />
      <TeamStack.Screen name="TeamDetails" component={TeamDetails} />
      <TeamStack.Screen name="TeamOption" component={TeamOption} />
      <TeamStack.Screen name="Lead" component={Lead} />
      <TeamStack.Screen name="AddLead" component={AddLead} />
      <TeamStack.Screen name="Opportunity" component={Opportunity} />
      <TeamStack.Screen name="AddOpportunity" component={AddOpportunity} />
      <TeamStack.Screen name="Sale" component={Sale} />
      <TeamStack.Screen name="AddSale" component={AddSale} />
    </TeamStack.Navigator>
  );
};
const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="Goals"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Goals" component={Goals} />
    </HomeStack.Navigator>
  );
};
const DiscussionNavigator = () => {
  const DiscussionStack = createNativeStackNavigator();

  return (
    <DiscussionStack.Navigator screenOptions={{headerShown: false}}>
      <DiscussionStack.Screen
        name="DiscussionContainer"
        component={Discussion}
      />
      <DiscussionStack.Screen name="AddGroup" component={AddGroup} />
      <DiscussionStack.Screen name="Setting" component={Setting} />
    </DiscussionStack.Navigator>
  );
};
const MenuNavigator = () => {
  const MenuStack = createNativeStackNavigator();

  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name="Menu" component={Menu} />
      <MenuStack.Screen name="Customers" component={Customers} />
    </MenuStack.Navigator>
  );
};

function MyTabs({navigation}) {
  const _renderIcon = (routeName, selectedTab) => {
    let image = '';
    switch (routeName) {
      case 'Dashboard':
        image = images.dashboard;
        break;
      case 'Team':
        image = images.team;
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
        <Image source={image} style={styles.tabIcon} />
      </View>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (routeName == 'Menu') navigation.navigate('Sidebar');
          else navigate(routeName);
        }}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Team"
      height={50}
      type={'DOWN'}
      bgColor={Colors.white}
      circlePosition={'CENTER'}
      circleWidth={50}
      tabBar={renderTabBar}
      renderCircle={({selectedTab, navigate}) => (
        <TouchableOpacity
          style={{top: scale(-25)}}
          onPress={() => {
            navigate('Goals');
          }}>
          <Image source={images.tabLogo} style={[styles.tabHomeIcon]} />
        </TouchableOpacity>
      )}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        position="LEFT"
      />
      <Tab.Screen name="Team" component={TeamNavigator} position="LEFT" />
      <Tab.Screen name="Goals" component={HomeNavigator} />
      <Tab.Screen
        name="Discussion"
        component={DiscussionNavigator}
        position="RIGHT"
      />
      <Tab.Screen name="Menu" component={MenuNavigator} position="RIGHT" />
    </Tab.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Sidebar" component={Sidebar} />
      <Stack.Screen name="Customers" component={Customers} />
      <Stack.Screen name="AddCustomers" component={AddCustomers} />
      <Stack.Screen name="ViewCustomers" component={ViewCustomer} />
      <Stack.Screen name="CustomerDetail" component={CustomerDetail} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

export default Root;
