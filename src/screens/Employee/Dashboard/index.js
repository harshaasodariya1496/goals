import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  processColor,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import FlagAmount from '../../../component/FlagAmount';

import styles from './style';
import {BarChart} from 'react-native-charts-wrapper';
import {chartData, numberWithCommas} from '../../../utils/constant';
import {useState} from 'react';
import Button from '../../../component/Button';
import Table from '../../../component/Table';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('Pending 5');
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.midContent,
        {width: screenWidth - 80, marginRight: 100, paddingBottom: scale(24)},
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
              <Text style={styles.monthTitle}>My Sales Year To Date</Text>
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
        <View style={[styles.midContent, {height: 250}]}>
          <View style={styles.midFirstContent}>
            <View>
              <Text style={styles.monthTitle}>My Sales This Month</Text>
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
                      navigation.navigate('TeamOption');
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
        <View style={[styles.midContent]}>
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
            listContainerStyle={{height: scale(180)}}
            tableBody={({item, index}) => (
              <View
                style={[
                  styles.bodyContainer,
                  {
                    backgroundColor:
                      index % 2 == 0 ? Colors.grey : Colors.white,
                  },
                ]}>
                <Pressable onPress={() => {}}>
                  <Text
                    style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                    {item.company}
                  </Text>
                </Pressable>
                <Text
                  style={[
                    styles.headSecCol,
                    {color: Colors.darkGrey3, fontWeight: '200'},
                  ]}>
                  ${numberWithCommas(item.dealSize)}
                </Text>
              </View>
            )}
          />
          <View style={styles.bodyContainer}>
            <Text style={[styles.headFirstCol, {color: Colors.black}]}>
              Total
            </Text>
            <Text
              style={[
                styles.headSecCol,
                {color: Colors.darkGrey3, fontWeight: 200},
              ]}>
              ${numberWithCommas(100000)}
            </Text>
          </View>
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
      </View>
    </ScrollView>
  );
};

export default Dashboard;
