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

const Contests = ({navigation, route}) => {
  const isList = route.params?.isList;
  const [data, setData] = useState([
    {rank: '1st', name: 'Shirley Chen', booking: 4800, deal: 22},
    {
      rank: '2nd',
      name: 'Henry McCourtney',
      booking: 3300,
      deal: 14,
    },
    {rank: '3rd', name: 'Dianne Russell', booking: 2500, deal: 8},
  ]);
  const renderItem = ({item, index}) => (
    <View key={index} style={styles.midContent}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="star" size={24.54} color={Colors.lightBlue4} />
        <Text style={styles.rankText}>{item.rank} Place</Text>
      </View>
      <Image source={images.user} style={styles.cardUserImage} />
      <Text style={styles.cardUserName}>{item.name}</Text>
      <View style={styles.bottomContent}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.bookingText}>
            ${numberWithCommas(item.booking)}
          </Text>
          <Text style={styles.bookingTitle}>Current Bookings</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.bookingText}>{item.deal}</Text>
          <Text style={styles.bookingTitle}>Closed Deals</Text>
        </View>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      {isList === true ? (
        <View>
          <ImageBackground style={styles.bg} source={images.background}>
            <View style={styles.headerMain}>
              <View style={styles.headerImageContent}>
                <Image
                  source={images.bonuses}
                  style={styles.menuImage}
                  resizeMode="contain"
                />
                <Text style={styles.menuTitle}>Contests</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddContest')}>
                <Ionicons
                  name="add-circle-outline"
                  size={30}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{top: -268, marginHorizontal: 20}}>
            <View style={styles.midContent}>
              <Text style={styles.userTitle}>4th Quarter Sales Contest</Text>
              <Text style={styles.dateText}>Oct 1 - Dec 31</Text>
              <View style={styles.firstContent}>
                <MaterialCommunityIcons
                  name={'clock-outline'}
                  size={36}
                  color={Colors.lightBlue4}
                />
                <Text style={styles.timerText}>
                  23 <Text style={{fontSize: 21}}>Days Remaining</Text>
                </Text>
              </View>
              <Text style={styles.firstDescription}>
                The sales rep who books the most revenue in Q4 wins a trip for
                two to the Bahamas!
              </Text>
            </View>
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </View>
      ) : (
        <ImageBackground source={images.background} style={styles.emptyBg}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={images.contest}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuTitle}>Contests</Text>
          </View>
          <Image
            source={images.contests}
            style={styles.noBonusImage}
            resizeMode="contain"
          />
          <Text style={styles.noBonusText}>
            No contests have been created yet.
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
              title={'New Contest'}
              textStyle={{fontSize: 14, color: Colors.white}}
              style={styles.newBonusBtn}
              onPress={() => navigation.navigate('AddContest')}
            />
          </View>
        </ImageBackground>
      )}
    </ScrollView>
  );
};

export default Contests;
