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
import Octicons from 'react-native-vector-icons/Octicons';
import Carousel from 'react-native-snap-carousel';
import {BarChart} from 'react-native-charts-wrapper';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';
import {chartData} from '../../../utils/constant';
import {scale} from 'react-native-size-matters';
import {useState} from 'react';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Goals = ({navigation}) => {
  const [data, setData] = useState([
    {month: 'January', goal: 12000, sales: 10000},
    {month: 'Febuary', goal: 12000, sales: 16000},
    {month: 'March', goal: 12000, sales: 0},
    {month: 'April', goal: 12000, sales: 0},
    {month: 'May', goal: 12000, sales: 0},
    {month: 'June', goal: 12000, sales: 0},
    {month: 'July', goal: 12000, sales: 0},
    {month: 'Augest', goal: 12000, sales: 0},
    {month: 'September', goal: 12000, sales: 0},
    {month: 'October', goal: 12000, sales: 0},
    {month: 'November', goal: 12000, sales: 0},
    {month: 'December', goal: 12000, sales: 0},
  ]);
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <ImageBackground style={styles.bg} source={images.background}>
        <Text style={styles.totalTitle}>Total Sales</Text>
        <Text style={styles.totalAmt}>$ 13,232,000</Text>
        <View style={styles.amtContent}>
          <Text style={[styles.totalAmt, {fontSize: 16}]}>
            $ 3,500,000 | 48%
          </Text>
        </View>
        <Progress
          value={50}
          _filledTrack={{
            bg: Colors.lightBlue2,
          }}
          bg={'rgba(0,0,0,0.1)'}
          style={{
            height: 16,
            width: screenWidth - 40,
            marginTop: 17,
          }}
        />
      </ImageBackground>
      <View style={{top: scale(-175), marginHorizontal: 20}}>
        <View style={styles.midContent}>
          <View style={styles.listContainer}>
            <View style={{width: scale(70)}} />
            <Text style={styles.tableAmt}>Goal</Text>
            <Text style={styles.tableAmt}>Sales</Text>
            <View style={{width: scale(60)}} />
          </View>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <View style={styles.listContainer}>
                  <Text style={styles.monthText}>{item.month}</Text>
                  <Text style={styles.tableAmt}>{item.goal}</Text>
                  <Text style={styles.tableAmt}>{item.sales}</Text>
                  <Text
                    style={[
                      styles.tableAmt,
                      {
                        textAlign: 'right',
                        color:
                          item.sales < item.goal ? Colors.red : Colors.green,
                      },
                    ]}>
                    {item.sales > 0
                      ? Math.floor((item.sales / item.goal) * 100 - 100)+'%'
                      : ''}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Goals;
