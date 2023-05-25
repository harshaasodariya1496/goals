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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Lead = ({navigation}) => {
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
  const tabelData = [
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
              <Text style={styles.menuTitle}>Leads</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddLead')}>
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
          tableStyle={styles.tabelContainer}
          data={tabelData}
          tableHead={
            <View style={styles.tabelHead}>
              <Text style={styles.headFirstCol}>Company</Text>
              <Text style={[styles.headSecCol, {width: 50}]}>Actions</Text>
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
                  borderBottomWidth: index == tabelData.length - 1 ? 0 : 2,
                },
              ]}
              key={index}>
              <Pressable
                onPress={() => {
                  navigation.navigate('LeadDetail', {details: item});
                }}>
                <Text style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                  {item.company}
                </Text>
              </Pressable>
              <Text
                style={[
                  styles.headSecCol,
                  {
                    color: Colors.lightBlue,
                    width: 50,
                    textAlign: 'center',
                  },
                ]}>
                {item.actions}
              </Text>
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

export default Lead;
