import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Progress} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleCheckBox from 'react-native-circle-checkbox';
import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import {numberWithCommas} from '../../../utils/constant';
import {useState} from 'react';
import Button from '../../../component/Button';
import Header from '../../../component/Header';
import TextInput from '../../../component/TextInput';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const AddBonusForm = ({navigation}) => {
  const [funName, setFunName] = useState('');
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');
  const [amount, setAmount] = useState('');
  const [isMonetary, setIsMonetary] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  return (
    <KeyboardAvoidingScrollView style={styles.container}>
      <ImageBackground source={images.background}>
        <Header onBackPress={() => navigation.goBack()} />
        <View style={styles.titleSection}>
          <Image
            source={images.bonuses}
            style={styles.menuImage}
            resizeMode="contain"
          />
          <Text style={styles.menuTitle}>Add New Bonus</Text>
        </View>
        <View style={styles.formMain}>
          <Text style={styles.labelText}>Let’s give this bonus a fun name</Text>
          <TextInput
            value={funName}
            onChangeText={setFunName}
            placeholder={'Example: Annual Quota Buster'}
            placeholderTextColor={'#222B2E'}
            style={styles.inputStyle}
          />
          <Text style={styles.labelText}>
            When does this bonus period begin?
          </Text>
          <TextInput
            inputType={'datePicker'}
            value={periodStart}
            onChangeText={setPeriodStart}
            placeholder={'mm/dd/yy'}
            color={'#222B2E'}
            mode={'date'}
            format={'MM/D/yy'}
            touchStyle={styles.dateTouchStyle}
            textStyle={styles.datePickerText}
          />
          <Text style={styles.labelText}>When does this bonus period end?</Text>
          <TextInput
            inputType={'datePicker'}
            value={periodEnd}
            onChangeText={setPeriodEnd}
            placeholder={'mm/dd/yy'}
            color={'#222B2E'}
            mode={'date'}
            format={'MM/D/yy'}
            touchStyle={styles.dateTouchStyle}
            textStyle={styles.datePickerText}
          />
          <Text style={styles.labelText}>
            What sales goal needs to be met or exceeded in order to award this
            bonus?
          </Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder={'$1,000,000'}
            placeholderTextColor={'#222B2E'}
            style={styles.inputStyle}
          />
          <Text style={styles.labelText}>Award is:</Text>
          <View style={styles.checkBoxContent}>
            <CheckBox
              tintColors={{true: Colors.white, false: Colors.white}}
              value={isMonetary}
              onValueChange={setIsMonetary}
            />
            <Text
              style={
                styles.checkBoxLabelText
              }>{`Monetary Sum (money, gift card, etc.)`}</Text>
          </View>
          <View style={[styles.checkBoxContent, {marginBottom: 36}]}>
            <CheckBox
              tintColors={{true: Colors.white, false: Colors.white}}
              value={isExperience}
              onValueChange={setIsExperience}
            />
            <Text
              style={
                styles.checkBoxLabelText
              }>{`Experience (trip, event, etc.)`}</Text>
          </View>
        </View>

        <View style={{alignItems: 'center', marginBottom: 100}}>
          <Button
            title={'Finish'}
            textStyle={{fontSize: 14, color: Colors.white}}
            style={styles.newBonusBtn}
            onPress={() => {
              navigation.navigate('Bonuses', {isList: true});
            }}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingScrollView>
  );
};

export default AddBonusForm;
