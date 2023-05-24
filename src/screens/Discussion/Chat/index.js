import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Input, Modal, Icon} from 'native-base';
import {useCallback, useEffect, useState} from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import Header from '../../../component/Header';
import Button from '../../../component/Button';
import ChatInput from '../../../component/ChatInput';
import RenderMessage from '../../../component/RenderMessage';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Chat = ({navigation, route}) => {
  const user = route.params.user;
  const [note, setNote] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

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
  const onSubmitEditing = ({nativeEvent: {text, eventCount, target}}) => {};
  const customInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#D6D8DC',
          paddingHorizontal: 10,
          height: 70,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        renderComposer={composer => (
          <View style={styles.footerMidView}>
            <TextInput
              {...composer}
              placeholder={'Write note here'}
              returnKeyLabel={'Go'}
              returnKeyType={'go'}
              style={styles.footerInput}
              value={note}
              onChangeText={setNote}
              onSubmitEditing={onSubmitEditing}
            />
            <TouchableOpacity style={styles.footerEmoji}>
              <Image
                source={images.smile}
                tintColor={Colors.darkGrey2}
                style={styles.footerImages}
              />
            </TouchableOpacity>
          </View>
        )}
        renderSend={null}
        renderActions={() => (
          <TouchableOpacity style={{height: 42, justifyContent: 'center'}}>
            <MaterialCommunityIcons
              size={24}
              color={Colors.darkGrey2}
              name={'paperclip'}
            />
          </TouchableOpacity>
        )}
        renderAccessory={() => (
          <TouchableOpacity style={{height: 42, justifyContent: 'center'}}>
            <Feather name={'mic'} size={24} color={Colors.darkGrey2} />
          </TouchableOpacity>
        )}
      />
    );
  };
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
              <Feather
                name="search"
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
          firstTitle={'Search'}
          secondTitle={'Delete'}
          firstOnPress={() => {
            setIsSearch(true);
          }}
          secondOnPress={() => {
            setModalVisible(true);
          }}
        />
      </ImageBackground>
      <KeyboardAvoidingScrollView nestedScrollEnabled={true}>
        <View style={{height: (screenHeight / 10) * 8.2}}>
          {isSearch ? (
            <View style={styles.searchContainer}>
              <TouchableOpacity
                onPress={() => {
                  setIsSearch(false);
                }}
                style={styles.searchHead}>
                <Ionicons
                  size={30}
                  color={Colors.black}
                  name={'ios-close'}
                  style={{marginTop: 3}}
                />
                <Text style={styles.searchHeadText}>Search Message</Text>
              </TouchableOpacity>
              <Input
                placeholder="Search"
                width={screenWidth - 50} 
                borderWidth={0}
                style={styles.searchBar}
                onChangeText={onChangeSearch}
                value={searchQuery}
                InputLeftElement={
                  <View style={styles.searchIconMain}>
                    <Icon
                      m="2"
                      ml="3"
                      size="23"
                      color={Colors.black}
                      as={<MaterialIcons name="search" />}
                    />
                  </View>
                }
              />
            </View>
          ) : (
            <GiftedChat
              messages={messages}
              onSend={messages => onSend(messages)}
              user={{
                _id: 1,
              }}
              renderInputToolbar={customInputToolbar}
              scrollToBottom={true}
              renderAvatar={null}
              renderMessage={({currentMessage}) => {
                if (currentMessage.user._id == 1)
                  return (
                    <RenderMessage side={'right'} message={currentMessage} />
                  );
                else
                  return (
                    <RenderMessage side={'left'} message={currentMessage} />
                  );
              }}
              renderTime={null}
              messagesContainerStyle={{paddingBottom: 20}}
            />
          )}
        </View>
      </KeyboardAvoidingScrollView>
      <Modal
        isOpen={modalVisible}
        // onClose={() => setModalVisible(false)}
        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
        <View style={styles.modalContainer}>
          <Image source={images.warning} style={styles.warningImage} />
          <Text style={styles.modalText}>
            Are you sure that you want to delete this chat?
          </Text>
          <View style={styles.modalBtnContainer}>
            <Button
              title={'OK'}
              style={styles.okBtn}
              onPress={() => setModalVisible(false)}
            />
            <Button
              title={'Cancel'}
              style={styles.cancelBtn}
              textStyle={{
                color: Colors.darkGrey,
              }}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => setModalVisible(false)}>
          <MaterialCommunityIcons
            size={24}
            color={Colors.white}
            name={'close'}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Chat;
