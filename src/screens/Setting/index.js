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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Setting = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('General Settings');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [workAnniversary, setWorkAnniversary] = useState('Work Anniversary');
  const [dob, setDob] = useState('Date of Birth');
  const [teamSize, setTeamSize] = useState('');
  const [isError, setIsError] = useState(false);
  const onSave = () => {
    setIsError(true);
    if (
      fName != '' ||
      lName !== '' ||
      email !== '' ||
      phone !== '' ||
      teamSize !== '' ||
      workAnniversary !== 'Work Anniversary' ||
      dob !== 'Date of Birth'
    ) {
      setIsError(false);
    }
  };
  return (
    <KeyboardAvoidingScrollView style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={images.background}></ImageBackground>

      <View style={{top: -125}}>
        <View style={styles.mainContainer}>
          <View style={styles.userContainer}>
            <Image source={images.user} style={styles.userImage} />
          </View>
          <NativeButton
            size="sm"
            variant="outline"
            _text={styles.changeBtnText}
            style={styles.changeBtn}>
            Change Picture
          </NativeButton>

          <NativeButton _text={styles.removeBtnText} variant="unstyled">
            Remove
          </NativeButton>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialCommunityIcons
              size={30}
              color={Colors.lightBlue2}
              name={'close'}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={[
            {name: 'General Settings'},
            {name: 'Security & Privacy'},
            {name: 'Notifcation'},
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.btnList}
          renderItem={({item, index}) => {
            return (
              <Button
                type={'small'}
                title={item.name.toLocaleUpperCase()}
                onPress={() => {
                  setIsSelected(item.name);
                }}
                style={{
                  backgroundColor:
                    isSelected == item.name ? Colors.lightBlue4 : Colors.white,
                }}
                textStyle={{
                  color: isSelected == item.name ? Colors.white : Colors.black,
                }}
              />
            );
          }}
        />
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

          <TextInput
            placeholder={'Sales Team Size'}
            inputType={'with-label'}
            value={teamSize}
            onChangeText={setTeamSize}
            isError={isError && teamSize === ''}
          />

          <Button
            title={'Save Change'}
            style={styles.saveBtn}
            textStyle={{fontSize: 14}}
            onPress={onSave}
          />
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Setting;
