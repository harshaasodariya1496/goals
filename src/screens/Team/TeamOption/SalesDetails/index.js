import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import {Icon, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';
import Table from '../../../../component/Table';

import styles from './style';
import Button from '../../../../component/Button';
import TabSection from '../TabSection';
import BgModal from '../../../../component/BgModal';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const SalesDetail = ({navigation, route}) => {
  const details = route.params.details;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingScrollView
      style={styles.container}
      nestedScrollEnabled={true}>
      <ImageBackground style={styles.bg} source={images.background}>
        <View style={styles.headMain}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={images.customers}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuTitle}>Customers</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AddLead')}>
            <Ionicons
              name="add-circle-outline"
              size={30}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{top: -70}}>
        <View style={styles.mainContainer}>
          <View style={styles.titleSection}>
            <Text style={styles.titleText}>{details?.company}</Text>
            <Pressable style={styles.addView}>
              <MaterialCommunityIcons
                name="dots-vertical"
                color={Colors.black}
                size={26}
              />
            </Pressable>
          </View>

          <View style={styles.subContent}>
            <View style={styles.emailContent}>
              <MaterialCommunityIcons
                name={'email-outline'}
                color={Colors.lightBlue4}
                size={20}
              />
              <Text style={styles.emailText}>{details.email}</Text>
            </View>
            <View style={styles.phoneContent}>
              <MaterialCommunityIcons
                name={'phone'}
                color={Colors.lightBlue4}
                size={20}
              />
              <Text style={styles.emailText}>{details.phone}</Text>
            </View>
          </View>
          <View style={styles.divider} />

          <View style={styles.btnContent}>
            <Button
              title="New Opportunity"
              style={styles.mtoBtn}
              textStyle={styles.mtoText}
              onPress={()=>{setModalVisible(true)}}
            /> 
          </View>
        </View> 
        <TabSection
          onAddPress={() => {
            navigation.navigate('TeamActions');
          }}
        />
      </View>
      <BgModal isOpen={modalVisible} onClose={setModalVisible}>
        <View>
          <Text style={styles.modalText}>
          Please confirm a new opportunity has surfaced 
with American Express.
          </Text>
          <View style={styles.modalBtnContainer}>
            <Button
              title={'Confirm'}
              style={styles.okBtn}
              textStyle={{fontSize: 14, letterSpacing: 0}}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('LeadDetail',{details:details});
              }}
            />
          </View>
        </View>
      </BgModal>
    </KeyboardAvoidingScrollView>
  );
};

export default SalesDetail;
