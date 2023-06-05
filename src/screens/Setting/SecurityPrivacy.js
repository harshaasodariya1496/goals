import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Center, Button as NativeButton, Radio} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

import styles from './style';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const SecurityPrivacy = ({navigation}) => {
  const [previousPw, setPreviousPw] = useState('');
  const [isPreviousPw, setIsPreviousPw] = useState('');
  const [isNewPw, setIsNewPw] = useState('');
  const [isConfirmNewPw, setIsConfirmNewPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmNewPw, setConfirmNewPw] = useState('');
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(['one', 'two']);
  const onSave = () => {
    setIsError(true);
    if (previousPw !== '' || newPw !== '' || confirmNewPw !== '') {
      setIsError(false);
    }
  };
  return (
    <View style={[styles.formContent, {alignItems: 'flex-start'}]}>
      <Text style={styles.labelText}>Confirm Previous Password</Text>
      <View style={styles.textInputMain}>
        <TextInput
          placeholder={'Previous Password'}
          value={previousPw}
          onChangeText={setPreviousPw}
          style={styles.textInputStyle}
          secureTextEntry={!isPreviousPw}
        />
        <TouchableOpacity onPress={() => setIsPreviousPw(!isPreviousPw)}>
          <Feather
            name={isPreviousPw ? 'eye-off' : 'eye'}
            size={30}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.labelText}>Create New Password</Text>
      <View style={styles.textInputMain}>
        <TextInput
          placeholder={'New Password'}
          value={newPw}
          onChangeText={setNewPw}
          style={styles.textInputStyle}
          secureTextEntry={!isNewPw}
        />
        <TouchableOpacity onPress={() => setIsNewPw(!isNewPw)}>
          <Feather
            name={isNewPw ? 'eye-off' : 'eye'}
            size={30}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>
      <Radio.Group
        name="myRadioGroup"
        value={value}
        onChange={nextValue => {
          console.log(nextValue);
          setValue(nextValue);
        }}>
        <Radio value="one" size={4}>
          <Text style={{fontSize: scale(16), width: '80%'}}>
            At lease 8 characters long
          </Text>
        </Radio>
        <Radio value="two" size={4} my={5}>
          <Text style={{fontSize: scale(16)}}>
            Contain 1 Number & 1 Uppercase
          </Text>
        </Radio>
        <Radio value="three" size={4}>
          <Text style={{fontSize: scale(16)}}>Don't use old password</Text>
        </Radio>
      </Radio.Group>
      <Text style={[styles.labelText, {marginTop: 20}]}>
        Confirm New Password
      </Text>
      <View style={styles.textInputMain}>
        <TextInput
          placeholder={'Create New Password'}
          value={confirmNewPw}
          onChangeText={setConfirmNewPw}
          style={styles.textInputStyle}
          secureTextEntry={!isConfirmNewPw}
        />
        <TouchableOpacity onPress={() => setIsConfirmNewPw(!isConfirmNewPw)}>
          <Feather
            name={isConfirmNewPw ? 'eye-off' : 'eye'}
            size={30}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', width: '100%'}}>
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

export default SecurityPrivacy;
