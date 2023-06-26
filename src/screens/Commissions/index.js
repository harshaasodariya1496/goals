import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  processColor,
} from 'react-native';
import {Progress} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import {BarChart} from 'react-native-charts-wrapper';

import styles from './style';
import { scale } from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Commissions = ({navigation}) => {
  const data = {
    legend: {
      enabled: false,
    },
    data: {
      dataSets: [
        {
          values: [
            {y: 100},
            {y: 105},
            {y: 102},
            {y: 110},
            {y: 114},
            {y: 109},
            {y: 105},
            {y: 99},
            {y: 95},
            {y: 110},
            {y: 114},
            {y: 109},
          ],
          config: {
            drawValues: false,
            colors: [processColor(Colors.lightBlue4)],
            highlightEnabled: false,
          },
        },
      ],
      config: {
        barWidth: 0.4,
      },
    },
    highlights: [{x: 3}, {x: 6}],
    xAxis: {
      valueFormatter: [
        'J',
        'F',
        'M',
        'A',
        'M',
        'J',
        'J',
        'A',
        'S',
        'O',
        'N',
        'D',
      ],
      granularityEnabled: true,
      granularity: 1,
      position: 'BOTTOM',
      drawGridLines: false,
      textColor: processColor(Colors.lightBlue3),
      textSize: 7,
      labelCount: 12,
    },
  };
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.midContent,
        {
          width: '100%',
          height: 460,
          marginRight: 100,
          padding: 32, 
        },
      ]}>
      <View style={{alignItems: 'center'}}>
        <Image source={images.user} style={styles.userImage} />

        <Text style={styles.userTitle}>Maxien Welch</Text>
        <Text style={styles.amt}>$1,500,000</Text>
        <Text style={[styles.userTitle, {fontSize: 14}]}>
          Annual Sales Commissions
        </Text>
        <View style={styles.graphContent}>
          <BarChart
            xAxis={data.xAxis}
            yAxis={{
              left: {drawGridLines: false, enabled: false},
              right: {drawGridLines: false, enabled: false},
            }}
            pinchZoom={false}
            doubleTapToZoomEnabled={false}
            chartDescription={{text: ''}}
            drawBarShadow={false}
            data={data.data}
            animation={{durationY: 1500}}
            highlights={data.highlights}
            legend={data.legend}
            style={{height: 150, width: '100%'}}
          />
        </View>
        <Text style={[styles.userTitle, {fontSize: 14, marginTop: 14}]}>
          Monthly Commissions
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CommissionDetail')}
        style={{position: 'absolute', top: 19, right: 19}}>
        <Ionicons name="ellipsis-vertical" size={20} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
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
              source={images.commissions}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuTitle}>Commissions</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CommissionSettings')}>
            <Ionicons name="settings-outline" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{top: -268, marginHorizontal: 20}}>
        <FlatList data={[0, 1, 2, 3]} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

export default Commissions;
