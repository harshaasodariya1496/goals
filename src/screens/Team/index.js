import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react'; 
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import styles from './style';
import FlagAmount from '../../component/FlagAmount';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Customers = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={[styles.midContent, {width: '100%', height: 400, padding: 32}]}>
      <Image source={images.user} style={styles.userImage} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={styles.userTitle}>Maxien Welch</Text>
        <Entypo
          name="chevron-right"
          size={20}
          color={Colors.lightBlue}
          style={{top: 2}}
        />
      </View>
      <View style={styles.boxMain}>
        <View style={styles.box}>
          <Text style={styles.roiText}>ROI YTD</Text>
          <Text style={styles.roiValue}>34%</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.salesTitle}>Sales Year To Date</Text>
          <Text style={styles.salesValue}>$3,112,000</Text>
          <FlagAmount amount={'3,500,000'} ViewStyle={styles.flagView} />
        </View>
        <View style={styles.box}></View>
        <View style={styles.box}>
          <Text style={styles.salesTitle}>Sales This Month</Text>
          <Text style={styles.salesValue}>$565,000</Text>
          <FlagAmount amount={'3,500,000'} ViewStyle={styles.flagView} />
        </View>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <ImageBackground
        style={{
          height: 305,
          paddingTop: 40,
          paddingHorizontal: 16,
        }}
        source={images.background}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 40,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={images.team}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuTitle}>Team</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AddTeam')}>
            <Ionicons name="settings-outline" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{top: -200, marginHorizontal: 20}}>
        <FlatList data={[0, 1,2]} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

export default Customers;
