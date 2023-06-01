import {
  View,
  ImageBackground,
  FlatList,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';
import BgModal from './BgModal';
import TextInput from './TextInput';
import {Colors} from '../utils/colors';
import moment from 'moment';
import Dropdown from './DropDown';
import {minSlot, timeDurationGap, timeGap} from '../utils/constant';
import {TextArea} from 'native-base';
import Button from './Button';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TaskModal = ({navigation, isOpen, onClose}) => {
  const [subject, setSubject] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(moment().format('MM/D/YYYY'));
  const [startTime, setStartTime] = useState('12:00am');
  const [gap, setGap] = useState(30);
  const [type, setType] = useState('Minutes');
  const [reminder, setReminder] = useState(false);
  const [note, setNote] = useState('');

  return (
    <BgModal isOpen={isOpen} onClose={onClose}>
      <KeyboardAvoidingView style={{height: screenHeight - 330}}>
        <Text
          style={{
            fontSize: 24,
            color: Colors.black,
            marginVertical: 25,
          }}>
          Schedule Task
        </Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.labelstyle}>Subject</Text>
          <TextInput
            value={subject}
            onChangeText={setSubject}
            placeholder={'My task'}
            placeholderTextColor={Colors.lightBlue4}
            style={styles.inputStyle}
          />
        </View>

        <View style={[styles.fieldContainer, {alignItems: 'flex-start'}]}>
          <Text style={styles.labelstyle}>Due Date</Text>
          <View
            style={{
              flexDirection: 'row',
              width: 270,
              flexWrap: 'wrap',
            }}>
            <TextInput
              inputType={'datePicker'}
              value={startDate}
              mode={'date'}
              onChangeText={setStartDate}
              placeholderTextColor={Colors.lightBlue4}
              style={[styles.inputStyle]}
              touchStyle={[styles.touchStyle, {marginBottom: 17}]}
              renderLeftIcon={
                <MaterialCommunityIcons
                  name="calendar-month-outline"
                  size={18}
                  color={Colors.lightBlue4}
                />
              }
            />
            <Dropdown
              data={minSlot}
              onSelect={(selectedItem, index) => {
                setStartTime(selectedItem);
              }}
              value={startTime}
              style={[
                styles.inputStyle,
                {width: 112, marginLeft: 11, fontSize: 14},
              ]}
              buttonTextStyle={styles.buttonTextStyle}
            />
            <Dropdown
              data={timeDurationGap}
              onSelect={(selectedItem, index) => {
                setGap(selectedItem);
              }}
              value={gap}
              style={[styles.inputStyle, {width: 70, fontSize: 14}]}
              buttonTextStyle={styles.buttonTextStyle}
            />
            <Dropdown
              data={timeGap}
              onSelect={(selectedItem, index) => {
                setType(selectedItem);
              }}
              value={type}
              style={[
                styles.inputStyle,
                {width: 112, marginLeft: 11, fontSize: 14},
              ]}
              buttonTextStyle={styles.buttonTextStyle}
            />
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.labelstyle}>Reminder</Text>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: reminder ? Colors.lightBlue4 : '#B7C1CC',
            }}>
            <Switch
              value={reminder}
              onValueChange={() => {
                setReminder(!reminder);
              }}
              thumbColor={Colors.white}
              trackColor={{false: '#B7C1CC', true: Colors.lightBlue4}}
            />
          </View>
        </View>
        <View style={[styles.fieldContainer, {alignItems: 'flex-start'}]}>
          <Text style={styles.labelstyle}>Notes</Text>
          <TextArea
            h={82}
            mb={15}
            w={'75%'}
            fontSize={14}
            value={note}
            onChangeText={setNote}
            borderColor={Colors.lightBlue4}
            borderWidth={2}
            style={{backgroundColor: Colors.white, color: Colors.lightBlue4}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            title={'Save'}
            style={styles.okBtn}
            textStyle={{fontSize: 14, letterSpacing: 0}}
            onPress={() => {
              onClose(false);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </BgModal>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,
    borderColor: Colors.lightBlue4,
    width: '75%',
    borderRadius: 5,
    height: 38,
    alignItems: 'center',
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 13,
  },
  labelstyle: {
    fontSize: 14,
    color: Colors.black,
    width: '25%',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonTextStyle: {fontSize: 18, margin: 0},
  touchStyle: {
    width: 130,
    height: 38,
    paddingLeft: 13,
    marginVertical: 0,
    marginBottom: 10,
  },
  okBtn: {
    backgroundColor: Colors.green,
    height: 48,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default TaskModal;
