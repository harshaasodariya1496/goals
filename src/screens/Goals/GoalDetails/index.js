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
import {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Carousel from 'react-native-snap-carousel';
import {BarChart} from 'react-native-charts-wrapper';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';
import {chartData, numberWithCommas} from '../../../utils/constant';
import {scale} from 'react-native-size-matters';
import Header from '../../../component/Header';
import TextInput from '../../../component/TextInput';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Button from '../../../component/Button';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const GoalDetails = ({navigation}) => {
  const [monthData, setMonthData] = useState([
    {month: 'January', goal: 50000, actual: 0},
    {month: 'Febuary', goal: 50000, actual: 0},
    {month: 'March', goal: 50000, actual: 0},
    {month: 'April', goal: 50000, actual: 0},
    {month: 'May', goal: 50000, actual: 0},
    {month: 'June', goal: 50000, actual: 0},
    {month: 'July', goal: 50000, actual: 0},
    {month: 'Augest', goal: 50000, actual: 0},
    {month: 'September', goal: 50000, actual: 0},
    {month: 'October', goal: 50000, actual: 0},
    {month: 'November', goal: 50000, actual: 0},
    {month: 'December', goal: 50000, actual: 0},
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.bgContent}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: scale(18), color: Colors.black}}>
            {item.month}
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (selectedIndex === index) {
                setSelectedIndex(null);
              } else setSelectedIndex(index);
            }}>
            <Octicons name="pencil" size={21} color={Colors.darkGrey3} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputSection}>
          <View style={{width: '48%'}}>
            <Text style={styles.textInputLabel}>Goals</Text>
            <TextInput
              placeholder={'50000'}
              editable={Boolean(selectedIndex === index)}
              value={JSON.stringify(item.goal)}
              style={styles.textInputStyle}
            />
          </View>
          <View style={{width: '48%'}}>
            <Text style={styles.textInputLabel}>Actual</Text>
            <TextInput
              placeholder={'50000'}
              editable={Boolean(selectedIndex === index)}
              value={JSON.stringify(item.actual)}
              style={styles.textInputStyle}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.percentageContent, {marginLeft: 0}]}>
            <Text style={styles.percentageText}>-100%</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container} nestedScrollEnabled={true}>
      <ImageBackground style={styles.bg} source={images.bg}>
        <Header
          onBackPress={() => {
            navigation.goBack();
          }}
          customTitle={
            <View style={styles.header}>
              <Image
                source={images.user}
                style={styles.menuImage}
                resizeMode="contain"
              />
              <Text style={styles.headerTitle}>Member User</Text>
            </View>
          }
        />
        <ScrollView style={styles.scrollStyle} nestedScrollEnabled={true}>
          <View
            style={[
              styles.bgContent,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <Text style={styles.salesText}>2023 Sales Goals</Text>
            <View>
              <Text style={styles.annualSalesText}>Annual Sales Goals</Text>
              <View style={styles.subSalesContent}>
                <Text style={styles.amtText}>${numberWithCommas(935000)}</Text>
                <View style={styles.percentageContent}>
                  <Text style={styles.percentageText}>-41.18%</Text>
                </View>
              </View>
            </View>
          </View>
          <FlatList data={monthData} renderItem={renderItem} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button
              title={'Done'}
              style={{
                marginBottom: 100,
                marginTop: 30,
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default GoalDetails;
