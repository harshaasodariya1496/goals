import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  processColor,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import FlagAmount from '../../component/FlagAmount';

import styles from './style';
import {chartData} from '../../utils/constant';
import {BarChart} from 'react-native-charts-wrapper';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Team = ({navigation}) => {
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
        barWidth: 0.5,
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
    <Pressable
      onPress={() => {
        navigation.navigate('TeamDetails');
      }}
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
        <View style={[styles.box, {marginBottom: 0, height: 110}]}>
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
            style={{height: 89}}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.salesTitle}>Sales This Month</Text>
          <Text style={styles.salesValue}>$565,000</Text>
          <FlagAmount amount={'3,500,000'} ViewStyle={styles.flagView} />
        </View>
      </View>
    </Pressable>
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
        <FlatList data={[0, 1, 2]} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

export default Team;
 