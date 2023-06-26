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
import {Modal, Input} from 'native-base';
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
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const LeadDetail = ({navigation, route}) => {
  const details = route.params.details;
  const [modalVisible, setModalVisible] = useState(false);
  const [isConnectedModal, setIsConnetedModal] = useState(false);
  const [isConnected, setIsConneted] = useState(false);
  const [isOpportunity, setIsOpportunity] = useState(false);
  const [isProposal, setIsProposal] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

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
            <Text style={styles.menuTitle}>Leads</Text>
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
          {/* <View style={styles.divider} />

          <View style={styles.btnContent}>
            <Button
              title="Move to Opportunities"
              style={styles.mtoBtn}
              textStyle={styles.mtoText}
              onPress={() => {
                navigation.navigate('Opportunities', {details: details});
              }}
            />
            <Button
              title="Not Interested"
              style={styles.niBtn}
              textStyle={styles.niText}
              onPress={() => setModalVisible(true)}
            />
          </View> */}
        </View>
        <View style={styles.processMain}>
          <Pressable
            onPress={() => {
              setIsConnetedModal(true);
            }}
            style={[
              styles.processSubContent,
              {backgroundColor: isConnected ? Colors.green : Colors.white},
            ]}>
            <MaterialCommunityIcons
              name={'check'}
              color={isConnected ? Colors.white : Colors.grey1}
              size={scale(22)}
            />
            <Text
              style={[
                styles.processText,
                {color: isConnected ? Colors.white : Colors.black},
              ]}>
              Connected
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.processSubContent,
              {backgroundColor: isOpportunity ? Colors.green : Colors.white},
            ]}>
            <MaterialCommunityIcons
              name={'check'}
              color={isOpportunity ? Colors.white : Colors.grey1}
              size={scale(22)}
            />
            <Text
              style={[
                styles.processText,
                {color: isOpportunity ? Colors.white : Colors.black},
              ]}>
              Opportunity
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.processSubContent,
              {backgroundColor: isProposal ? Colors.green : Colors.white},
            ]}>
            <MaterialCommunityIcons
              name={'check'}
              color={isProposal ? Colors.white : Colors.grey1}
              size={scale(22)}
            />
            <Text
              style={[
                styles.processText,
                {color: isProposal ? Colors.white : Colors.black},
              ]}>
              Proposal
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.processSubContent,
              {backgroundColor: isClosed ? Colors.green : Colors.white},
            ]}>
            <MaterialCommunityIcons
              name={'check'}
              color={isClosed ? Colors.white : Colors.grey1}
              size={scale(22)}
            />
            <Text
              style={[
                styles.processText,
                {color: isClosed ? Colors.white : Colors.black},
              ]}>
              Closed
            </Text>
          </Pressable>
        </View>
        <TabSection
          onAddPress={() => {
            navigation.navigate('TeamActions');
          }}
        />
        <BgModal
          closeBtnStyle={{opacity: 0}}
          modalContainerStyle={{}}
          isOpen={isConnectedModal}
          onClose={setIsConnetedModal}>
          <View style={{width: screenWidth - 60}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.modalText}>
                You’ve connected with a prospect...
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                title="Move to Opportunities"
                style={styles.mtoBtn}
                textStyle={styles.mtoText}
                onPress={() => {
                  navigation.navigate('Opportunities', {details: details});
                }}
              />
              <Button
                title="Not Interested"
                style={styles.niBtn}
                textStyle={styles.niText}
                onPress={() => {
                  setIsConnetedModal(false);
                  setModalVisible(true);
                }}
              />
            </View>

            <TouchableOpacity
              style={{position: 'absolute', right: scale(0)}}
              onPress={() => setIsConnetedModal(false)}>
              <MaterialCommunityIcons
                size={24}
                color={Colors.lightBlue4}
                name={'close'}
              />
            </TouchableOpacity>
          </View>
        </BgModal>
        <BgModal isOpen={modalVisible} onClose={setModalVisible}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.modalText}>
              You’ve indicated the prospect is no longer interested. Please
              confirm.
            </Text>
            <View style={styles.modalBtnContainer}>
              <Button
                title={'Confirm'}
                style={styles.okBtn}
                textStyle={{fontSize: 14, letterSpacing: 0}}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('SalesDetail', {details: details});
                }}
              />
            </View>
          </View>
        </BgModal>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default LeadDetail;
