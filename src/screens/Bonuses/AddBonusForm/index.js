import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Progress} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleCheckBox from 'react-native-circle-checkbox';
import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';
import {numberWithCommas} from '../../../utils/constant';
import {useState} from 'react';
import Button from '../../../component/Button';
import Header from '../../../component/Header';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const AddBonusForm = ({navigation}) => {
  const [isTeam, setIsTeam] = useState(false);
  const [isIndividual, setIsIndividual] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={images.background} style={styles.emptyBg}>
        <Header onBackPress={() => navigation.goBack()} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.bonuses}
            style={styles.menuImage}
            resizeMode="contain"
          />
          <Text style={styles.menuTitle}>Add New Bonus</Text>
        </View>
        <View style={{marginHorizontal: 58, marginVertical: 50}}>
         
        </View>

        <View style={{alignItems: 'center'}}>
          <Button
            title={'Next'}
            textStyle={{fontSize: 14, color: Colors.white}}
            style={styles.newBonusBtn}
            onPress={()=>{
              if(isTeam){
                navigation.navigate("BonusTeam")
              }
            }}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AddBonusForm;
