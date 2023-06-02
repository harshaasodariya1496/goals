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
import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';

import styles from './style';
import {numberWithCommas} from '../../utils/constant';
import {useState} from 'react';
import Button from '../../component/Button';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Bonuses = ({navigation, route}) => {
  const isList = route.params?.isList;
  const [data, setData] = useState([]);
  const renderItem = ({item, index}) => (
    <View key={index} style={styles.midContent}>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.userTitle}>Weekly Sales Goal Bonus</Text>
      </View>
      <Text style={styles.dateText}>Aug 8 - Aug 12</Text>
      <View style={styles.midView}>
        <Image source={images.bonuses} style={styles.bonusImage} />
        <Text style={styles.bonusText}>${numberWithCommas(10000)}</Text>
      </View>
      <Progress
        value={50}
        _filledTrack={{
          bg: Colors.green,
        }}
        bg={'#E9F9ED'}
        style={{
          height: 16,
          width: '100%',
          marginTop: 17,
        }}
      />
      <View style={styles.progressMain}>
        <Text style={styles.progressType}>Stacy Burke</Text>
        <Text style={styles.progressText}>
          $8,000 <Text style={styles.slashText}>/</Text>
          <Text style={styles.allProgressText}> $20,000</Text>
        </Text>
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('CommissionDetail')}
        style={{position: 'absolute', top: 19, right: 19}}>
        <Ionicons name="ellipsis-vertical" size={20} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      {isList == true ? (
        <View>
          <ImageBackground style={styles.bg} source={images.background}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 40,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={images.bonuses}
                  style={styles.menuImage}
                  resizeMode="contain"
                />
                <Text style={styles.menuTitle}>Bonuses</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('AddBonus')}>
                <Ionicons
                  name="add-circle-outline"
                  size={30}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{top: -268, marginHorizontal: 20}}>
            <FlatList data={[0, 1, 2, 3]} renderItem={renderItem} />
          </View>
        </View>
      ) : (
        <ImageBackground source={images.background} style={styles.emptyBg}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={images.bonuses}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuTitle}>Bonuses</Text>
          </View>
          <Image
            source={images.bonus}
            style={styles.noBonusImage}
            resizeMode="contain"
          />
          <Text style={styles.noBonusText}>
            No bonuses have been created yet.
          </Text>
          <View style={{alignItems: 'center'}}>
            <Button
              type={'icon-label'}
              icon={
                <MaterialCommunityIcons
                  size={16}
                  color={Colors.white}
                  name={'plus'}
                />
              }
              title={'New Bonus'}
              textStyle={{fontSize: 14, color: Colors.white}}
              style={styles.newBonusBtn}
              onPress={() => navigation.navigate('AddBonus')}
            />
          </View>
        </ImageBackground>
      )}
    </ScrollView>
  );
};

export default Bonuses;
