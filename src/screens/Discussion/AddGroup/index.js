import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'native-base';
import {useMemo, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CircleCheckBox from 'react-native-circle-checkbox';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';
import Button from '../../../component/Button';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const AddGroup = ({navigation}) => {
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [groupValues, setGroupValues] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [userList, setUserList] = useState([
    {
      name: 'Jacob Jones',
      description: 'UI/UX Design Manager',
      isChecked: false,
    },
    {
      name: 'Esther Howard',
      description: 'Senior UX Designer',
      isChecked: false,
    },
    {
      name: 'Albert Flores',
      description: 'Senior UI Designer',
      isChecked: false,
    },
    {
      name: 'Leslie Alexander',
      description: 'UI Designer',
      isChecked: false,
    },
  ]);

  const onChangeCheckbox = index => {
    let arr = userList;
    arr[index].isChecked = !arr[index].isChecked;

    let isSelect = arr.every(e => e.isChecked);
    console.log(isSelect);
    if (isSelect) {
      setIsSelectedAll(true);
    } else {
      setIsSelectedAll(false);
    }
    setUserList([...arr]);
  };
  const renderUserList = useMemo(() => {
    return (
      <FlatList
        data={userList}
        style={{
          paddingTop: 15,
          height: (screenHeight / 100) * 40,
        }}
        renderItem={({item, index}) => (
          <View
            style={{
              // paddingHorizontal: 20,
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
            }}
            key={index}>
            <CircleCheckBox
              styleCheckboxContainer={{
                marginRight: 15,
              }}
              checked={item.isChecked}
              onToggle={() => {
                onChangeCheckbox(index);
              }}
              // icon={
              //   <MaterialIcons
              //     name={'circle'}
              //     color={Colors.lightBlue3}
              //   />
              // }
              outerColor={Colors.grey1}
              innerColor={Colors.lightBlue3}
              filterColor={Colors.grey}
              outerSize={25}
              innerSize={18}
              // style={{
              //   borderRadius: 15,
              //   height: 25,
              //   width: 25,
              //   borderWidth: 1.5,
              //   borderColor: Colors.grey1,
              //   padding: 5,
              // }}
            />
            <Image
              source={images.user}
              style={styles.chatUser}
              resizeMode="contain"
            />
            <View style={styles.msgContainer}>
              <View style={styles.msgMainView}>
                <Text style={styles.msgUserName}>{item.name}</Text>
              </View>
              <View style={styles.msgView}>
                <Text style={styles.msgText}>{item.description}</Text>
              </View>
            </View>
          </View>
        )}
      />
    );
  }, [userList]);
  const onSelectAll = value => {
    let arr = userList;

    setUserList([
      ...arr.map(item => {
        return {...item, isChecked: value ? true : false};
      }),
    ]);
    setIsSelectedAll(value);
  };

  return (
    <KeyboardAvoidingScrollView
      style={styles.container}
      nestedScrollEnabled={true}>
      <View style={styles.container}>
        <ImageBackground
          style={{
            height: (screenHeight / 100) * 22,
            paddingTop: 40,
            paddingHorizontal: 20,
          }}
          source={images.background}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backBg}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="left" size={20} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.header}>
              <Image
                source={images.discussion}
                style={styles.menuImage}
                resizeMode="contain"
              />
              <Text style={styles.headerTitle}>New Group</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Input
              placeholder="Give this group a name"
              width={screenWidth - 40}
              borderRadius="11"
              px="4"
              fontSize="18"
              placeholderTextColor={Colors.lightBlue3}
              style={{
                backgroundColor: Colors.white,
                height: 50,
              }}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 24, paddingTop: 30}}>
          <Text
            style={{
              color: Colors.black,
              borderBottomWidth: 0.7,
              paddingBottom: 5,
              borderColor: Colors.darkGrey,
              fontSize: 20,
            }}>
            Select People
          </Text>
          <View style={{marginTop: 40}}>
            <CircleCheckBox
              styleLabel={{
                // borderRadius: 15,
                // height: 25,
                // width: 25,
                // borderWidth: 1.5,
                // borderColor: Colors.grey1,
                // padding: 5,
                // marginRight: 5,
                color: Colors.black,
                fontSize: 14,
              }}
              outerColor={Colors.grey1}
              innerColor={Colors.lightBlue3}
              filterColor={Colors.grey}
              checked={isSelectedAll}
              onToggle={onSelectAll}
              label={'Select All'}
            />

            {/* <Text style={{}}>Select All</Text> */}

            {/* </CircleCheckBox> */}
            {renderUserList}

            <View style={{alignItems: 'center', marginTop: 10}}>
              <Button
                title={'Start The Chat'}
                style={{
                  height: 46,
                  width: screenWidth / 2.8,
                  paddingHorizontal: 0,
                }}
                textStyle={{
                  fontSize: 14,
                  color: Colors.white,
                  marginHorizontal: 0,
                  letterSpacing: 0.5,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default AddGroup;
