import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useState} from 'react';
// import {Searchbar} from 'react-native-paper';
import {Dropdown} from 'react-native-material-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import styles from './style';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon, Input} from 'native-base';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Customers = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [selectedValue, setSelectedValue] = useState('');
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                borderRadius: 10,
                width: screenWidth / 2.3,
                backgroundColor: Colors.white,
              }}
              inputStyle={{fontSize: 18, fontFamily: 'Roboto'}}
              iconColor="#222B2E"
              placeholderTextColor={'rgba(128,128,128,0.4)'}
            /> */}
            <Input
              placeholder="Search"
              width={screenWidth / 2.3}
              borderRadius="11"
              py="3"
              px="1"
              fontSize="18"
              style={{
                backgroundColor: Colors.white,
              }}
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
            <SelectDropdown
              data={data}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'All Account'}
              renderDropdownIcon={() => {
                return (
                  <Ionicons
                    name="chevron-down-outline"
                    size={20}
                    color={Colors.black}
                  />
                );
              }}
              dropdownStyle={{
                borderRadius: 10,
                height: 150,
              }}
              buttonTextStyle={{fontSize: 18}}
              rowStyle={{}}
              buttonStyle={{
                borderRadius: 10,
                width: screenWidth / 2.3,
                height: 55,
                backgroundColor: Colors.white,
                paddingHorizontal: 15,
              }}
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
