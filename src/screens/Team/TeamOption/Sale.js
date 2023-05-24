import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Sale = ({navigation}) => {
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
      salesDateAmt: '$67,000',
      salesLifeTimeAmt: '$67,000',
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
      salesDateAmt: '$132,000',
      salesLifeTimeAmt: '$132,000',
      accountOwner: 'John Doe',
    },
    {
      company: 'Willbur Chemical',
      actions: 1,
      salesDateAmt: '$200,000',
      salesLifeTimeAmt: '$200,000',
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
        <View style={styles.tabelContainer}>
          <ScrollView
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.tabelHead}>
                <Text style={styles.headFirstCol}>Company</Text>
                <Text style={[styles.headSecCol, {width: 50}]}>Actions</Text>
                <Text style={[styles.headSecCol, {width: 131}]}>
                  Sales Year-to-Date
                </Text>
                <Text style={[styles.headSecCol, {width: 103}]}>
                  Sales Lifetime
                </Text>
                <Text style={[styles.headSecCol, {width: 103}]}>
                  Account Owner
                </Text>
              </View>

              <FlatList
                data={tabelData}
                renderItem={({item, index}) => (
                  <View
                    style={[
                      styles.bodyMain,
                      {
                        borderBottomWidth:
                          index == tabelData.length - 1 ? 0 : 2,
                      },
                    ]}>
                    <Text
                      style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                      {item.company}
                    </Text>
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
                    <Text
                      style={[
                        styles.headSecCol,
                        {width: 131, color: Colors.green},
                      ]}>
                      {item.salesDateAmt}
                    </Text>
                    <Text
                      style={[
                        styles.headSecCol,
                        {width: 103, color: Colors.green},
                      ]}>
                      {item.salesLifeTimeAmt}
                    </Text>
                    <Text
                      style={[styles.headSecCol, {width: 103, marginRight: 0}]}>
                      {item.accountOwner}
                    </Text>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Sale;
