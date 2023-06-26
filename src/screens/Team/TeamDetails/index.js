import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Dimensions,
  ScrollView,
  ImageBackground,
  processColor,
} from 'react-native';
import {useState} from 'react';
import {BarChart, LineChart} from 'react-native-charts-wrapper';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Button from '../../../component/Button';

import styles from './style';
import Table from '../../../component/Table';
import {chartData, numberWithCommas} from '../../../utils/constant';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TeamDetails = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('Pending 5');
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const lineChartData = {
    xAxis: {
      enabled: false,
    },
    yAxis: {
      left: {
        enabled: false,
      },
      right: {
        enabled: false,
      },
    },
    data: {
      dataSets: [
        {
          values: [
            {
              y: 5,
              x: 0,
            },
            {
              y: 2,
              x: 1,
            },
            {
              y: 4,
              x: 2,
            },
            {
              y: 2.5,
              x: 3,
            },
            {
              y: 3,
              x: 4,
            },
            {
              y: 2.5,
              x: 5,
            },
            {
              y: 5,
              x: 6,
            },
            {
              y: 1.5,
              x: 7,
            },
            {
              y: 4,
              x: 8,
            },
            {
              y: 5,
              x: 9,
            },
            {
              y: 4,
              x: 10,
            },
            {
              y: 2.5,
              x: 11,
            },
            {
              y: 3,
              x: 12,
            },
            {
              y: 2.5,
              x: 13,
            },
            {
              y: 5,
              x: 14,
            },
            {
              y: 1.5,
              x: 15,
            },
            {
              y: 4,
              x: 16,
            },
            {
              y: 5,
              x: 17,
            },
          ],
          label: '',
          config: {
            lineWidth: 3,
            drawCircles: false,
            color: processColor(Colors.lightBlue2),
            // valueTextSize: 0,

            mode: 'CUBIC_BEZIER',
            drawValues: false,
          },
        },
      ],
    },
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.bg} source={images.background}>
        <View style={styles.headMain}>
          <View style={styles.headUser}>
            <Image source={images.user} style={styles.headUserImage} />
            <Text style={styles.headUserText}>Maxien Welch</Text>
          </View>
          <View style={styles.headLastContent}>
            <Image
              source={images.discussion}
              style={[styles.discussionImage, {marginHorizontal: 10}]}
            />
            <Image source={images.highlights} style={styles.discussionImage} />
          </View>
        </View>
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
      <View style={{top: scale(-100)}}>
        <View style={styles.midContent}>
          <Text style={styles.cardAmtText}>$1,500,000</Text>
          <Text style={styles.cardText}>Annual Sales Goal</Text>
          {/* <View style={styles.graphContent}> */}
          <BarChart
            xAxis={chartData.xAxis}
            yAxis={{
              left: {drawGridLines: false, enabled: false},
              right: {drawGridLines: false, enabled: false},
            }}
            pinchZoom={false}
            animation={{durationY: 1000}}
            doubleTapToZoomEnabled={false}
            chartDescription={{text: ''}}
            drawBarShadow={false}
            data={chartData.data}
            highlights={chartData.highlights}
            legend={chartData.legend}
            style={{height: 150, marginTop: 15, width: '100%'}}
          />
          {/* </View> */}
          <Text style={styles.cardFooterText}>Sales Year To Date</Text>
        </View>
        <View style={styles.midContent}>
          <Text style={styles.cardAmtText}>$1,500,000</Text>
          <Text style={styles.cardText}>Monthly Sales Goal</Text>

          <LineChart
            style={{height: 150, width: '100%'}}
            data={lineChartData.data}
            chartDescription={{text: ''}}
            legend={{
              enabled: false,
            }}
            animation={{durationX: 1000}}
            xAxis={lineChartData.xAxis}
            yAxis={lineChartData.yAxis}
            pinchZoom={false}
            doubleTapToZoomEnabled={false}
            drawBarShadow={false}
          />
          <Text style={styles.cardFooterText}>Sales This Month</Text>
        </View>
        <View style={styles.midContent}>
          <Text style={styles.cardAmtText}>$1,500,000</Text>
          <Text style={styles.cardText}>Annual Commision Goal</Text>
          <BarChart
            xAxis={chartData.xAxis}
            yAxis={{
              left: {drawGridLines: false, enabled: false},
              right: {drawGridLines: false, enabled: false},
            }}
            pinchZoom={false}
            doubleTapToZoomEnabled={false}
            chartDescription={{text: ''}}
            animation={{durationY: 1000}}
            drawBarShadow={false}
            data={chartData.data}
            highlights={chartData.highlights}
            legend={chartData.legend}
            style={{height: 150, marginTop: 15, width: '100%'}}
          />
          <Text style={styles.cardFooterText}>Commission Year To Date</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FlatList
            data={[
              {name: 'Pending 5'},
              {name: 'Wins 3'},
              {name: 'Losses 7'},
              {name: 'New'},
            ]}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.btnList}
            renderItem={({item, index}) => {
              if (item.name == 'New') {
                return (
                  <Button
                    type={'small'}
                    title={`+ ${item.name.toLocaleUpperCase()}`}
                    style={{
                      backgroundColor: Colors.lightBlue2,
                    }}
                    textStyle={{
                      color: Colors.white,
                    }}
                    onPress={() => {
                      navigation.navigate('AddDeal');
                    }}
                  />
                );
              }
              return (
                <Button
                  type={'small'}
                  title={item.name.toLocaleUpperCase()}
                  onPress={() => {
                    setIsSelected(item.name);
                  }}
                  style={{
                    backgroundColor:
                      isSelected == item.name
                        ? Colors.lightBlue4
                        : Colors.white,
                  }}
                  textStyle={{
                    color:
                      isSelected == item.name ? Colors.white : Colors.black,
                  }}
                />
              );
            }}
          />
        </View>
        <Table
          data={[
            {company: 'Polaris', dealSize: 124000},
            {
              company: 'American Airlines',
              dealSize: 96000,
            },
            {company: 'United Health', dealSize: 354000},
            {
              company: 'Medtronic',
              dealSize: 965000,
            },
          ]}
          tableStyle={styles.tableContainer}
          tableHead={
            <View style={styles.tableHead}>
              <Text style={styles.headFirstCol}>Company</Text>
              <Text style={styles.headSecCol}>Deal size</Text>
            </View>
          }
          tableBody={({item, index}) => (
            <View style={styles.bodyContainer}>
              <Pressable
                style={styles.bodyMain}
                onPress={() => {
                  if (isSelectedIndex === index) {
                    setIsSelectedIndex(null);
                  } else {
                    setIsSelectedIndex(index);
                  }
                }}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('TeamOption');
                  }}>
                  <Text
                    style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                    {item.company}
                  </Text>
                </Pressable>
                <Text
                  style={[
                    styles.headSecCol,
                    {color: Colors.lightBlue, fontWeight: 300},
                  ]}>
                  ${numberWithCommas(item.dealSize)}
                </Text>
              </Pressable>
              {isSelectedIndex === index && (
                <View style={styles.optionContent}>
                  <Button
                    title={'Won'}
                    style={{
                      backgroundColor: Colors.green,
                      height: 46,
                      // marginRight: 15,
                    }}
                    textStyle={{
                      fontSize: scale(14),
                      marginHorizontal: scale(10),
                    }}
                  />
                  <Button
                    title={'Lost'}
                    style={{
                      backgroundColor: '#E2E9EF',
                      height: 46,
                      // marginRight: 15,
                    }}
                    textStyle={{
                      fontSize: scale(14),
                      color: Colors.darkGrey2,
                      marginHorizontal: scale(10),
                    }}
                  />
                  <Button
                    type={'icon'}
                    icon={
                      <Octicons
                        name="pencil"
                        size={21}
                        color={Colors.darkGrey2}
                      />
                    }
                    // style={{marginRight: 15}}
                  />
                  <Button
                    type={'icon'}
                    icon={
                      <Image
                        source={images.trash}
                        style={styles.trashImage}
                        resizeMode="contain"
                      />
                    }
                  />
                </View>
              )}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default TeamDetails;
