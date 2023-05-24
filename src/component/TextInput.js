import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput as RNTextInput,
} from 'react-native';
import moment from 'moment';
import {useState} from 'react';
import {Input} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TextInput = props => {
  const [isVisible, setIsVisible] = useState(false);
  if (props.inputType == 'with-label')
    return (
      <View style={{marginVertical: 10}}>
        <Input
          {...props}
          h={46}
          w={(screenWidth / 10) * 7.5 || width}
          borderColor={props.isError ? Colors.red : Colors.lightBlue4}
          focusOutlineColor={props.isError ? Colors.red : Colors.lightBlue4}
          borderWidth={2}
          style={[styles.inputStyle, props.style]}
          fontSize={16}
        />
        {props.label ? (
          <Text
            style={[
              styles.labelStyle,
              {color: props.isError ? Colors.red : Colors.lightBlue4},
            ]}>
            {props.label}
          </Text>
        ) : null}
      </View>
    );
  if (props.inputType === 'datePicker')
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}
          style={[
            styles.dateContainer,
            {
              borderColor: props.isError ? Colors.red : Colors.lightBlue4,
            },
          ]}>
          <MaterialCommunityIcons
            name={'calendar-blank'}
            size={18}
            color={props.isError ? Colors.red : Colors.lightBlue4}
          />
          <Text
            style={[
              styles.dateLabel,
              {color: props.isError ? Colors.red : Colors.lightBlue4},
            ]}>
            {props.value}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isVisible}
          mode={props.mode ? props.mode : 'datetime'}
          onConfirm={date => {
            setIsVisible(false);
            props.onChangeText(moment(date).format('D/MM/YYYY'));
          }}
          onCancel={() => {
            setIsVisible(false);
          }}
        />
      </View>
    );
  else
    return (
      <RNTextInput
        {...props}
        placeholderTextColor={Colors.placeHolderColor}
        style={[
          styles.main,
          props.style,
          {
            borderWidth: props.isError ? 2 : 0,
            borderColor: props.isError ? Colors.red : 'white',
          },
        ]}
      />
    );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    height: 56,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  inputStyle: {
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
  },
  labelStyle: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    color: Colors.lightBlue4,
    fontSize: 12,
  },
  dateContainer: {
    borderWidth: 2,
    borderColor: Colors.lightBlue4,
    width: (screenWidth / 10) * 7.5,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 15,
    height: 46,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  dateLabel: {
    color: Colors.lightBlue4,
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default TextInput;
