import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {
  Center,
  Button as NativeButton,
  Pressable,
  Radio,
  Switch,
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import CheckBox from '@react-native-community/checkbox';
import {images} from '../../utils/images';
import {Colors} from '../../utils/colors'; 

import styles from './style';
import {scale, verticalScale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ProduceCommission = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [userList, setUserList] = useState([
    {
      name: 'sample product',
      rate: 45,
    },
    {
      name: 'product 1',
      rate: 12,
    },
    {
      name: 'product 2',
      rate: 12,
    },
    {
      name: 'product 3',
      rate: 12,
    },
    {
      name: 'product 4',
      rate: 92,
    },
    {
      name: 'product 5',
      rate: 52,
    },
    {
      name: 'product 6',
      rate: 12,
    },
  ]);

  return (
    <View style={[styles.formContent]}>
      <View style={{width: '100%'}}>
        <Text style={styles.inviteTitle}>Commission Settings</Text>
        <Text style={styles.inviteDesc}>
          Assign commission rates to your products and services.
        </Text>
        <View style={styles.headerPart}>
          <View style={{width: '70%'}}>
            <Text style={styles.headerText}>Services</Text>
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.headerText}>Rate</Text>
          </View>
        </View>
        <FlatList
          data={userList}
          nestedScrollEnabled={true} 
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={styles.bodyMain}>
                  <View style={{width: '70%'}}>
                    <Text style={styles.bodyNameText}>{item.name}</Text>
                  </View>
                  <View style={styles.rateMain}>
                    <Text style={styles.bodyNameText}>{item.rate + '%'}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        if (selectedIndex == index) {
                          setSelectedIndex(null);
                        } else {
                          setSelectedIndex(index);
                        }
                      }}>
                      <Entypo
                        name="dots-three-vertical"
                        size={scale(12)}
                        color={Colors.darkGrey}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {selectedIndex === index ? (
                  <View style={styles.optionMain}>
                    <View style={styles.actionContent}>
                      <TouchableOpacity>
                        <SimpleLineIcons
                          name="pencil"
                          size={20}
                          color={Colors.darkGrey}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image
                          source={images.trash}
                          style={styles.trashImage}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : null}
              </View>
            );
          }}
        />
        <TouchableOpacity style={styles.addMoreView}>
          <AntDesign name="plus" size={15} color={Colors.lightBlue4} />
          <Text style={styles.addMoreText}>Add More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProduceCommission;
