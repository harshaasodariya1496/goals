import React, {useEffect} from 'react';
import {scale} from 'react-native-size-matters';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  useDrawerProgress,
  useDrawerStatus,
} from '@react-navigation/drawer';

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
import SplashScreen from 'react-native-splash-screen';
import AddDeal from '../screens/AddDeal';
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
    <DashboardStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Dashboard">
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      <DashboardStack.Screen name="Bonuses" component={Bonuses} />
      <DashboardStack.Screen name="Contests" component={Contests} />
      <DashboardStack.Screen name="Highlights" component={Highlights} />
      <DashboardStack.Screen name="AddBonus" component={AddBonus} />
      <DashboardStack.Screen name="AddBonusForm" component={AddBonusForm} />
      <DashboardStack.Screen name="BonusTeam" component={BonusTeam} />
      <DashboardStack.Screen name="AddContest" component={AddContest} />
      <DashboardStack.Screen name="AddHighlight" component={AddHighlight} />
      <DashboardStack.Screen name="AddContestForm" component={AddContestForm} />
      <DashboardStack.Screen name="Customers" component={Customers} />
      <DashboardStack.Screen name="Commissions" component={Commissions} />
      <DashboardStack.Screen
        name="CommissionDetail"
        component={CommissionDetail}
      />
      <DashboardStack.Screen
        name="CommissionSettings"
        component={CommissionSettings}
      />
      <DashboardStack.Screen name="Setting" component={Setting} />
      <DashboardStack.Screen name="AddCustomers" component={AddCustomers} />
      <DashboardStack.Screen name="ViewCustomers" component={ViewCustomer} />
      <DashboardStack.Screen name="CustomerDetail" component={CustomerDetail} />
      <DashboardStack.Screen name="Chat" component={Chat} />
      <DashboardStack.Screen name="Reports" component={Reports} />
      <DashboardStack.Screen name="ReportDetails" component={ReportDetails} />
      <DashboardStack.Screen
        name="IndividualPerformance"
        component={IndividualPerformance}
      />
    </DashboardStack.Navigator>
  );
};

const TeamNavigator = () => {
  const TeamStack = createStackNavigator();

  return (
    <TeamStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Team">
      <TeamStack.Screen name="Team" component={Team} />
      <TeamStack.Screen name="AddTeam" component={AddTeam} />
      <TeamStack.Screen name="AddDeal" component={AddDeal} />
      <TeamStack.Screen name="TeamDetails" component={TeamDetails} />
    </TeamStack.Navigator>
  );
};
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      // initialRouteName='Lead'
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="TeamOption" component={TeamOption} />
      <HomeStack.Screen name="TeamActions" component={TeamActions} />
      <HomeStack.Screen name="Lead" component={Lead} />
      <HomeStack.Screen name="LeadDetail" component={LeadDetail} />
      <HomeStack.Screen name="SalesDetail" component={SalesDetail} />
      <HomeStack.Screen name="Opportunities" component={Opportunities} />
      <HomeStack.Screen name="AddLead" component={AddLead} />
      <HomeStack.Screen name="Opportunity" component={Opportunity} />
      <HomeStack.Screen name="AddOpportunity" component={AddOpportunity} />
      <HomeStack.Screen name="Sale" component={Sale} />
      <HomeStack.Screen name="AddSale" component={AddSale} />
    </HomeStack.Navigator>
  );
};
const DiscussionNavigator = () => {
  const DiscussionStack = createStackNavigator();

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
  const MenuStack = createStackNavigator();

  return (
    <MenuStack.Navigator
      screenOptions={{headerShown: false}}></MenuStack.Navigator>
  );
};

function ManagerTab() {
  const navigation = useNavigation();

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
        <Image
          source={image}
          style={[
            styles.tabIcon,
            {
              tintColor:
                routeName == selectedTab ? Colors.lightBlue3 : Colors.grey2,
            },
          ]}
        />
        <Text
          style={[
            styles.tabText,
            {
              color:
                routeName == selectedTab ? Colors.lightBlue3 :Colors.grey2,
            },
          ]}>
          {routeName.replace('Tab', '')}
        </Text>
      </View>
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (routeName == 'MenuTab') navigation.toggleDrawer();
          //  navigation.navigate('Sidebar');
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
      initialRouteName="DashboardTab"
      height={scale(55)}
      // type={'DOWN'}
      bgColor={Colors.white}
      circlePosition={'CENTER'}
      circleWidth={scale(40)}
      tabBar={renderTabBar}
      renderCircle={({selectedTab, navigate}) => {
        return (
          <TouchableOpacity
            style={{top: scale(-23), alignItems: 'center'}}
            onPress={() => {
              navigate('GoalsTab');
            }}>
            <Image source={images.tabLogo} style={[styles.tabHomeIcon]} />
          </TouchableOpacity>
        );
      }}
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
      <Tab.Screen name="MenuTab" component={MenuNavigator} position="RIGHT" />
    </Tab.Navigator>
  );
}
const ManagerDrawerNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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

      <Drawer.Screen name="Goals" component={Goals} />
      <Drawer.Screen name="GoalDetails" component={GoalDetails} />
      <Drawer.Screen name="Bonuses" component={Bonuses} />
      <Drawer.Screen name="Contests" component={Contests} />
      <Drawer.Screen name="Highlights" component={Highlights} />
      <Drawer.Screen name="AddBonus" component={AddBonus} />
      <Drawer.Screen name="AddBonusForm" component={AddBonusForm} />
      <Drawer.Screen name="BonusTeam" component={BonusTeam} />
      <Drawer.Screen name="AddContest" component={AddContest} />
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
    </Drawer.Navigator>
  );
};

function ManagerNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sidebar" component={ManagerDrawerNavigator} />
    </Stack.Navigator>
  );
}

export default ManagerNavigator;
