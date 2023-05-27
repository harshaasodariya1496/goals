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

const AddHighlight = ({navigation}) => {
  const [funName, setFunName] = useState('');
  const [description, setDescription] = useState('');
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');
  const [amount, setAmount] = useState('');
  const [isMonetary, setIsMonetary] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  const [isEveryone, setIsEveryone] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  return (
    <KeyboardAvoidingScrollView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <Header onBackPress={() => navigation.goBack()} />
        <View style={styles.titleSection}>
          <Text style={styles.menuTitle}>Acknowledge Great Work</Text>
        </View>
        <View style={styles.formMain}>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder={
              'Example: The sales rep who books the most revenue in Q4 wins a trip for two to the bahamas!'
            }
            placeholderTextColor={'#222B2E'}
            multiline
            style={[styles.inputStyle, {minHeight: 63}]}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 40, marginBottom: 100}}>
          <Button
            title={'Post Highlight'}
            textStyle={{fontSize: 14, color: Colors.white}}
            style={styles.newBonusBtn}
            onPress={() => {
              navigation.navigate('Contests');
            }}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingScrollView>
  );
};

export default AddHighlight;
