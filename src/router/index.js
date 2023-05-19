import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import {scale} from 'react-native-size-matters';
import styles from './style';
import Dashboard from '../screens/Dashboard';
import Team from '../screens/Team';
import Discussion from '../screens/Discussion';
import Sidebar from '../screens/Sidebar';
import Customers from '../screens/Customers';
import {images} from '../utils/images';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {Colors} from '../utils/colors';
import AddCustomers from '../screens/Customers/AddCustomer';
import Goals from '../screens/Goals';
import AddTeam from '../screens/Team/AddTeam';
import Reports from '../screens/Reports';
import ViewCustomer from '../screens/Customers/ViewCustomer';
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
      <Stack.Screen name="AddTeam" component={AddTeam} />
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
      initialRouteName="Dashboard"
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
      initialRouteName="ViewCustomers"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Sidebar" component={Sidebar} />
      <Stack.Screen name="Customers" component={Customers} />
      <Stack.Screen name="AddCustomers" component={AddCustomers} />
      <Stack.Screen name="ViewCustomers" component={ViewCustomer} />
    </Stack.Navigator>
  );
}

export default Root;
