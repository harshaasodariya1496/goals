import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Progress} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import {BarChart} from 'react-native-charts-wrapper';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';

import styles from './style';
import Charts from '../../component/Charts';
import { chartData } from '../../utils/constant';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Goals = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.midContent,
        {width: screenWidth - 100, height: 480, padding: 32},
      ]}>
      <View style={{alignItems: 'center'}}>
        <Image source={images.user} style={styles.userImage} />
        <Text style={styles.userTitle}>Maxien Welch</Text>
        <Text style={styles.amt}>$1,500,000</Text>
        <Text style={[styles.userTitle, {fontSize: 14}]}>
          Annual Sales Goal
        </Text>
        <View style={styles.graphContent}>
          <BarChart
            xAxis={chartData.xAxis}
            yAxis={{
              left: {drawGridLines: false, enabled: false},
              right: {drawGridLines: false, enabled: false},
            }}
            pinchZoom={false}
            doubleTapToZoomEnabled={false}
            chartDescription={{text: ''}}
            drawBarShadow={false}
            data={chartData.data}
            highlights={chartData.highlights}
            legend={chartData.legend}
            style={{height: 150, marginTop: 15}}
          />
        </View>
        <Text style={[styles.userTitle, {fontSize: 14, marginTop: 14}]}>
          Monthly Sales Goals
        </Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
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
      <View style={{top: -275, marginHorizontal: 20}}>
        <Carousel
          sliderWidth={screenWidth}
          data={[0, 1, 2, 3]}
          renderItem={renderItem}
          hasParallaxImages
          removeClippedSubviews={false}
          itemWidth={screenWidth - 80}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment={'start'}
          initialNumToRender={0}
        />
      </View>
    </ScrollView>
  );
};

export default Goals;
