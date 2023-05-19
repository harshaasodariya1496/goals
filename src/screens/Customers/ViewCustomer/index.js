import {
  View, 
  Image,
  Animated, 
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import Octicons from 'react-native-vector-icons/Octicons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import Notes from './Notes'; 
import Reminders from './Reminders';
import Header from '../../../component/Header'; 
import TransactionHistory from './TransactionHistory';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ViewCustomer = props => {
  const title = props.route.params?.title ? props.route.params.title : '';
  const [tabPage, setTabPage] = useState(0);
  const routes = [
    {key: 'Notes', title: 'Notes'},
    {key: 'Reminders', title: 'Reminders'},
    {key: 'Transaction History', title: 'Transaction History'},
  ]; 

  const _handleIndexChange = index => setTabPage(index);
  const _renderScene = SceneMap({
    Notes: Notes,
    Reminders: Reminders,
    Transaction_History: TransactionHistory,
  });
  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={[
                styles.tabItem,
                {
                  borderBottomWidth: i == tabPage ? 3 : 0,
                },
              ]}
              key={i}
              onPress={() => setTabPage(i)}>
              <Animated.Text
                style={[
                  styles.tabTitle,
                  {
                    color: i == tabPage ? Colors.lightBlue : Colors.black,
                  },
                ]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <KeyboardAvoidingScrollView style={styles.container}>
      <ImageBackground style={styles.bg} source={images.background}>
        <Header
          title={title}
          onBackPress={() => {
            props.navigation.navigate('Customers');
          }}
          onTitlePress={() => {
            props.navigation.navigate('CustomerDetail', {title: title});
          }}
          textStyle={{fontSize: 14, fontWeight: 700}}
          isPopOver
          firstIcon={() => {
            return (
              <Octicons
                name="pencil"
                size={21}
                color={Colors.darkGrey}
                style={{marginRight: 10}}
              />
            );
          }}
          secondIcon={() => {
            return (
              <Image
                source={images.trash}
                style={styles.trashImage}
                resizeMode="contain"
              />
            );
          }}
          firstTitle={'Edit'}
          secondTitle={'Delete'}
          firstOnPress={() => {}}
          secondOnPress={() => {}}
        />
      </ImageBackground>
      <View style={{height: (screenHeight / 100) * 75}}>
        <TabView
          navigationState={{
            index: tabPage,
            routes: [
              {key: 'Notes', title: 'Notes'},
              {key: 'Reminders', title: 'Reminders'},
              {key: 'Transaction_History', title: 'Transaction History'},
            ],
          }}
          renderScene={_renderScene}
          renderTabBar={_renderTabBar}
          onIndexChange={_handleIndexChange}
        />
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default ViewCustomer;
