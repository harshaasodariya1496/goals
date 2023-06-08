import React from 'react';
import {scale} from 'react-native-size-matters';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import {CommonActions, DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import Login from '../screens/Login';
import Sidebar from './EmployeeDrawer';

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

import Goals from '../screens/Goals';
import GoalDetails from '../screens/Goals/GoalDetails';

import Reports from '../screens/Reports';
import ReportDetails from '../screens/Reports/ReportDetails';
import IndividualPerformance from '../screens/Reports/IndividualPerformance';

import Setting from '../screens/Setting';

import Customers from '../screens/Customers';
import AddCustomers from '../screens/Customers/AddCustomer';
import ViewCustomer from '../screens/Customers/ViewCustomer';
import CustomerDetail from '../screens/Customers/ViewCustomer/CustomerDetail';

import Dashboard from '../screens/Dashboard';

import Chat from '../screens/Discussion/Chat';
import Discussion from '../screens/Discussion';
import AddGroup from '../screens/Discussion/AddGroup';

import Commissions from '../screens/Commissions';
import CommissionDetail from '../screens/Commissions/CommissionDetail';
import CommissionSettings from '../screens/Commissions/CommissionSettings';

import Bonuses from '../screens/Bonuses';
import AddBonus from '../screens/Bonuses/AddBonus';
import BonusTeam from '../screens/Bonuses/BonusTeam';
import AddBonusForm from '../screens/Bonuses/AddBonusForm';

import Contests from '../screens/Contests';
import AddContest from '../screens/Contests/AddContest';
import AddContestForm from '../screens/Contests/AddContestForm';

import Highlights from '../screens/HighLights';
import AddHighlight from '../screens/HighLights/AddHighlight';
import ManagerDrawer from './ManagerDrawer';

import {images} from '../utils/images';
import {Colors} from '../utils/colors';

import styles from './style';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      <DashboardStack.Screen name="Reports" component={Reports} />
      <DashboardStack.Screen name="Commissions" component={Commissions} />
    </DashboardStack.Navigator>
  );
};

const TeamNavigator = () => {
  const TeamStack = createNativeStackNavigator();

  return (
    <TeamStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Team">
      <TeamStack.Screen name="Team" component={Team} />
      <TeamStack.Screen name="AddTeam" component={AddTeam} />
      <TeamStack.Screen name="TeamDetails" component={TeamDetails} />
      <TeamStack.Screen name="TeamOption" component={TeamOption} />
      <TeamStack.Screen name="TeamActions" component={TeamActions} />
      <TeamStack.Screen name="Lead" component={Lead} />
      <TeamStack.Screen name="LeadDetail" component={LeadDetail} />
      <TeamStack.Screen name="SalesDetail" component={SalesDetail} />
      <TeamStack.Screen name="Opportunities" component={Opportunities} />
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
      initialRouteName="TeamActions"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="TeamActions" component={TeamActions} />
      <HomeStack.Screen name="Goals" component={Goals} />
      <HomeStack.Screen name="GoalDetails" component={GoalDetails} />
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
      <MenuStack.Screen name="Commissions" component={Commissions} />
    </MenuStack.Navigator>
  );
};

