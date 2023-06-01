import {
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Button from '../../../component/Button';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TeamOption = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
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
            {name: 'New Lead'},
            {name: 'New Opportunity'},
            {name: 'New Sale'},
          ]}
          style={{marginTop: 70}}
          renderItem={({item, index}) => (
            <Button
              key={index}
              type={'icon-label'}
              title={item.name}
              icon={
                <MaterialCommunityIcons
                  size={30}
                  color={Colors.black}
                  name={'plus'}
                />
              }
              onPress={() =>
                navigation.navigate('Add'+item.name.replaceAll('New ', ''))
              }
              style={{marginVertical: 10}}
            />
          )}
        />
      </ImageBackground>
    </ScrollView>
  );
};

export default TeamOption;
