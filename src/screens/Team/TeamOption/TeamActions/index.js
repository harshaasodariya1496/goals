import {View, ImageBackground, FlatList, Image, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';
import Button from '../../../../component/Button';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TeamActions = ({navigation}) => {
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
          },
          {
            name: 'Schedule Call',
            icon: <Feather size={30} color={Colors.black} name={'phone'} />,
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
          },
        ]}
        style={{marginTop: 70}}
        renderItem={({item, index}) => (
          <Button
            key={index}
            type={'icon-label'}
            title={item.name}
            icon={item.icon}
            onPress={() => {
              // navigation.navigate(item.name.replaceAll('New ', ''))
            }}
            textStyle={{marginLeft: 15}}
            style={{marginVertical: 10, paddingHorizontal: 20}}
          />
        )}
      />
    </ImageBackground>
  );
};

export default TeamActions;
