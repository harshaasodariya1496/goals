import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import {Progress, TextArea} from 'native-base';
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
import Dropdown from '../../../component/DropDown';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const AddHighlight = ({navigation}) => {
  const [selectMember, setSelectMember] = useState('');
  const [selectAnother, setSelectAnother] = useState('');
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [description, setDescription] = useState('');
  return (
    <KeyboardAvoidingScrollView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <Header onBackPress={() => navigation.goBack()} />
        <View style={styles.titleSection}>
          <Text style={styles.menuTitle}>Acknowledge Great Work</Text>
        </View>
        <View style={styles.formMain}>
          <Dropdown
            data={data}
            onSelect={(selectedItem, index) => {
              setSelectMember(selectedItem);
            }}
            placeHolder={'Select Team Member'}
            value={selectMember}
            buttonTextStyle={{
              color: selectMember ? Colors.black : Colors.lightBlue4,
            }}
          />
          <Dropdown
            data={data}
            onSelect={(selectedItem, index) => {
              setSelectAnother(selectedItem);
            }}
            placeHolder={'Is being recognized for...'}
            buttonTextStyle={{
              color: selectAnother ? Colors.black : Colors.lightBlue4,
            }}
            value={selectAnother}
          />
          {/* <TextInput
            placeholder={'Custom Note'}
            multiline
            style={[styles.inputStyle, {height: 146, marginBottom: 10}]}
          /> */}
          <TextArea
            h={146}
            placeholder="Custom Note"
            mb={15}
            fontSize={14}
            value={description}
            onChangeText={setDescription}
            placeholderTextColor={Colors.lightBlue4}
            style={{backgroundColor: Colors.white, color: Colors.lightBlue4}}
          />
          <Pressable
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 50,
              backgroundColor: Colors.lightGray,
              width: 190,
              height: 52,
              marginBottom: 67,
            }}>
            <Text style={{fontSize: 16, color: Colors.white}}>
              Include Image
            </Text>
          </Pressable>
        </View>

        <View style={{alignItems: 'center', marginBottom: 100}}>
          <Button
            title={'Post Highlight'}
            textStyle={{fontSize: 14, color: Colors.white}}
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
