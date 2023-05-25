import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Image,
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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TransactionHistory = ({navigation, route}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const tabelData = [
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
  const tabelData1 = [
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
      <Table
        data={tabelData}
        tableStyle={styles.tabelContainer}
        tableHead={
          <View style={styles.tabelHead}>
            <Text style={styles.headFirstCol}>Sale Date</Text>
            <Text style={[styles.headSecCol, {width: 150}]}>
              Product/Service
            </Text>
            <Text style={[styles.headSecCol, {width: 60}]}>Amount</Text>
          </View>
        }
        tableBody={({item, index}) => (
          <View
            style={[
              styles.bodyMain,
              {
                borderBottomWidth: index == tabelData.length - 1 ? 0 : 2,
              },
            ]}
            key={index}>
            <Text style={[styles.headFirstCol]}>{item.date}</Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 180,
                  marginRight: 45,
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.black, fontSize: 14}}>
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
                        fontSize: 14,
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
              {selectedItem == index ? (
                <View style={{paddingVertical: 10}}>
                  {item.productsList.map((item, index) => {
                    return (
                      <Text
                        style={{
                          color: Colors.black,
                          fontSize: 14,
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
            <Text
              style={[
                styles.headSecCol,
                {
                  width: 60,
                  marginRight: index == tabelData.length - 1 ? 0 : 45,
                  color: Colors.green,
                },
              ]}>
              ${numberWithCommas(item.amount)}
            </Text>
          </View>
        )}
      />

      <Table
        data={tabelData1}
        tableStyle={[styles.tabelContainer, {marginVertical: 50}]}
        tableHead={
          <View style={styles.tabelHead}>
            <Text style={[styles.headFirstCol]}>Pending Sales</Text>
            <Text style={[styles.headSecCol, {textAlign: 'center'}]}>
              Pending Deals
            </Text>
            <Text style={[styles.headSecCol, {width: 60}]}>
              Pending Revenue
            </Text>
          </View>
        }
        tableBody={({item, index}) => (
          <View
            style={[
              styles.bodyMain,
              {
                borderBottomWidth: index == tabelData1.length - 1 ? 0 : 2,
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
                  marginRight: index == tabelData1.length - 1 ? 0 : 45,
                  color: Colors.green,
                },
              ]}>
              ${numberWithCommas(item.amount)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  tabelContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    borderRadius: 13,
    paddingHorizontal: 20,
  },
  tabelHead: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
  },
  headFirstCol: {
    width: 200,
    marginRight: 37,
    fontSize: 14,
    color: Colors.black,
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.black,
    marginRight: 45,
    width: 60,
  },

  bodyMain: {
    // height: 53,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 22,
    borderBottomColor: Colors.grey,
  },
});
