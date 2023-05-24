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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TeamDetails = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('Pending 5');
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
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
      <View style={{top: -90}}>
        <View style={styles.midContent}>
          <Text style={styles.cardAmtText}>$1,500,000</Text>
          <Text style={styles.cardText}>Annual Sales Goal</Text>
          <View style={styles.graphContent}></View>
          <Text style={styles.cardFooterText}>Sales Year To Date</Text>
        </View>
        <View style={styles.midContent}>
          <Text style={styles.cardAmtText}>$1,500,000</Text>
          <Text style={styles.cardText}>Monthly Sales Goal</Text>
          <View style={styles.graphContent}></View>
          <Text style={styles.cardFooterText}>Sales This Month</Text>
        </View>
        <View style={styles.midContent}>
          <Text style={styles.cardAmtText}>$1,500,000</Text>
          <Text style={styles.cardText}>Annual Commision Goal</Text>
          <View style={styles.graphContent}></View>
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

        <View style={styles.tabelContainer}>
          <View
            style={{
              marginLeft: 20,
            }}>
            <FlatList
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
              ListHeaderComponent={() => (
                <View style={styles.tabelHead}>
                  <Text style={styles.headFirstCol}>Company</Text>
                  <Text style={styles.headSecCol}>Deal size</Text>
                </View>
              )}
              renderItem={({item, index}) => (
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
                    <Text
                      style={[styles.headFirstCol, {color: Colors.lightBlue}]}>
                      {item.company}
                    </Text>
                    <Text
                      style={[styles.headSecCol, {color: Colors.lightBlue}]}>
                      ${item.dealSize}
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
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TeamDetails;
