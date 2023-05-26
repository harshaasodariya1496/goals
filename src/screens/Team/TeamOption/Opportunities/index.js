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
import Dropdown from '../../../../component/DropDown';
import TextInput from '../../../../component/TextInput';
import SelectDropdown from 'react-native-select-dropdown';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Opportunities = ({navigation, route}) => {
  const details = route.params.details;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProposalModal, setIsProposalModal] = useState(false);
  const [isProposalTask, setIsProposalTask] = useState(false);
  const [detailsArr, setDetailsArr] = useState([{product: '', amt: ''}]);
  const [selectedValue, setSelectedValue] = useState('');
  const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
  ];
  const onAddItem = () => {
    let arr = detailsArr;
    arr.push({product: '', amt: ''});
    setDetailsArr([...arr]);
  };

  const onChangeItem = (field, index, value) => {
    let arr = detailsArr;
    arr[index][field] = value;
    setDetailsArr([...arr]);
  };
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
            <Text style={styles.menuTitle}>Opportunities</Text>
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
              title={
                isProposalTask ? 'Close the Sale' : 'Input Proposal Details'
              }
              style={styles.mtoBtn}
              textStyle={styles.mtoText}
              onPress={() => {
                setIsProposalModal(true);
              }}
            />
            <Button
              title="Not Interested"
              style={styles.niBtn}
              textStyle={styles.niText}
              onPress={() => {
                setIsModalVisible(true);
              }}
            />
          </View>
        </View>
        <TabSection
          onAddPress={() => {
            navigation.navigate('TeamActions');
          }}
        />
      </View>
      <BgModal isOpen={isModalVisible} onClose={setIsModalVisible}>
        <Text style={styles.modalText}>
          You’ve indicated the prospect is no longer interested. Please confirm.
        </Text>
        <View style={styles.modalBtnContainer}>
          <Button
            title={'Confirm'}
            style={styles.okBtn}
            textStyle={{fontSize: 14, letterSpacing: 0}}
            onPress={() => {
              setIsModalVisible(false);
              navigation.navigate('SalesDetail', {details: details});
            }}
          />
        </View>
      </BgModal>
      <BgModal isOpen={isProposalModal} onClose={setIsProposalModal}>
        <Text style={styles.modalText}>
          {isProposalTask
            ? 'Excellent, you’ve closed the sale! Confirm or edit details.'
            : 'You’ve delivered a proposal. Provide details.'}
        </Text>
        <View style={styles.modalBtnContainer}>
          <FlatList
            data={detailsArr}
            style={{ 
              maxHeight:
                400 < 58 * detailsArr?.length ? 270 : 58 * detailsArr?.length,
            }}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row'}} key={index}>
                  <Dropdown
                    data={data}
                    onSelect={selectedItem => {
                      onChangeItem('product', index, selectedItem);
                    }}
                    value={item.product}
                    placeHolder={'Product / Service'}
                    style={styles.dropDownStyle}
                    buttonTextStyle={{fontSize: 14}}
                    dropdownCustomStyle={{marginTop: -50}}
                  />

                  <TextInput
                    placeholder={'Amount'}
                    style={styles.amountInput}
                    value={item.amt}
                    onChangeText={e => {
                      onChangeItem('amt', index, e);
                    }}
                  />
                  <Pressable style={styles.addIconContent} onPress={onAddItem}>
                    <MaterialCommunityIcons
                      name={'plus'}
                      color={Colors.lightBlue4}
                      size={30}
                    />
                  </Pressable>
                </View>
              );
            }}
          />

          <Button
            title={'Done'}
            style={styles.okBtn}
            textStyle={{fontSize: 14, letterSpacing: 0}}
            onPress={() => {
              setIsProposalModal(false);
              if (isProposalTask === false) setIsProposalTask(true);
              else{
                navigation.navigate("SalesDetail",{details:details})
              }
            }}
          />
        </View>
      </BgModal>
    </KeyboardAvoidingScrollView>
  );
};

export default Opportunities;
