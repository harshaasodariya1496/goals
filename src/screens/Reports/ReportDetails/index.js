import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Pressable,
  processColor,
} from 'react-native';
import {useState} from 'react';
import {PieChart} from 'react-native-charts-wrapper';
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

const pieChartData = {
  legend: {
    enabled: true,
    textSize: scale(12),
    form: 'CIRCLE',
    formSize: scale(15),
    wordWrapEnabled: true,
  },
  data: {
    dataSets: [
      {
        values: [
          {value: 500000, label: 'product 5'},
          {value: 406000, label: 'product 6'},
          {value: 305000, label: 'product 7'},
          {value: 200000, label: 'product 4'},
          {value: 157000, label: 'product 8'},
          {value: 70000, label: 'product 3'},
          {value: 30000, label: 'sample product'},
        ],
        config: {
          colors: [
            processColor('#37CD8D'),
            processColor('#F6E176'),
            processColor('#37CD8D'),
            processColor('#F6E176'),
            processColor('#FE9100'),
            processColor('#FB5F60'),
            processColor('#0CC7BC'),
          ],

          valueTextSize: scale(10),
          valueTextColor: processColor('black'),
          yValuePosition: 'INSIDE_SLICE',
          valueFormatter: '##',
          valueLineColor: processColor('green'),
          valueLinePart1Length: 0.5,
          // selectionShift:scale(50)
        },
      },
    ],
  },
  description: {
    text: '',
  },
};
const data = {
  legend: {
    enabled: false,
  },
  data: {
    dataSets: [
      {
        values: [
          {y: 500000},
          {y: 400000},
          {y: 318000},
          {y: 200000},
          {y: 150000},
          {y: 70000},
        ],
        config: {
          colors: [processColor(Colors.green)],
          highlightEnabled: false,
          // valueFormatter: '$##',
          valueTextColor: processColor(Colors.green),
          valueTextSize: scale(12),
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
      'cust 5',
      'cust 6',
      'cust 7',
      'cust 4',
      'cust 8',
      'cust 3',
    ],
    granularityEnabled: true,
    granularity: 1,
    position: 'BOTTOM',
    drawGridLines: false,
    textColor: processColor(Colors.black),
    textSize: scale(10),
    labelCount: 6,
  },
};
const ReportDetails = ({navigation, route}) => {
  const month = route.params?.month;

  return (
    <View style={styles.container} nestedScrollEnabled={true}>
      <ImageBackground style={styles.bg} source={images.bg}>
        <Header
          onBackPress={() => {
            navigation.goBack();
          }}
          title={`${month} Sales Report`}
        />
        <ScrollView style={styles.scrollStyle} nestedScrollEnabled={true}>
          <View style={styles.bgContent}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: scale(16),
                  color: Colors.lightBlue,
                }}>
                Top Customers
              </Text>
              <BarChart
                xAxis={data.xAxis}
                yAxis={{
                  left: {drawGridLines: false, enabled: false},
                  right: {drawGridLines: false, enabled: false},
                }}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
                chartDescription={{text: ''}}
                drawBarShadow={true}
                drawValueAboveBar={true}
                data={data.data}
                animation={{durationY: 1500}}
                highlights={data.highlights}
                legend={data.legend}
                style={{height: 200, width: '100%', marginTop: 10}}
              />
            </View>
          </View>
          <View style={styles.bgContent}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: scale(16),
                  color: Colors.lightBlue,
                }}>
                Top Performing Productss
              </Text>
              <PieChart
                style={{height: scale(300), width: '100%'}}
                logEnabled={true}
                chartBackgroundColor={processColor('white')}
                data={pieChartData.data}
                legend={pieChartData.legend}
                chartDescription={pieChartData.description}
                rotationEnabled={false}
                entryLabelColor={processColor('green')}
                entryLabelTextSize={20}
                rotationAngle={270}
                usePercentValues={false}
                centerTextRadiusPercent={0}
                holeRadius={85}
                labelRotationAngle={45}
                drawEntryLabels={false}
                holeColor={processColor('rgba(0,0,0,0)')} 
                maxAngle={360}
                onChange={event => console.log(event.nativeEvent)}
              />
            </View>
          </View>
          <View style={styles.bgContent}>
            <Pressable
              style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center',}}
              onPress={() => {
                navigation.navigate('IndividualPerformance');
              }}>
              <Text
                style={{
                  fontSize: scale(16),
                  color: Colors.lightBlue,
                  marginRight:10,
                  bottom:scale(2)
                }}>
                Individual Preformance
              </Text>
              <Octicons
                name={'chevron-right'}
                size={scale(16)}
                color={Colors.lightBlue}
              />
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ReportDetails;
