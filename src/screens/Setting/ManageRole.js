import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
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

const ManageRole = ({navigation}) => {
  const [reminder, setReminder] = useState(false);
  const [isError, setIsError] = useState(false);
  const [margin, setMargin] = useState('');
  const [userList, setUserList] = useState([
    {
      name: 'Jacob Jones',
      isManager: false,
      isSales: false,
    },
    {
      name: 'Esther Howard',
      isManager: false,
      isSales: false,
    },
    {
      name: 'Albert Flores',
      isManager: false,
      isSales: false,
    },
    {
      name: 'Leslie Alexander',
      isManager: false,
      isSales: false,
    },
    {
      name: 'Jacob Jones',
      isManager: false,
      isSales: false,
    },
    {
      name: 'Esther Howard',
      isManager: false,
      isSales: false,
    },
    {
      name: 'Albert Flores',
      isManager: false,
      isSales: false,
    },
    {
      name: 'Leslie Alexander',
      isManager: false,
      isSales: false,
    },
  ]);
  const onSelectUser = (index, type) => {
    let arr = userList;
    console.log(arr[index]);
    if (type === 'manager') arr[index].isManager = !arr[index].isManager;
    else arr[index].isSales = !arr[index].isSales;
    setUserList([...arr]);
  };
  const onSave = () => {
    setIsError(true);
  };
  return (
    <View style={[styles.formContent, {paddingHorizontal: 0}]}>
      <View style={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          <View style={{width: '50%'}} />
          <View style={{width: '25%'}}>
            <Text
              style={{
                marginRight: 10,
                fontSize: scale(16),
                color: Colors.black,
              }}>
              Manager
            </Text>
          </View>
          <View style={{width: '25%'}}>
            <Text
              style={{
                textAlign: 'center',
                color: Colors.black,
                fontSize: scale(15),
              }}>
              Sales Associate
            </Text>
          </View>
        </View>
        <FlatList
          data={userList}
          style={{height: (screenHeight / 10) * 4, marginVertical: 20}}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 30,
                marginBottom: userList?.length - 1 == index ? 0 : 20,
                backgroundColor: Colors.grey1,
                borderRadius: 10,
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <View style={{width: '50%', paddingLeft: 15}}>
                <Text style={[styles.checkBoxLabelText]}>{item.name}</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 50,
                    backgroundColor: item.isManager ? Colors.green : '#B7C1CC',
                  }}>
                  <Switch
                    value={item.isManager}
                    size="lg"
                    onValueChange={() => {
                      onSelectUser(index, 'manager');
                    }}
                    thumbColor={Colors.white}
                    trackColor={{false: '#B7C1CC', true: Colors.green}}
                  />
                </View>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 50,
                    backgroundColor: item.isSales ? Colors.green : '#B7C1CC',
                  }}>
                  <Switch
                    value={item.isSales}
                    size="lg"
                    onValueChange={() => {
                      onSelectUser(index, 'sales');
                    }}
                    thumbColor={Colors.white}
                    trackColor={{false: '#B7C1CC', true: Colors.green}}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <Button
        title={'Save Change'}
        style={styles.saveBtn}
        textStyle={{fontSize: 14}}
        onPress={onSave}
      />
    </View>
  );
};

export default ManageRole;
