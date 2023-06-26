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
import {scale} from 'react-native-size-matters';
import {Icon, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Dropdown from '../../../component/DropDown';

import styles from './style';
import Table from '../../../component/Table';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Opportunity = ({navigation}) => {
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
      name: 'John Doe',
      role: 'Sales manager',
      email: 'john@americanexpress.com',
      phone: '505-123-6554',
      source: 'Online',
      date: '04/24/2023',
      leadOwner: '',
    },
    {
      company: 'Marriott',
      actions: 3,
      name: 'Adam West',
      role: 'Sales manager',
      email: 'john@marriott.com',
      phone: '505-123-6554',
      source: 'Online',
      date: '04/23/2023',
      leadOwner: 'Adam West',
    },
    {
      company: 'Boeing',
      actions: 1,
      name: 'Larry Gourm',
      role: 'Sales manager',
      email: 'jim@boeing.com',
      phone: '505-123-6554',
      source: 'Cold email',
      date: '04/24/2023',
      leadOwner: 'Larry Gourm',
    },
    {
      company: 'Willbur Chemical',
      actions: 1,
      name: 'Tim Watts',
      role: 'Sales manager',
      email: 'Jill@willbur.com',
      phone: '505-123-6554',
      source: 'Cold Call',
      date: '04/22/2023',
      leadOwner: 'Tim Watts',
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
              <Text style={styles.menuTitle}>Opportunities</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddOpportunity')}>
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
              backgroundColor={Colors.white}
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
        <Table
          tableStyle={styles.tableContainer}
          data={tableData}
          tableHead={
            <View style={styles.tableHead}>
              <Text style={styles.headFirstCol}>Company</Text>
              <Text style={[styles.headSecCol, {width: 55 }]}>
                Actions
              </Text>
              <Text style={[styles.headSecCol, {width: 99}]}>Name</Text>
              <Text style={[styles.headSecCol, {width: 103}]}>Role</Text>
              <Text style={[styles.headSecCol, {width: 194}]}>Email</Text>
              <Text style={[styles.headSecCol, {width: 103}]}>Phone</Text>
              <Text style={[styles.headSecCol, {width: 77}]}>Source</Text>
              <Text style={[styles.headSecCol, {width: 86}]}>Date</Text>
              <Text style={[styles.headSecCol, {width: 90}]}>LeadOwner</Text>
            </View>
          }
          tableBody={({item, index}) => (
            <View
              style={[
                styles.bodyMain,
                {
                  borderBottomWidth: index == tableData.length - 1 ? 0 : 2,
                },
              ]}
              key={index}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Opportunities', {details: item});
                }}>
                <Text style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                  {item.company}
                </Text>
              </Pressable>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center', 
                  width: 55,
                  marginRight: 45,
                  justifyContent: 'center',
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
                    style={{position: 'absolute', right: 0}}
                  />
                )}
              </View>
              <Text style={[styles.headSecCol, {width: 99}]}>{item.name}</Text>
              <Text style={[styles.headSecCol, {width: 103}]}>{item.role}</Text>
              <Text style={[styles.headSecCol, {width: 194}]}>
                {item.email}
              </Text>
              <Text style={[styles.headSecCol, {width: 103}]}>
                {item.phone}
              </Text>
              <Text style={[styles.headSecCol, {width: 77}]}>
                {item.source}
              </Text>
              <Text style={[styles.headSecCol, {width: 86}]}>{item.date}</Text>
              <Text style={[styles.headSecCol, {width: 90}]}>
                {item.leadOwner}
              </Text>
            </View>
          )}
        />
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Opportunity;
