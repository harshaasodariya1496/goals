import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';

import styles from './style';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Reports = ({navigation}) => {
  const month = [
    {name: 'January', isRead: true},
    {name: 'February', isRead: true},
    {name: 'March', isRead: true},
    {name: 'Q1', isRead: false},
    {name: 'April', isRead: true},
    {name: 'May', isRead: true},
    {name: 'June', isRead: true},
    {name: 'Q2', isRead: false},
    {name: 'July', isRead: true},
    {name: 'August', isRead: true},
    {name: 'September', isRead: true},
    {name: 'Q3', isRead: false},
    {name: 'October', isRead: true},
    {name: 'November', isRead: true},
    {name: 'December', isRead: true},
    {name: 'Q4', isRead: false},
    {name: '2022', isRead: false},
  ];
  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <View style={styles.mainView}>
        <View style={styles.textBox}>
          <Text style={styles.inputText}>2022</Text>
        </View>
        <FlatList
          data={month}
          style={{
            paddingVertical: 20,
          }}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View style={styles.cardMain}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={images.file}
                    style={{
                      width: 67,
                      height: 60,
                      opacity: item.isRead ? 0.5 : 1,
                    }}
                  />
                  <Text style={styles.monthText}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.yearMain}>
          <View style={styles.yearView}>
            <Text style={styles.yearText}>2021</Text>
          </View>
          <View style={styles.yearView}>
            <Text style={styles.yearText}>2020</Text>
          </View>
          <View style={styles.yearView}>
            <Text style={styles.yearText}>2019</Text>
          </View>
        </View>
      </View>
      <View style={{padding: 80}} />
    </ScrollView>
  );
};

export default Reports;
