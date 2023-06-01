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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Commissions = ({navigation}) => {
  const data = {
    legend: {
      enabled: false,
      textSize: 14,
      form: 'NONE',
      formSize: 14,
      xEntrySpace: 10,
      yEntrySpace: 5,
      wordWrapEnabled: true,
    },
    data: {
      dataSets: [
        {
          values: [5, 8, 4, 4.5, 6, 3, 5, 6, 6.5, 2, 5, 1.5],
          config: {
            drawValues: false,
            colors: [processColor(Colors.lightBlue4)],
            highlightEnabled: false,
          },
        },
      ],
      config: {
        barWidth: 0.2,
      },
    },
    xAxis: {
      drawGridLines: false,
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
      axisMaximum: 8,
      axisMinimum: 0,
      lineWidth: 15,
      position: 'BOTTOM',
      textColor: processColor(Colors.lightBlue3),
      textSize: 7,
      labelCount: 18,
      // centerAxisLabels: true,
    },
  };
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.midContent,
        {width: screenWidth - 60, height: 460, marginRight: 100, padding: 32},
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
            highlights={data.highlights}
            legend={data.legend}
            style={{height: 150, marginTop: 15, width: '100%'}}
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
