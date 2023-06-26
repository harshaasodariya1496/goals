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
import {chartData, numberWithCommas} from '../../../utils/constant';
import {scale} from 'react-native-size-matters';
import {useState} from 'react';
import Button from '../../../component/Button';
import Table from '../../../component/Table';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Commissions = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('Sales');
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
        <Text style={styles.totalTitle}>Commissions</Text>
        <Text style={styles.totalAmt}>$ 13,232,000</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: scale(50),
          }}>
          <FlatList
            data={[{name: 'Sales'}, {name: 'Commission rates'}]}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.btnList}
            renderItem={({item, index}) => {
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
                        ? Colors.lightBlue2
                        : Colors.white,
                    height: scale(30),
                  }}
                  textStyle={{
                    fontSize: scale(12),
                    color:
                      isSelected == item.name ? Colors.white : Colors.black,
                  }}
                />
              );
            }}
          />
        </View>
      </ImageBackground>
      <View style={{top: scale(-175), marginHorizontal: 20}}>
        {isSelected === 'Sales' ? (
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
                  <Text style={styles.headFirstCol}>Customer</Text>
                  <Text style={styles.headSecCol}>Sales</Text>
                  <Text style={styles.headSecCol}>Date</Text>
                </View>
              }
              // listContainerStyle={{height: scale(180)}}
              tableBody={({item, index}) => (
                <View
                  style={[
                    styles.bodyContainer,
                    {
                      backgroundColor:
                        index % 2 == 0 ? Colors.grey : Colors.white,
                    },
                  ]}>
                  <Text
                    style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                    {item.company}
                  </Text>
                  <Text
                    style={[
                      styles.headSecCol,
                      {color: Colors.darkGrey3, fontWeight: 200},
                    ]}>
                    ${numberWithCommas(item.dealSize)}
                  </Text>
                  <Text
                    style={[
                      styles.headSecCol,
                      {color: Colors.darkGrey3, fontWeight: 200},
                    ]}>
                    ${numberWithCommas(item.dealSize)}
                  </Text>
                </View>
              )}
              tableFooter={
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
                  <Text
                    style={[
                      styles.headSecCol,
                      {color: Colors.darkGrey3, fontWeight: 200},
                    ]}>
                    ${numberWithCommas(100000)}
                  </Text>
                </View>
              }
            />
          </View>
        ) : (
          <View style={[styles.midContent]}>
            <Table
              data={[
                {company: 'Carpet', dealSize: 124000},
                {
                  company: 'LVP',
                  dealSize: 96000,
                },
                {company: 'Hardwood', dealSize: 354000},
              ]}
              tableStyle={styles.tableContainer}
              tableHead={
                <View style={styles.tableHead}>
                  <Text style={styles.headFirstCol}>Services</Text>
                  <Text style={styles.headSecCol}>Rate</Text>
                </View>
              } 
              tableBody={({item, index}) => (
                <View
                  style={[
                    styles.bodyContainer,
                    {
                      backgroundColor:
                        index % 2 == 0 ? Colors.grey : Colors.white,
                    },
                  ]}>
                  <Text
                    style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                    {item.company}
                  </Text>
                  <Text
                    style={[
                      styles.headSecCol,
                      {color: Colors.darkGrey3, fontWeight: 200},
                    ]}>
                    ${numberWithCommas(item.dealSize)}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Commissions;
