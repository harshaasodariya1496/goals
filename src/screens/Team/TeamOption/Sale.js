import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import {Icon, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Dropdown from '../../../component/DropDown';

import styles from './style';
import Table from '../../../component/Table';
import { numberWithCommas } from '../../../utils/constant';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Sale = ({navigation}) => {
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
  const tableData = [
    {
      company: 'American Airlines',
      actions: 0,
      salesDateAmt: 67000,
      salesLifeTimeAmt: 67000,
      accountOwner: 'Larry Gourm',
    },
    {
      company: 'Marriott',
      actions: 3,
      salesDateAmt: '$17,000',
      salesLifeTimeAmt: '$17,000',
      accountOwner: 'Tim Watts',
    },
    {
      company: 'Boeing',
      actions: 1,
      salesDateAmt: 132000,
      salesLifeTimeAmt: 132000,
      accountOwner: 'John Doe',
    },
    {
      company: 'Willbur Chemical',
      actions: 1,
      salesDateAmt: 200000,
      salesLifeTimeAmt: 200000,
      accountOwner: 'Adam West',
    },
  ];
  return (
    <KeyboardAvoidingScrollView
      style={styles.container}
      nestedScrollEnabled={true}>
      <View style={styles.container}>
        <ImageBackground style={styles.bg} source={images.background}>
          <View style={styles.headMain}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={images.customers}
                style={styles.menuImage}
                resizeMode="contain"
              />
              <Text style={styles.menuTitle}>Customers</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddSale')}>
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
              height: 55,
            }}>
            <Input
              placeholder="Search"
              width={screenWidth / 2.1}
              borderRadius="11"
              py="3"
              px="1"
              mr={'5'}
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

            <Dropdown
              data={data}
              onSelect={(selectedItem, index) => {
                setSelectedValue(selectedItem);
              }}
              value={selectedValue}
              placeHolder={'All Account'}
              style={{width: screenWidth / 2.8, height: 55, borderRadius: 10}}
              buttonTextStyle={{fontSize: 18}}
            />
          </View>
        </ImageBackground>
        <Table
          tableStyle={styles.tableContainer}
          data={tableData}
          tableHead={
            <View style={styles.tableHead}>
              <Text style={[styles.headFirstCol, {fontWeight: 600}]}>
                Company
              </Text>
              <Text style={[styles.headSecCol, {fontWeight: 600, width: 50}]}>
                Actions
              </Text>
              <Text style={[styles.headSecCol, {fontWeight: 600, width: 131}]}>
                Sales Year-to-Date
              </Text>
              <Text style={[styles.headSecCol, {fontWeight: 600, width: 103}]}>
                Sales Lifetime
              </Text>
              <Text style={[styles.headSecCol, {fontWeight: 600, width: 103}]}>
                Account Owner
              </Text>
            </View>
          }
          tableBody={({item, index}) => (
            <View
              style={[
                styles.bodyMain,
                {
                  borderBottomWidth: index == tableData.length - 1 ? 0 : 2,
                },
              ]}>
              <Pressable
                onPress={() =>
                  navigation.navigate('SalesDetail', {details: item})
                }>
                <Text style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                  {item.company}
                </Text>
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                  width: 50,
                  marginRight: 45,
                }}>
                <Text
                  style={[
                    {
                      color: Colors.lightBlue,
                      fontSize: 14,
                      textAlign: 'center',
                      marginRight: 5,
                    },
                  ]}>
                  {item.actions}
                </Text>
                {Boolean(item.actions > 1) && (
                  <Ionicons
                    name="chevron-down-outline"
                    size={20}
                    color={Colors.lightBlue4}
                  />
                )}
              </View>
              <Text
                style={[styles.headSecCol, {width: 131, color: Colors.green}]}>
                ${numberWithCommas(item.salesDateAmt)}
              </Text>
              <Text
                style={[styles.headSecCol, {width: 103, color: Colors.green}]}>
                ${numberWithCommas(item.salesLifeTimeAmt)}
              </Text>
              <Text style={[styles.headSecCol, {width: 103, marginRight: 0}]}>
                {item.accountOwner}
              </Text>
            </View>
          )}
        />
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Sale;
