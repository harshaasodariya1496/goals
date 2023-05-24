import {
  View,
  Text, 
  ScrollView,
  Dimensions,
  ImageBackground, 
} from 'react-native'; 
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';
import Button from '../../../../component/Button';
import TextInput from '../../../../component/TextInput';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const AddOpportunity = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState('');
  const [isError, setIsError] = useState(false);
  const onDone = () => {
    setIsError(true);
    if (
      fName !== '' ||
      company !== '' ||
      email !== '' ||
      phone !== '' ||
      job !== ''
    ) {
      setIsError(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.bg} source={images.background}>
        <View style={{marginTop: 20, alignItems: 'flex-end'}}>
          <Button
            type={'icon'}
            icon={
              <MaterialCommunityIcons
                size={30}
                color={Colors.white}
                name={'close'}
              />
            }
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 32, marginVertical: 40, color: Colors.white}}>
            New Opportunity
          </Text>
          <TextInput
            placeholder="First Name"
            value={fName}
            onChangeText={setFName}
            style={styles.input}
            isError={isError && fName === ''}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email"
            isError={isError && email === ''}
          />
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="number-pad"
            isError={isError && phone === ''}
          />

          <TextInput
            placeholder="Company"
            value={company}
            onChangeText={setCompany}
            isError={isError && company === ''}
            style={styles.input}
          />

          <TextInput
            placeholder="Job Title"
            value={job}
            onChangeText={setJob}
            isError={isError && job === ''}
            style={styles.input}
          />
          <Button
            title={'Save'}
            style={{height: 46, marginTop: 60}}
            textStyle={{fontSize: 14}}
            onPress={onDone}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AddOpportunity;
