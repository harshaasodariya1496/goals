import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import {Center, Button as NativeButton, Radio, Switch} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import CheckBox from '@react-native-community/checkbox';
import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

import styles from './style';
import {scale, verticalScale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Notification = ({navigation}) => {
  const [userList, setUserList] = useState([
    {
      name: 'Begining of Day Pace Setter',
      isPush: false,
      isEmail: false,
      isOpen: false,
    },
    {
      name: 'End of Day Summary',
      isPush: false,
      isEmail: false,
      isOpen: false,
    },
    {
      name: 'Pipeline',
      isPush: false,
      isEmail: false,
      isOpen: false,
    },
    {
      name: 'Discussions',
      isPush: false,
      isEmail: false,
      isOpen: false,
    },
    {
      name: 'Bonuses',
      isPush: false,
      isEmail: false,
      isOpen: false,
    },
    {
      name: 'Highlights',
      isPush: false,
      isEmail: false,
      isOpen: false,
    },
    {
      name: 'Contests',
      isPush: false,
      isEmail: false,
      isOpen: false,
    },
  ]);
  const onSelectUser = (index, type) => {
    let arr = userList;
    console.log(arr[index]);
    if (type === 'isEmail') arr[index].isEmail = !arr[index].isEmail;
    else arr[index].isPush = !arr[index].isPush;
    setUserList([...arr]);
  };
  const onSave = () => {};

  const onItemPress = index => {
    let arr = userList;
    arr[index].isOpen = !arr[index].isOpen;
    setUserList([...arr]);
  };
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 18,
        padding: 40,
        marginHorizontal: 23,
      }}>
      <FlatList
        data={userList}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.cardMain}>
            <Pressable
              onPress={() => onItemPress(index)}
              style={styles.cardPress}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Feather
                name={item.isOpen ? 'chevron-up' : 'chevron-down'}
                size={scale(20)}
                color={Colors.black}
              />
            </Pressable>
            {item.isOpen && (
              <View>
                <View style={styles.innerView}>
                  <Text style={styles.innerText}>Push Notification On</Text>
                  <View style={styles.switchStyle}>
                    <View
                      style={{
                        borderRadius: 50,
                        backgroundColor: item.isPush ? Colors.green : '#B7C1CC',
                      }}>
                      <Switch
                        value={item.isPush}
                        size="lg"
                        onValueChange={() => {
                          onSelectUser(index, 'isPush');
                        }}
                        thumbColor={Colors.white}
                        trackColor={{false: '#B7C1CC', true: Colors.green}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.innerView}>
                  <Text style={styles.innerText}>Email Notification On</Text>
                  <View style={styles.switchStyle}>
                    <View
                      style={{
                        borderRadius: 50,
                        backgroundColor: item.isEmail
                          ? Colors.green
                          : '#B7C1CC',
                      }}>
                      <Switch
                        value={item.isEmail}
                        size="lg"
                        onValueChange={() => {
                          onSelectUser(index, 'isEmail');
                        }}
                        thumbColor={Colors.white}
                        trackColor={{false: '#B7C1CC', true: Colors.green}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        )}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          title={'Save Change'}
          style={styles.saveBtn}
          textStyle={{fontSize: 14}}
          onPress={onSave}
        />
      </View>
    </View>
  );
};

export default Notification;
