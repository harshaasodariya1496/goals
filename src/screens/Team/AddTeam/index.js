import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import Header from '../../../component/Header';
import Button from '../../../component/Button'; 
import TextInput from '../../../component/TextInput';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';

const AddTeam = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [annualSalary, setAnnualSalary] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSelected, setIsSelected] = useState('Add People');
  const [status, setStatus] = useState('checked');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };
  const onDone = () => {
    if (fName === '' || lName === '' || email === '' || annualSalary === '') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <ImageBackground style={styles.container} source={images.background}>
      <KeyboardAvoidingScrollView nestedScrollEnabled>
        <Header
          // title={'Add New Customer'}
          onBackPress={() => navigation.goBack()}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <Image
            source={images.team}
            style={{height: 35, width: 45, marginRight: 10}}
          />
          <Text style={{fontSize: 33, color: Colors.white}}>Team Settings</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            alignItems: 'center',
            paddingTop: 0,
            width: '87%',
          }}>
          <Button
            type={'small'}
            title={'Add People'}
            onPress={() => {
              setIsSelected('Add People');
            }}
            style={{
              backgroundColor:
                isSelected == 'Add People' ? Colors.lightBlue3 : Colors.white,
            }}
            textStyle={{
              color: isSelected == 'Add People' ? Colors.white : Colors.black,
            }}
          />
          <Button
            type={'small'}
            title={'Remove People'}
            onPress={() => {
              setIsSelected('Remove People');
            }}
            style={{
              backgroundColor:
                isSelected == 'Remove People' ? Colors.lightBlue3 : Colors.white,
            }}
            textStyle={{
              color:
                isSelected == 'Remove People' ? Colors.white : Colors.black,
            }}
          />
          <Button
            type={'small'}
            title={'Salaries'}
            onPress={() => {
              setIsSelected('Salaries');
            }}
            style={{
              backgroundColor:
                isSelected == 'Salaries' ? Colors.lightBlue3 : Colors.white,
            }}
            textStyle={{
              color: isSelected == 'Salaries' ? Colors.white : Colors.black,
            }}
          />
        </View>

        <View style={styles.midContent}>
          <TextInput
            placeholder="First Name"
            value={fName}
            onChangeText={setFName}
            style={styles.input}
            isError={isError && fName === ''}
          />
          <TextInput
            placeholder="Last Name"
            value={lName}
            onChangeText={setLName}
            isError={isError && lName === ''}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            isError={isError && email === ''}
          />
          <TextInput
            placeholder="Annual Salary"
            value={annualSalary}
            onChangeText={setAnnualSalary}
            style={styles.input}
            keyboardType="number-pad"
            isError={isError && annualSalary === ''}
          />
          <TouchableOpacity style={styles.addMoreView}>
            <AntDesign name="plus" size={15} color={Colors.white} />
            <Text style={styles.addMoreText}>Add More</Text>
          </TouchableOpacity>

          <View style={{marginVertical: 40, alignItems: 'center'}}>
            <Button
              title={'Done'}
              style={{height: 46}}
              textStyle={{fontSize: 14}}
              onPress={onDone}
            />
          </View>
        </View>
        <View style={{height: 50}} />
      </KeyboardAvoidingScrollView>
    </ImageBackground>
  );
};

export default AddTeam;
