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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';
import Button from '../../../component/Button';
import Header from '../../../component/Header';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ContestTeam = ({navigation}) => {
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
          <View style={styles.mainListView} key={index}>
            <CircleCheckBox
              styleCheckboxContainer={{
                marginRight: 15,
              }}
              checked={item.isChecked}
              onToggle={() => {
                onChangeCheckbox(index);
              }}
              outerColor={Colors.grey1}
              innerColor={Colors.lightBlue3}
              filterColor={Colors.grey}
              outerSize={25}
              innerSize={18}
            />
            <Image
              source={images.user}
              style={styles.chatUserImage}
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
           style={styles.bg}
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
              <Text style={styles.headerTitle}>Add New Contest</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.headerSubTitle}>Select People</Text>
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 40, paddingTop: 30, marginTop: 40}}>
          <CircleCheckBox
            styleLabel={{
              marginLeft: 20,
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
          {renderUserList}

          <View style={{alignItems: 'center', marginTop: 10}}>
            <Button
              type={'icon-label'}
              icon={
                <MaterialCommunityIcons
                  size={16}
                  color={Colors.white}
                  name={'plus'}
                />
              }
              title={'New Contest'}
              textStyle={{fontSize: 14, color: Colors.white}}
              style={styles.newBonusBtn}
              onPress={() => navigation.navigate('AddContest')}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default ContestTeam;
