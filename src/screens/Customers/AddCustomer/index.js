import {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import Header from '../../../component/Header';
import Button from '../../../component/Button';
import TextInput from '../../../component/TextInput';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';

const AddCustomers = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [officePhone, setOfficePhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [isError, setIsError] = useState(false);

  const onDone = () => {
    if (
      name === '' ||
      address === '' ||
      city === '' ||
      state === '' ||
      zipcode === '' ||
      contactName === '' ||
      email === '' ||
      officePhone === '' ||
      cellPhone === ''
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <ImageBackground style={styles.container} source={images.background}>
      <KeyboardAvoidingScrollView nestedScrollEnabled>
        <Header
          title={'Add New Customer'}
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.midContent}>
          <TextInput
            placeholder="Company or Customer Full Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            isError={isError && name === ''}
          />
          <TextInput
            placeholder="Street Address"
            value={address}
            onChangeText={setAddress}
            isError={isError && address === ''}
            style={styles.input}
          />
          <TextInput
            placeholder="City"
            value={city}
            onChangeText={setCity}
            style={styles.input}
            isError={isError && city === ''}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="State"
              value={state}
              onChangeText={setState}
              style={[styles.input, {width: '48%'}]}
              isError={isError && state === ''}
            />
            <TextInput
              placeholder="Zip Code"
              value={zipcode}
              onChangeText={setZipcode}
              style={[styles.input, {width: '48%'}]}
              keyboardType="number-pad"
              isError={isError && zipcode === ''}
            />
          </View>
          <TextInput
            placeholder="Primary Contact Full Name"
            value={contactName}
            onChangeText={setContactName}
            style={styles.input}
            isError={isError && contactName === ''}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            isError={isError && email === ''}
          />
          <TextInput
            placeholder="Office Phone"
            value={officePhone}
            onChangeText={setOfficePhone}
            style={styles.input}
            keyboardType="number-pad"
            isError={isError && officePhone === ''}
          />
          <TextInput
            placeholder="Cell Phone"
            value={cellPhone}
            onChangeText={setCellPhone}
            style={styles.input}
            keyboardType="number-pad"
            isError={isError && cellPhone === ''}
          />
          <View style={styles.addMoreView}>
            <AntDesign name="plus" size={15} color={Colors.white} />
            <Text style={styles.addMoreText}>Add More</Text>
          </View>

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

export default AddCustomers;
