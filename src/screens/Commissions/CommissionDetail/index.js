import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Button from '../../../component/Button';

import styles from './style';
import Table from '../../../component/Table';
import Header from '../../../component/Header';
import {numberWithCommas} from '../../../utils/constant';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const CommissionDetail = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('Pending 5');
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={{
          height: (screenHeight / 10) * 1.5,
        }}
        source={images.background}>
        <Header
          customTitle={
            <View style={styles.header}>
              <Image
                source={images.user}
                style={styles.menuImage}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.headerTitle}>Jacob Jones</Text>
                <Text style={styles.headerSubTitle}>Commission Rates</Text>
              </View>
            </View>
          }
          onBackPress={() => {
            navigation.goBack();
          }}
          onTitlePress={() => {
            // navigation.navigate('CustomerDetail', {title: title});
          }}
          textStyle={{fontSize: 14, fontWeight: 700}}
        />
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 23,
          marginHorizontal: 20,
        }}>
        <FlatList
          data={[
            {name: 'Pending 5'},
            {name: 'Wins 3'},
            {name: 'DEFAULT RATES'},
          ]}
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
                    isSelected == item.name ? Colors.lightBlue4 : Colors.white,
                }}
                textStyle={{
                  color: isSelected == item.name ? Colors.white : Colors.black,
                }}
              />
            );
          }}
        />
      </View>
      <Table
        data={[
          {company: 'Polaris', dealSize: 124000, commission: 300},
          {
            company: 'American Airlines',
            dealSize: 96000,
            commission: 300,
          },
          {company: 'United Health', dealSize: 354000, commission: 300},
          {
            company: 'Medtronic',
            dealSize: 965000,
            commission: 300,
          },
        ]}
        tableStyle={styles.tableContainer}
        tableHead={
          <View style={styles.tableHead}>
            <Text style={[styles.headFirstCol, {fontWeight: 600}]}>
              Company
            </Text>
            <Text style={[styles.headSecCol, {fontWeight: 600}]}>
              Deal size
            </Text>
            <Text style={[styles.headSecCol, {fontWeight: 600,width:100,}]}>
              Commission
            </Text>
          </View>
        }
        tableBody={({item, index}) => (
          <View  >
            <Pressable
              style={styles.bodyMain}
              onPress={() => {
                if (isSelectedIndex === index) {
                  setIsSelectedIndex(null);
                } else {
                  setIsSelectedIndex(index);
                }
              }}>
              <Text style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                {item.company}
              </Text>
              <Text style={[styles.headSecCol, {color: Colors.lightBlue}]}>
                ${numberWithCommas(item.dealSize)}
              </Text>
              <Text style={[styles.headSecCol, {color: Colors.lightBlue,width:100,}]}>
                ${numberWithCommas(item.commission)}
              </Text>
            </Pressable>
            {isSelectedIndex === index && (
              <View style={styles.optionContent}>
                <Button
                  title={'Won'}
                  style={{
                    backgroundColor: Colors.green,
                    height: 46,
                    marginRight: 15,
                  }}
                  textStyle={{fontSize: 14}}
                />
                <Button
                  title={'Lost'}
                  style={{
                    backgroundColor: '#E2E9EF',
                    height: 46,
                    marginRight: 15,
                  }}
                  textStyle={{fontSize: 14, color: Colors.darkGrey2}}
                />
                <Button
                  type={'icon'}
                  icon={
                    <Octicons
                      name="pencil"
                      size={21}
                      color={Colors.darkGrey3}
                      style={{marginRight: 15}}
                    />
                  }
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
    </ScrollView>
  );
};

export default CommissionDetail;
