import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Icon, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import Dropdown from '../../component/DropDown';

import styles from './style';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Customers = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [selectedValue, setSelectedValue] = useState('');
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

  const listData = [
    {name: 'Financial Services Inc'},
    {name: 'American Express'},
    {name: 'Amazon'},
    {name: 'AmerisourceBergen'},
    {name: 'Apple'},
    {name: 'Berkshire Hathaway'},
    {name: 'BP'},
    {name: 'CVS Health'},
    {name: 'Exxon Mobil'},
    {name: 'McKesson'},
    {name: 'State Grid'},
    {name: 'Toyota'},
    {name: 'Volkswagen'},
    {name: 'Walmart'},
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ViewCustomers', {title: item.name});
        }}
        style={[
          styles.itemStyle,
          {backgroundColor: index % 2 == 0 ? Colors.white : Colors.grey},
        ]}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingScrollView
      style={styles.container}
      nestedScrollEnabled={true}>
      <View style={styles.container}>
        <ImageBackground
          style={{
            height: 190,
            paddingTop: 40,
            paddingHorizontal: 16,
          }}
          source={images.background}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 40,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={images.customers}
                style={styles.menuImage}
                resizeMode="contain"
              />
              <Text style={styles.menuTitle}>Customers</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddCustomers')}>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 55,
            }}>
            <Input
              placeholder="Search"
              width={screenWidth / 2.1}
              borderRadius="11"
              backgroundColor={Colors.white}
              py="3"
              fontSize="18"
              onChangeText={onChangeSearch}
              value={searchQuery}
              InputLeftElement={
                <View style={styles.searchIconMain}>
                  <Icon
                    m="2"
                    ml="3"
                    size="6"
                    color={Colors.black}
                    as={<MaterialIcons name="search" />}
                  />
                </View>
              }
            />
            <Dropdown
              data={data}
              onSelect={(selectedItem, index) => {
                setSelectedValue(selectedItem);
              }}
              value={selectedValue}
              placeHolder={'All Account'}
              style={{width: screenWidth / 2.8, height: 55, borderRadius: 10}}
              buttonTextStyle={{fontSize: scale(14)}}
            />
          </View>
        </ImageBackground>
        <View>
          <FlatList data={listData} renderItem={renderItem} />
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Customers;
