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

const InviteTeam = ({navigation}) => {
  const [reminder, setReminder] = useState(false);
  const [isError, setIsError] = useState(false);
  const [margin, setMargin] = useState('');
  const [userList, setUserList] = useState([
    {
      name: 'Jacob Jones',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Esther Howard',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Albert Flores',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Leslie Alexander',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Jacob Jones',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Esther Howard',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Albert Flores',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Leslie Alexander',
      isChecked: false,
      salary: 10000,
    },
  ]);
  const onSelectUser = index => {
    let arr = userList;
    arr[index].isChecked = !arr[index].isChecked;
    setUserList([...arr]);
  };
  const onSave = () => {
    setIsError(true);
  };
  return (
    <View style={[styles.formContent]}>
      <View style={{width: '100%'}}>
        <Text style={styles.inviteTitle}>
          Invite Your Users
        </Text>
        <Text
          style={styles.inviteDesc}>
          You've added users to your account. Now let them know about it
        </Text>
        <FlatList
          data={userList}
          style={{height: (screenHeight / 10) * 4, marginVertical: 20}}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              key={index}
              style={[
                styles.checkBoxContent,
                {marginBottom: userList?.length - 1 == index ? 0 : 20},
              ]}>
              <CheckBox
                tintColors={{true: Colors.lightBlue4}}
                value={item.isChecked}
                onValueChange={() => onSelectUser(index)}
              />
              <Image
                source={images.user}
                style={styles.inviteUserImage}
              />
              <Text style={styles.checkBoxLabelText}>{item.name}</Text>
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

export default InviteTeam;
