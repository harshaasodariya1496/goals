import {
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Button as NativeButton} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

import styles from './style';
import {useSelector} from 'react-redux';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const GeneralSetting = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [workAnniversary, setWorkAnniversary] = useState('Work Anniversary');
  const [dob, setDob] = useState('Date of Birth');
  const [teamSize, setTeamSize] = useState('');
  const [isError, setIsError] = useState(false);
  const user = useSelector(state => state.user.userDetails);

  const onSave = () => {
    setIsError(true);
    if (
      fName != '' ||
      lName !== '' ||
      email !== '' ||
      phone !== '' ||
      (user?.userType.toLowerCase() == 'manager' && teamSize !== '') ||
      workAnniversary !== 'Work Anniversary' ||
      dob !== 'Date of Birth'
    ) {
      setIsError(false);
    }
  };
  return (
    <View style={styles.formContent}>
      <TextInput
        label={'First Name'}
        value={fName}
        onChangeText={setFName}
        isError={isError && fName === ''}
        inputType={'with-label'}
      />

      <TextInput
        label={'Last Name'}
        value={lName}
        onChangeText={setLName}
        isError={isError && lName === ''}
        inputType={'with-label'}
      />

      <TextInput
        label={'Email'}
        value={email}
        onChangeText={setEmail}
        isError={isError && email === ''}
        inputType={'with-label'}
      />

      <TextInput
        label={'Phone'}
        value={phone}
        onChangeText={setPhone}
        isError={isError && phone === ''}
        inputType={'with-label'}
      />

      <TextInput
        inputType={'datePicker'}
        value={workAnniversary}
        mode={'date'}
        onChangeText={setWorkAnniversary}
        isError={isError && workAnniversary === 'Work Anniversary'}
      />

      <TextInput
        inputType={'datePicker'}
        value={dob}
        mode={'date'}
        onChangeText={setDob}
        isError={isError && dob === 'Date of Birth'}
      />
      {user?.userType.toLowerCase() == 'manager' && (
        <TextInput
          placeholder={'Sales Team Size'}
          inputType={'with-label'}
          value={teamSize}
          onChangeText={setTeamSize}
          isError={isError && teamSize === ''}
        />
      )}

      <Button
        title={'Save Change'}
        style={styles.saveBtn}
        textStyle={{fontSize: 14}}
        onPress={onSave}
      />
    </View>
  );
};

export default GeneralSetting;
