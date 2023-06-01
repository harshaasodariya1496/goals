import {
  View,
  ImageBackground,
  FlatList,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';
import Button from '../../../../component/Button';
import {useEffect, useState} from 'react';

import styles from './style';
import BgModal from '../../../../component/BgModal';
import TextInput from '../../../../component/TextInput';
import MeetingModal from '../../../../component/MeetingModal';
import CallModal from '../../../../component/CallModal';
import TaskModal from '../../../../component/TaskModal';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TeamActions = ({navigation}) => {
  const [isMeetingModal, setIsMeetingModal] = useState(false);
  const [isCallModal, setIsCallModal] = useState(false);
  const [isTaskModal, setIsTaskModal] = useState(false);
  useEffect(() => {
    setIsMeetingModal(false);
  }, []);
  return (
    <ImageBackground style={styles.mainBg} source={images.background}>
      <View style={{marginTop: 20, alignItems: 'flex-end'}}>
        <Button
          type={'icon'}
          icon={
            <MaterialCommunityIcons
              size={30}
              color={Colors.white}
              name={'close'}
            />
          }
          onPress={() => navigation.goBack()}
        />
      </View>
      <FlatList
        data={[
          {
            name: 'Schedule Meeting',
            icon: (
              <Image
                source={images.userMeet}
                style={{
                  tintColor: Colors.black,
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
            ),
            onPress: () => {
              setIsMeetingModal(true);
            },
          },
          {
            name: 'Schedule Call',
            icon: <Feather size={30} color={Colors.black} name={'phone'} />,

            onPress: () => {
              setIsCallModal(true);
            },
          },
          {
            name: 'Schedule Task',
            icon: (
              <MaterialCommunityIcons
                size={30}
                color={Colors.black}
                name={'checkbox-marked-outline'}
              />
            ),
            onPress: () => {
              setIsTaskModal(true);
            },
          },
        ]}
        style={{marginTop: 70}}
        renderItem={({item, index}) => (
          <Button
            key={index}
            type={'icon-label'}
            title={item.name}
            icon={item.icon}
            onPress={item.onPress}
            textStyle={{marginLeft: 15}}
            style={{marginVertical: 10, paddingHorizontal: 20}}
          /> 
        )}
      />
      <MeetingModal isOpen={isMeetingModal} onClose={setIsMeetingModal} />
      <CallModal isOpen={isCallModal} onClose={setIsCallModal} />
      <TaskModal isOpen={isTaskModal} onClose={setIsTaskModal} />
    </ImageBackground>
  );
};

export default TeamActions;
