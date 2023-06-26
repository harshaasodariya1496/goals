import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import {Colors} from '../../../../utils/colors';
import Table from '../../../../component/Table';
import {getBgColor, getColor} from '../../../../utils/constant';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../../../component/Button';
import {minSlot, timeDurationGap, timeGap} from '../../../../utils/constant';
import {scale} from 'react-native-size-matters';
import {useEffect, useState} from 'react';
import moment from 'moment';
import TextInput from '../../../../component/TextInput';
import Dropdown from '../../../../component/DropDown';
import {Switch, TextArea} from 'native-base';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Actions = ({navigation, onAddPress}) => {
  const [isDetail, setIsDetail] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [contactName, setContactName] = useState('');
  const [startDate, setStartDate] = useState(moment().format('MM/D/YYYY'));
  const [startTime, setStartTime] = useState('12:00am');
  const [gap, setGap] = useState(30);
  const [type, setType] = useState('Minutes');
  const [reminder, setReminder] = useState(false);
  const [note, setNote] = useState('');

  useEffect(() => {
    setIsDetail(false);
    setIsEdit(false);
  }, []);

  const tableData = [
    {
      task: 'Phone Call',
      date: '04/24/2023',
      time: '12:00 PM',
      subject: 'Meeting w/ Jack',
    },
    {
      task: 'Meeting',
      date: '04/23/2023',
      time: '02:00 PM - 03:00 PM',
      subject: 'Phone call w/ Joe',
    },
    {
      task: 'Task',
      date: '04/21/2023',
      time: '10:00 PM',
      subject: 'Finish 1st quarter sales deck',
    },
    {
      task: 'Meeting',
      date: '04/20/2023',
      time: '02:00 PM - 01:00 PM',
      subject: 'Customer service lunch',
    },
  ];

  return (
    <View style={{marginHorizontal: 20}}>
      {isEdit ? (
        <View style={styles.tableContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.labelstyle}>Subject</Text>
            <TextInput
              value={subject}
              onChangeText={setSubject}
              placeholder={'My phone call'}
              placeholderTextColor={Colors.lightBlue4}
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.labelstyle}>Call To</Text>
            <TextInput
              value={contactName}
              onChangeText={setContactName}
              placeholder={'Contact name'}
              placeholderTextColor={Colors.lightBlue4}
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.labelstyle}>Location</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder={'Contact phone number'}
              placeholderTextColor={Colors.lightBlue4}
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.labelstyle}>Start Time</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '73%',
                flexWrap: 'wrap',
              }}>
              <TextInput
                inputType={'datePicker'}
                value={startDate}
                mode={'date'}
                onChangeText={setStartDate}
                placeholderTextColor={Colors.lightBlue4}
                style={styles.inputStyle}
                touchStyle={[
                  styles.touchStyle,
                  {marginBottom: 17, marginRight: 10},
                ]}
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
                style={{
                  ...styles.inputStyle,
                  width: scale(100),
                }}
                buttonTextStyle={styles.buttonTextStyle}
              />
              <Dropdown
                data={timeDurationGap}
                onSelect={(selectedItem, index) => {
                  setGap(selectedItem);
                }}
                value={gap}
                style={{...styles.inputStyle, width: 80}}
                buttonTextStyle={styles.buttonTextStyle}
              />
              <Dropdown
                data={timeGap}
                onSelect={(selectedItem, index) => {
                  setType(selectedItem);
                }}
                value={type}
                style={{
                  ...styles.inputStyle,
                  width: 120,
                  marginLeft: 11,
                  marginRight: scale(10),
                }}
                buttonTextStyle={styles.buttonTextStyle}
              />
            </View>
          </View>
          <View style={[styles.fieldContainer]}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Button
              title={'Save'}
              style={styles.okBtn}
              textStyle={{fontSize: 14, letterSpacing: 0}}
              onPress={() => {
                setIsDetail(false);
                setIsEdit(false);
              }}
            />
          </View>
        </View>
      ) : isDetail ? (
        <View style={styles.tableContainer}>
          <View style={{marginVertical: 10}}>
            <Text style={styles.title}>Subject</Text>
            <Text style={styles.valueText}>Lisa Miller</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.title}>Call To</Text>
            <Text style={styles.valueText}>Jack Bower</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.title}>Phone</Text>
            <Text style={styles.valueText}>{'(763) 862-7509'}</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.title}>Start Time</Text>
            <Text style={styles.valueText}>
              04/24/23 @ 1:30 PM for 30 Minutes
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.title}>Reminder</Text>
            <Text style={styles.valueText}>Not Applicable</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.title}>Notes</Text>
            <Text style={styles.valueText}>Discuss closing deal</Text>
          </View>
          <Pressable
            onPress={() => {
              setIsEdit(true);
            }}
            style={{position: 'absolute', top: scale(20), right: scale(20)}}>
            <SimpleLineIcons
              name={'pencil'}
              color={Colors.darkGrey2}
              size={scale(16)}
            />
          </Pressable>
        </View>
      ) : (
        <View>
          <FlatList
            data={tableData}
            // style={styles.tableContainer}

            renderItem={({item, index}) => (
              <View style={[styles.bodyMain]} key={index}>
                <View style={[styles.headFirstCol, {flexWrap: 'wrap'}]}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: getColor(item.task),
                      paddingHorizontal: 10,
                      backgroundColor: getBgColor(item.task),
                      borderRadius: 5,
                      paddingVertical: 5,
                      marginRight: scale(20),
                    }}>
                    {item.task}
                  </Text>
                  <Text style={[styles.headSecCol]}>
                    {item.time + '  |  ' + item.date}
                  </Text>
                </View>
                <Pressable onPress={() => setIsDetail(true)}>
                  <Text
                    style={{
                      color: Colors.lightBlue,
                      fontSize: scale(18),
                      marginTop: scale(10),
                    }}>
                    {item.subject}
                  </Text>
                </Pressable>
              </View>
            )}
          />
          <View style={{flexDirection: 'row'}}>
            <Button
              type={'small'}
              title={`+ Action`}
              style={{
                backgroundColor: Colors.lightBlue4,
              }}
              textStyle={{
                color: Colors.white,
                fontSize: 13,
              }}
              onPress={onAddPress}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    borderRadius: 13,
    paddingHorizontal: 20,
  },
  title: {fontSize: 12, fontWeight: 700, color: Colors.black},
  valueText: {
    fontSize: 14,
    fontWeight: 400,
    color: Colors.lightBlue4,
    marginTop: 8,
  },
  headFirstCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headSecCol: {
    fontSize: scale(11),
    color: Colors.black,
  },

  bodyMain: {
    backgroundColor: Colors.white,
    borderRadius: scale(10),
    padding: scale(20),
    marginBottom: scale(17),
  },
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
    marginVertical: 8,
  },
  buttonTextStyle: {fontSize: scale(12), color: Colors.lightBlue4},

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
