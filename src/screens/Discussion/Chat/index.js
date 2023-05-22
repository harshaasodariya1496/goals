import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {Icon, Input} from 'native-base';
import {Dropdown} from 'react-native-material-dropdown';
import moment from 'moment';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CircleCheckBox from 'react-native-circle-checkbox';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';
import Button from '../../../component/Button';
import Header from '../../../component/Header';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Chat = ({navigation, route}) => {
  const user = route.params.user;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 221,
        text: 'What conference?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
        _id: 12,
        text: 'Don’t miss it!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
        _id: 1221,
        text: 'Btw do you join the conference for tommorow morning?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 22,
        text: 'Great!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hi, Jacob I’m fine. How about you?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hello, Adam how are you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          height: (screenHeight / 100) * 15,
        }}
        source={images.background}>
        <Header
          // title={user.name}
          customTitle={
            <View style={styles.header}>
              <Image
                source={images.user}
                style={styles.menuImage}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.headerTitle}>{user.name}</Text>
                <Text style={styles.headerSubTitle}>Active 2 minutes ago</Text>
              </View>
            </View>
          }
          onBackPress={() => {
            navigation.goBack();
          }}
          onTitlePress={() => {
            // navigation.navigate('CustomerDetail', {title: title});
          }}
          textStyle={{fontSize: 14, fontWeight: 700}}
          isPopOver
          firstIcon={() => {
            return (
              <Octicons
                name="pencil"
                size={21}
                color={Colors.darkGrey}
                style={{marginRight: 10}}
              />
            );
          }}
          secondIcon={() => {
            return (
              <Image
                source={images.trash}
                style={styles.trashImage}
                resizeMode="contain"
              />
            );
          }}
          firstTitle={'Edit'}
          secondTitle={'Delete'}
          firstOnPress={() => {}}
          secondOnPress={() => {}}
        />
      </ImageBackground>
      <KeyboardAvoidingScrollView nestedScrollEnabled={true}>
        <View style={{height: (screenHeight / 10) * 8.2}}>
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            style={{}}
            scrollToBottom={true}
            renderAvatar={null}
            renderMessage={({currentMessage}) => {
              console.log('renderMessage', currentMessage);
              if (currentMessage.user._id == 1)
                return (
                  <View style={styles.rightMain}>
                    <Text style={styles.timeContent}>
                      {moment(currentMessage.createdAt).format('HH:MM A')}
                    </Text>
                    <View style={styles.rightMsgContent}>
                      <Text style={styles.rightMsgText}>
                        {currentMessage.text}
                      </Text>
                    </View>
                  </View>
                );
              else
                return (
                  <View style={styles.leftMain}>
                    <View style={styles.leftMsgContent}>
                      <Text style={styles.leftMsgText}>
                        {currentMessage.text}
                      </Text>
                    </View>
                    <Text style={styles.timeContent}>
                      {moment(currentMessage.createdAt).format('HH:MM A')}
                    </Text>
                  </View>
                );
            }}
            renderTime={null}
          />
        </View>
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Chat;
