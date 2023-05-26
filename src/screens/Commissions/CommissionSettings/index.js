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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Button from '../../../component/Button';

import styles from './style';
import Table from '../../../component/Table';
import Header from '../../../component/Header';
import {numberWithCommas} from '../../../utils/constant';
import TextInput from '../../../component/TextInput';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const CommissionSettings = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('Pending 5');
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const [isEditIndex, setIsEditIndex] = useState(null);
  const tableData = [
    {services: 'Website Design', rate: 10},
    {services: 'SEO', rate: 10},
    {services: 'Content Marketing', rate: 10},
  ];
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={{
          height: (screenHeight / 10) * 1.5,
        }}
        source={images.background}>
        <Header
          title={'Commission Settings'}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
      </ImageBackground>
      <View
        style={{
          marginTop: 23,
          marginHorizontal: 20,
        }}>
        <Text style={{color: Colors.black, fontSize: 20}}>
          Assign rates to products and services
        </Text>
      </View>
      <Table
        data={tableData}
        tableStyle={styles.tableContainer}
        tableHead={
          <View style={styles.tableHead}>
            <Text style={[styles.headFirstCol, {fontWeight: 600}]}>
              Services
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.headSecCol, {fontWeight: 600}]}>Rate</Text>
              <Text style={{}}></Text>
            </View>
          </View>
        }
        tableBody={({item, index}) => (
          <View
            style={[
              styles.bodyContainer,
              {
                borderBottomWidth: index == tableData.length - 1 ? 0 : 2,
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                {item.services}
              </Text>

              <Pressable
                style={styles.bodyMain}
                onPress={() => {
                  if (isSelectedIndex === index) {
                    setIsSelectedIndex(null);
                  } else {
                    setIsSelectedIndex(index);
                    setIsEditIndex(null);
                  }
                }}>
                {isEditIndex == index ? (
                  <TextInput
                    value={item.rate.toString()}
                    style={styles.textInputStyle}
                  />
                ) : (
                  <Text style={[styles.headSecCol, {color: Colors.lightBlue}]}>
                    {numberWithCommas(item.rate)}%
                  </Text>
                )}
                <Ionicons
                  name="ellipsis-vertical"
                  size={20}
                  color={Colors.darkGrey2}
                />
              </Pressable>
            </View>
            {isSelectedIndex === index && (
              <View style={styles.optionContent}>
                <Button
                  type={'icon'}
                  icon={
                    <Octicons
                      name="pencil"
                      size={21}
                      color={Colors.darkGrey3}
                      style={{marginRight: 30}}
                    />
                  }
                  onPress={() => {
                    if (isEditIndex === index) {
                      setIsEditIndex(null);
                    } else {
                      setIsEditIndex(index);
                      setIsSelectedIndex(null);
                    }
                  }}
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
      <Pressable style={styles.addMoreView}>
        <AntDesign name="plus" size={15} color={Colors.lightBlue} />
        <Text style={styles.addMoreText}>Add More</Text>
      </Pressable>
      <View style={{alignItems: 'center'}}>
        <Button
          title={'Done'}
          style={styles.okBtn}
          textStyle={{fontSize: 14, letterSpacing: 0}}
          onPress={() => {
            setIsEditIndex(null);
            setIsSelectedIndex(null);
            navigation.navigate('Commissions');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default CommissionSettings;
