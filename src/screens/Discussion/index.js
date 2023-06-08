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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import Button from '../../component/Button';

import styles from './style';
import { useDrawerStatus } from '@react-navigation/drawer';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Discussion = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const userMsgList = [
    {
      name: 'Jacob Jones',
      message: 'Me: Can you remind me tommorow mor...',
      count: 0,
      date: '11:20',
    },
    {
      name: 'Esther Howard',
      message: 'Thank you Adam!',
      count: 5,
      date: '09:21',
    },
    {
      name: 'Albert Flores',
      message: 'What conference?',
      count: 10,
      date: 'Yesterday',
    },
    {
      name: 'Leslie Alexander',
      message: 'Me: Thanks!',
      count: 0,
      date: 'Yesterday',
    },
    {
      name: 'Dianne Russell',
      message: 'Can you tell me about the detail?',
      count: 0,
      date: 'Oct 12',
    },
    {
      name: 'Cody Fisher',
      message: 'Tommorow at 9am',
      date: 'Oct 12',
      count: 0,
    },
  ];
  const isDrawerOpen = useDrawerStatus() === 'open';
  console.log("isDrawerOpen",isDrawerOpen);
  return (
    <KeyboardAvoidingScrollView
      style={styles.container}
      nestedScrollEnabled={true}>
      <View style={styles.container}>
        <ImageBackground
          style={{
            height: (screenHeight / 100) * 23,
            paddingTop: 40,
            paddingHorizontal: 16,
          }}
          source={images.background}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <Image
                  source={images.user}
                  style={styles.menuImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerTitle}>Adam Morgan</Text>
                <Text style={styles.headerSubTitle}>
                  Communicate with your team
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Input
              placeholder="Search"
              width={screenWidth / 1.8}
              borderRadius="11"
              py="3"
              px="1"
              fontSize="18"
              style={{
                backgroundColor: Colors.white,
                height: 50,
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

            <Button
              leftIcon={<Icon as={Entypo} name="plus" size={30} />}
              title={'Group'}
              style={styles.groupBtn}
              textStyle={{marginHorizontal: 0}}
              onPress={() => {
                navigation.navigate('AddGroup');
              }}
            />
          </View>
        </ImageBackground>

        <FlatList
          data={userMsgList}
          style={{
            paddingTop: 15,
            height: (screenHeight / 100) * 66,
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                marginVertical: 10,
              }}
              onPress={() => {
                navigation.navigate('Chat', {user: item});
              }}
              key={index}>
                
              <Image
                source={images.user}
                style={styles.chatUserImage}
                resizeMode="contain"
              />
              <View style={styles.msgContainer}>
                <View style={styles.msgMainView}>
                  <Text style={styles.msgUserName}>{item.name}</Text>
                  <Text style={styles.msgTime}>{item.date}</Text>
                </View>
                <View style={styles.msgView}>
                  <Text style={styles.msgText}>{item.message}</Text>
                  {Boolean(item.count) && (
                    <View style={styles.msgNotificationView}>
                      <Text style={styles.msgNotificationCount}>
                        {item.count}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Discussion;
