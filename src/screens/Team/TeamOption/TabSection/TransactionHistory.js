import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import {Colors} from '../../../../utils/colors';
import Table from '../../../../component/Table';
import {
  getBgColor,
  getColor,
  numberWithCommas,
} from '../../../../utils/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {images} from '../../../../utils/images';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TransactionHistory = ({navigation, route}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const tableData = [
    {
      date: '04/24/2023',
      product: 'Personal Cards',
      productsList: ['Personal Card 1', 'Personal Card 2', 'Personal Card 3'],
      amount: 12000,
    },
    {
      date: '04/24/2023',
      product: 'Business Cards',
      productsList: ['Personal Card 1', 'Personal Card 2', 'Personal Card 3'],
      amount: 10000,
    },
    {
      date: '04/24/2023',
      product: 'High Yield Savings',
      productsList: [],

      amount: 72000,
    },
    {
      date: '04/24/2023',
      product: 'Certificate of Deposit',
      productsList: [],

      amount: 15000,
    },
  ];
  const tableData1 = [
    {
      name: 'Shirley Chen',
      pendingDeals: 12,
      amount: 12000,
    },
    {
      name: 'Henry McCourtney',
      pendingDeals: 3,
      amount: 10000,
    },
    {
      name: 'Dianne Russell',
      pendingDeals: 30,
      amount: 72000,
    },
    {
      name: 'Annette Rose',
      pendingDeals: 70,
      amount: 150000,
    },
    {
      name: 'Anthony Marshall',
      pendingDeals: 3,
      amount: 15000,
    },
  ];
  return (
    <View style={{marginHorizontal: 20}}>
      <FlatList
        data={tableData}
        renderItem={({item, index}) => (
          <View style={[styles.bodyMain]} key={index}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.black, fontSize: scale(12)}}>
                  {item.product}
                </Text>
                {Boolean(item.productsList.length) && (
                  <Pressable
                    onPress={() => {
                      if (selectedItem === index) {
                        setSelectedItem(null);
                      } else setSelectedItem(index);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{
                        color: Colors.lightBlue4,
                        fontSize: scale(12),
                        marginRight: 5,
                      }}>
                      3
                    </Text>
                    <Ionicons
                      name="chevron-down-outline"
                      size={20}
                      color={Colors.lightBlue4}
                    />
                  </Pressable>
                )}
              </View>
              <Text style={styles.headSecCol}>
                ${numberWithCommas(item.amount)}
              </Text>
            </View>
            <Text style={{fontSize: scale(12), color: Colors.darkGrey}}>
              {item.date}
            </Text>
            {selectedItem == index ? (
              <View style={{paddingVertical: scale(10)}}>
                {item.productsList.map((item, index) => {
                  return (
                    <Text
                      style={{
                        color: Colors.black,
                        fontSize: scale(12),
                        paddingVertical: 5,
                      }}
                      key={index}>
                      {item}
                    </Text>
                  );
                })}
              </View>
            ) : null}
          </View>
        )}
      />

      {/* <Table
        data={tableData1}
        tableStyle={[styles.tableContainer, {marginVertical: 50}]}
        tableHead={
          <View style={styles.tableHead}>
            <Text style={[styles.headFirstCol, {fontWeight: 600}]}>
              Pending Sales
            </Text>
            <Text
              style={[
                styles.headSecCol,
                {textAlign: 'center', fontWeight: 600},
              ]}>
              Pending Deals
            </Text>
            <Text style={[styles.headSecCol, {width: 60, fontWeight: 600}]}>
              Pending Revenue
            </Text>
          </View>
        }
        tableBody={({item, index}) => (
          <View
            style={[
              styles.bodyMain,
              {
                borderBottomWidth: index == tableData1.length - 1 ? 0 : 2,
              },
            ]}
            key={index}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 200,
                marginRight: 37,
              }}>
              <Image
                source={images.user}
                style={{
                  width: 51,
                  height: 51,
                  borderRadius: 50,
                  resizeMode: 'contain',
                  marginRight: 15,
                }}
              />
              <Text style={{color: Colors.lightBlue4}}>{item.name}</Text>
            </View>
            <Text style={[styles.headSecCol, {textAlign: 'center'}]}>
              {item.pendingDeals}
            </Text>
            <Text
              style={[
                styles.headSecCol,
                {
                  marginRight: index == tableData1.length - 1 ? 0 : 45,
                  color: Colors.green,
                },
              ]}>
              ${numberWithCommas(item.amount)}
            </Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  headFirstCol: {
    fontSize: scale(12),
    color: Colors.darkGrey3,
  },
  headSecCol: {
    fontSize: scale(12),
    color: Colors.green,
  },

  bodyMain: {
    backgroundColor: Colors.white,
    borderRadius: scale(10),
    padding: scale(15),
    marginBottom: scale(17),
    paddingHorizontal: scale(25),
  },
});
