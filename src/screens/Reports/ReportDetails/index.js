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

          valueTextSize: 18,
          valueTextColor: processColor('black'),
          // xValuePosition: "OUTSIDE_SLICE",
          valueFormatter: '##',
          valueLineColor: processColor('green'),
          valueLinePart1Length: 0.5,
          axisDependency: ['LEFT'],
        },
      },
    ],
  },
  description: {
    text: '',
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
                style={{height: scale(300), width: '100%', borderWidth: 1}}
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
                drawEntryLabels={false}
                holeColor={processColor('rgba(0,0,0,0)')}
                transparentCircleRadius={0}
                maxAngle={360}
                onChange={event => console.log(event.nativeEvent)}
              />
            </View>
          </View>
          <View style={styles.bgContent}>
            <Pressable
              style={{alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('IndividualPerformance');
              }}>
              <Text
                style={{
                  fontSize: scale(16),
                  color: Colors.lightBlue,
                }}>
                Individual Preformance
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ReportDetails;
