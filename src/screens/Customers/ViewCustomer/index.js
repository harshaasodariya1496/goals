import {
  View,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import Notes from './Notes';
import Reminders from './Reminders';
import Header from '../../../component/Header';
import ChatInput from '../../../component/ChatInput';
import TransactionHistory from './TransactionHistory';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ViewCustomer = props => {
  const title = props.route.params?.title ? props.route.params.title : '';
  const [tabPage, setTabPage] = useState(0);
  const [note, setNote] = useState('');
  const [reminderText, setReminderText] = useState('');
  const [isViewDetails, setIsViewDetails] = useState(false);
  const routes = [
    {key: 'Notes', title: 'Notes'},
    {key: 'Reminders', title: 'Reminders'},
    {key: 'Transaction History', title: 'Transaction History'},
  ];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  const _handleIndexChange = index => setTabPage(index);
  const _renderScene = SceneMap({
    Notes: Notes,
    Reminders: Reminders,
    Transaction_History: TransactionHistory,
  });
  const onSubmitEditing = ({nativeEvent: {text, eventCount, target}}) => {};
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
    <KeyboardAvoidingScrollView behavior="padding" style={styles.container}>
      <ImageBackground style={styles.bg} source={images.background}>
        <Header
          title={title}
          onBackPress={() => {
            if (isViewDetails === true) {
              setIsViewDetails(false);
            } else props.navigation.navigate('Customers');
          }}
          onTitlePress={() => {
            // props.navigation.navigate('CustomerDetail', {title: title});
            setIsViewDetails(true);
          }}
          textStyle={{fontSize: 14, fontWeight: 700}}
          isPopOver
          firstIcon={() => {
            return (
              <Octicons
                name="eye"
                size={21}
                color={Colors.darkGrey}
                style={{marginRight: 10}}
              />
            );
          }}
          secondIcon={() => {
            return (
              <Octicons
                name="pencil"
                size={21}
                color={Colors.darkGrey}
                style={{marginRight: 10}}
              />
            );
          }}
          thirdIcon={() => {
            return (
              <Image
                source={images.trash}
                style={styles.trashImage}
                resizeMode="contain"
              />
            );
          }}
          firstTitle={'View'}
          secondTitle={'Edit'}
          thirdTitle={'Delete'}
          firstOnPress={() => {
            setIsViewDetails(true);
          }}
          secondOnPress={() => {}}
          thirdOnPress={() => {}}
        />
      </ImageBackground>
      {isViewDetails ? (
        <View style={{paddingHorizontal: 40, marginTop: 30}}>
          <View style={{marginVertical: 10}}>
            <Text style={styles.labelText}>Primary Contact</Text>
            <Text style={styles.valueText}>Dan Berger</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.labelText}>Office Phone</Text>
            <Text style={styles.valueText}>21865432919</Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.labelText}>Cell Phone</Text>
            <Text style={styles.valueText}>612-925-5678</Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.labelText}>Email</Text>
            <Text style={styles.valueText}>dan@financialplanners.com</Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.labelText}>Address</Text>
            <Text style={styles.valueText}>
              1000 Shelard Parkway 120 St Louis Park, Minnesota 55426
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <View style={{height: (screenHeight / 100) * 73}}>
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
          {tabPage != 2 && (
            <ChatInput
              renderFirstIcon={
                tabPage == 0 ? (
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      size={24}
                      color={Colors.darkGrey2}
                      name={'paperclip'}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={showDatePicker}>
                    <Image
                      source={images.calender}
                      tintColor={Colors.darkGrey2}
                      style={styles.footerImages}
                    />
                  </TouchableOpacity>
                )
              }
              placeholder={
                tabPage == 0 ? 'Write note here ' : 'Add Reminder here'
              }
              value={tabPage == 0 ? note : reminderText}
              onChangeText={e =>
                tabPage == 0 ? setNote(e) : setReminderText(e)
              }
              onSubmitEditing={onSubmitEditing}
              isVisible={isDatePickerVisible}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          )}
        </View>
      )}
    </KeyboardAvoidingScrollView>
  );
};

export default ViewCustomer;
