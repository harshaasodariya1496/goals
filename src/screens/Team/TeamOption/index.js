import {
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  FlatList,
  Pressable,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Button from '../../../component/Button';

import styles from './style';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TeamOption = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.mainBg} source={images.background}>
        <View style={{marginTop: 20, alignItems: 'flex-end'}}>
          <Button
            type={'icon'}
            icon={<AntDesign size={30} color={Colors.white} name={'close'} />}
            onPress={() => navigation.goBack()}
          />
        </View>
        <FlatList
          data={[
            {name: 'Leads', screen: 'Lead'},
            {name: 'Opportunities', screen: 'Opportunity'},
            {name: 'Customers', screen: 'Sale'},
          ]}
          style={{marginTop: 70}}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => navigation.navigate('Add' + item.screen)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: scale(10),
              }}>
              <View
                style={{
                  width: '81%',
                  height: scale(50),
                  justifyContent: 'center',
                  padding: scale(10),
                  paddingHorizontal: scale(15),
                  backgroundColor: Colors.white,
                  borderRadius: scale(10),
                }}>
                <Text style={{color: Colors.black, fontSize: scale(18)}}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  height: scale(50),
                  justifyContent: 'center',
                  backgroundColor: Colors.white,
                  borderRadius: scale(10),
                  paddingHorizontal: scale(8),
                }}>
                <AntDesign
                  size={scale(30)}
                  color={Colors.black}
                  name={'plus'}
                />
              </View>
            </Pressable>
          )}
        />
      </ImageBackground>
    </ScrollView>
  );
};

export default TeamOption;
