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
} from 'react-native';
import {useState} from 'react';
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

const IndividualPerformance = ({navigation, route}) => {
  return (
    <View style={styles.container} nestedScrollEnabled={true}>
      <ImageBackground style={styles.bg} source={images.bg}>
        <Header
          onBackPress={() => {
            navigation.goBack();
          }}
          title={'Individual Performance'}
          textStyle={{fontSize:scale(21)}}
        />
        <ScrollView style={styles.scrollStyle} nestedScrollEnabled={true}>
          <FlatList
            data={[0, 1, 2, 3, 4]}
            renderItem={({item, index}) => {
              return (
                <View style={styles.bgContent}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={images.user}
                      style={styles.userImage}
                    />
                    <Text
                      style={styles.userText}>
                      John User
                    </Text>
                    <View
                      style={styles.listContent}>
                      <View style={{width: '45%', marginBottom: 10}}>
                        <Text style={styles.listHead}>Monthly Sales</Text>
                        <Text style={styles.listValue}>
                          ${numberWithCommas(466000)}
                        </Text>
                      </View>
                      <View style={{width: '45%', marginBottom: 10}}>
                        <Text style={styles.listHead}>Monthly Goals</Text>
                        <Text style={styles.listValue}>
                          ${numberWithCommas(466000)}
                        </Text>
                      </View>
                      <View style={{width: '45%'}}>
                        <Text style={styles.listHead}>Sales Year-To-Date</Text>
                        <Text style={styles.listValue}>
                          ${numberWithCommas(466000)}
                        </Text>
                      </View>
                      <View style={{width: '45%'}}>
                        <Text style={styles.listHead}>ROI Year-To-Date</Text>
                        <Text style={styles.listValue}>1253.64%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default IndividualPerformance;