function ManagerTab({navigation}) {
  const _renderIcon = (routeName, selectedTab) => {
    let image = '';
    switch (routeName) {
      case 'DashboardTab':
        image = images.dashboard;
        break;
      case 'TeamTab':
        image = images.team;
        break;
      case 'DiscussionTab':
        image = images.discussion;
        break;
      case 'MenuTab':
        image = images.menu;
        break;
    }

    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={image} style={styles.tabIcon} />
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
          if (routeName == 'MenuTab') navigation.navigate('ManagerDrawer');
          // navigation.toggleDrawer();
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
      initialRouteName="GoalsTab"
      height={scale(45)}
      type={'DOWN'}
      bgColor={Colors.white}
      circlePosition={'CENTER'}
      circleWidth={50}
      tabBar={renderTabBar}
      renderCircle={({selectedTab, navigate}) => (
        <TouchableOpacity
          style={{top: scale(-20)}}
          onPress={() => {
            navigate('Goals');
          }}>
          <Image source={images.tabLogo} style={[styles.tabHomeIcon]} />
        </TouchableOpacity>
      )}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="DashboardTab"
        component={DashboardNavigator}
        position="LEFT"
      />
      <Tab.Screen name="TeamTab" component={TeamNavigator} position="LEFT" />
      <Tab.Screen name="GoalsTab" component={HomeNavigator} />
      <Tab.Screen
        name="DiscussionTab"
        component={DiscussionNavigator}
        position="RIGHT"
      />
      <Tab.Screen
        name="MenuTab"
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
const ManagerDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ManagerTab"
      drawerContent={props => <ManagerDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: screenWidth,
        },
      }}>
      <Drawer.Screen name="ManagerTab" component={ManagerTab} />
      <Drawer.Screen name="ManagerDrawer" component={ManagerDrawer} />

      <Drawer.Screen name="Bonuses" component={Bonuses} />
      <Drawer.Screen name="AddBonus" component={AddBonus} />
      <Drawer.Screen name="AddBonusForm" component={AddBonusForm} />
      <Drawer.Screen name="BonusTeam" component={BonusTeam} />
      <Drawer.Screen name="Contests" component={Contests} />
      <Drawer.Screen name="AddContest" component={AddContest} />
      <Drawer.Screen name="Highlights" component={Highlights} />
      <Drawer.Screen name="AddHighlight" component={AddHighlight} />
      <Drawer.Screen name="AddContestForm" component={AddContestForm} />
      <Drawer.Screen name="Customers" component={Customers} />
      <Drawer.Screen name="Commissions" component={Commissions} />
      <Drawer.Screen name="CommissionDetail" component={CommissionDetail} />
      <Drawer.Screen name="CommissionSettings" component={CommissionSettings} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="AddCustomers" component={AddCustomers} />
      <Drawer.Screen name="ViewCustomers" component={ViewCustomer} />
      <Drawer.Screen name="CustomerDetail" component={CustomerDetail} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Reports" component={Reports} />
      <Drawer.Screen name="ReportDetails" component={ReportDetails} />
      <Drawer.Screen
        name="IndividualPerformance"
        component={IndividualPerformance}
      />
      <Drawer.Screen name="MainDashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

function ManagerNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ManagerDrawerNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ManagerDrawerNavigator" component={ManagerDrawerNavigator} />
      {/* <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Sidebar" component={Sidebar} />
      <Stack.Screen name="Bonuses" component={Bonuses} />
      <Stack.Screen name="AddBonus" component={AddBonus} />
      <Stack.Screen name="AddBonusForm" component={AddBonusForm} />
      <Stack.Screen name="BonusTeam" component={BonusTeam} />
      <Stack.Screen name="Contests" component={Contests} />
      <Stack.Screen name="AddContest" component={AddContest} />
      <Stack.Screen name="Highlights" component={Highlights} />
      <Stack.Screen name="AddHighlight" component={AddHighlight} />
      <Stack.Screen name="AddContestForm" component={AddContestForm} />
      <Stack.Screen name="Customers" component={Customers} />
      <Stack.Screen name="Commissions" component={Commissions} />
      <Stack.Screen name="CommissionDetail" component={CommissionDetail} />
      <Stack.Screen name="CommissionSettings" component={CommissionSettings} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="AddCustomers" component={AddCustomers} />
      <Stack.Screen name="ViewCustomers" component={ViewCustomer} />
      <Stack.Screen name="CustomerDetail" component={CustomerDetail} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="ReportDetails" component={ReportDetails} />
      <Stack.Screen
        name="IndividualPerformance"
        component={IndividualPerformance}
      /> */}
    </Stack.Navigator>
  );
}

export default ManagerNavigator;
