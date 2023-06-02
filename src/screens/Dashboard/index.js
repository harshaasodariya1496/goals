import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  processColor,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import FlagAmount from '../../component/FlagAmount';

import styles from './style';
import {BarChart} from 'react-native-charts-wrapper';
import {chartData} from '../../utils/constant';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.midContent,
        {width: screenWidth - 80, height: 430, marginRight: 100},
      ]}>
      <View style={{alignItems: 'center'}}>
        <Image source={images.user} style={styles.userImage} />
        <Text style={styles.userTitle}>Shirley Chen</Text>
      </View>
      <View style={styles.userDetailsContent}>
        <View style={styles.detailsContent}>
          <Text style={styles.userSubTitle}>Closed Deals</Text>
          <Text style={styles.userSubValue}>12</Text>
        </View>
        <View style={styles.detailsContent}>
          <Text style={styles.userSubTitle}>Pending Deals</Text>
          <Text style={styles.userSubValue}>$15,000</Text>
        </View>
        <View style={styles.detailsContent}>
          <Text style={styles.userSubTitle}>Revenue This Month</Text>
          <Text style={styles.userSubValue}>$124,000</Text>
        </View>
        <View style={styles.detailsContent}>
          <Text style={styles.userSubTitle}>Revenue YTD</Text>
          <Text style={styles.userSubValue}>12</Text>
        </View>
        <View style={styles.detailsContent}>
          <Text style={styles.userSubTitle}>Commissions This Month</Text>
          <Text style={styles.userSubValue}>$15,000</Text>
        </View>
        <View style={styles.detailsContent}>
          <Text style={styles.userSubTitle}>Commissions YTD</Text>
          <Text style={styles.userSubValue}>$124,000</Text>
        </View>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.bg} source={images.background}>
        <View style={styles.fContent}>
          <Text style={styles.totalTitle}>Total Sales</Text>
          <Text style={styles.totalAmt}>$ 13,232,000</Text>

          <View style={styles.amtContent}>
            <Feather
              name="flag"
              size={20}
              color={Colors.white}
              style={styles.flagIcon}
            />
            <Text style={[styles.totalAmt, {fontSize: 16}]}>
              $ 15,000,000 | 88%
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{top: -110, marginHorizontal: 20}}>
        <View style={[styles.midContent, {height: 250}]}>
          <View style={styles.midFirstContent}>
            <View>
              <Text style={styles.monthTitle}>This Month's Sales</Text>
              <Text style={styles.monthAmt}>$ 17,000</Text>
            </View>
            <FlagAmount amount={'3,500,000'} />
          </View>
          <View style={styles.graphContent}>
            <BarChart
              xAxis={chartData.xAxis}
              yAxis={{
                left: {drawGridLines: false, enabled: false},
                right: {drawGridLines: false, enabled: false},
              }}
              visibleRange={{x: {min: 12, max: 12}}}
              pinchZoom={false}
              doubleTapToZoomEnabled={false}
              chartDescription={{text: ''}}
              drawBarShadow={false}
              data={chartData.data}
              highlights={chartData.highlights}
              legend={chartData.legend}
              style={{height: 150, marginTop: 15}}
              drawValueAboveBar={true}
              drawHighlightArrow={true}
              marker={{
                enabled: true,
                textSize: 15,
                elevation: 0,
              }}
              animation={{durationY: 1000}}
            />
          </View>
        </View>

        <View style={styles.midContent}>
          <Text style={styles.monthTitle}>Pipeline Revenue</Text>
          <Text style={[styles.monthAmt, {marginBottom: 5}]}>$ 565,000</Text>
        </View>
        <View>
          <Carousel
            sliderWidth={screenWidth}
            data={[0, 1]}
            renderItem={renderItem}
            hasParallaxImages
            removeClippedSubviews={false}
            itemWidth={screenWidth - 60}
            inactiveSlideScale={1}
            activeSlideAlignment={'start'}
            initialNumToRender={0}
          />
        </View>
        <View style={styles.midContent}>
          <View style={styles.midFirstContent}>
            <View>
              <Text style={styles.monthTitle}>Team ROI</Text>
              <Text style={styles.monthAmt}>
                39% <Text style={{fontSize: 10}}>YTD</Text>
              </Text>
            </View>
            <FlagAmount amount={'3,500,000'} />
          </View>
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
              animation={{durationY: 1000}}
            />
          </View>
        </View>
        <View style={[styles.midContent, {paddingHorizontal: 20}]}>
          <Text style={styles.pipeTitle}>Pipeline</Text>
          <View style={styles.pipeSub}>
            <View style={styles.pipeMain}>
              <Text style={styles.pipeDetailTitle}>Pending Revenue</Text>
              <Text style={styles.pipeDetailAmount}>$1.7 M</Text>
            </View>
            <View style={styles.pipeMain}>
              <Text style={styles.pipeDetailTitle}>Wins This Month</Text>
              <Text style={styles.pipeDetailAmount}>31</Text>
            </View>
            <View style={[styles.pipeMain, {marginBottom: 0}]}>
              <Text style={styles.pipeDetailTitle}>Wins Year To Date</Text>
              <Text style={styles.pipeDetailAmount}>97</Text>
            </View>
            <View style={[styles.pipeMain, {marginBottom: 0}]}>
              <Text style={styles.pipeDetailTitle}>Avg Revenue Per Deal</Text>
              <Text style={styles.pipeDetailAmount}>37K</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
