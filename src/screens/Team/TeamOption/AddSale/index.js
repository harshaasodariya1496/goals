import {
  View,
  Text, 
  ScrollView,
  Dimensions,
  ImageBackground, 
  TouchableOpacity, 
} from 'react-native'; 
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';
import Button from '../../../../component/Button';
import Dropdown from '../../../../component/DropDown';
import TextInput from '../../../../component/TextInput';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const AddSale = ({navigation}) => {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [fName, setFName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [job, setJob] = useState('');
  const [isError, setIsError] = useState(false);
  const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
  ];
  const onDone = () => {
    setIsError(true);
    if (
      fName !== '' ||
      company !== '' ||
      email !== '' ||
      amount !== '' ||
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
            New Sale
          </Text>
          <Dropdown
            data={data}
            onSelect={(selectedItem, index) => {
              setSelectedCustomer(selectedItem);
            }}
            placeHolder={'Select or Create Customer'}
            value={selectedCustomer}
          />

          <Dropdown
            data={data}
            onSelect={(selectedItem, index) => {
              setSelectedProduct(selectedItem);
            }}
            placeHolder={'Product / Service'}
            value={selectedProduct}
          />
          <TextInput
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
            keyboardType="number-pad"
            isError={isError && amount === ''}
          />
          <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.addMoreView}>
              <AntDesign name="plus" size={15} color={Colors.white} />
              <Text style={styles.addMoreText}>Add More</Text>
            </TouchableOpacity>
          </View>
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

export default AddSale;