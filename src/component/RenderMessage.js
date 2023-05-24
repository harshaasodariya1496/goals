import moment from 'moment';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const RenderMessage = ({side, message}) => {
  if (side === 'right')
    return (
      <View style={styles.rightMain}>
        <Text style={styles.timeContent}>
          {moment(message.createdAt).format('HH:MM A')}
        </Text>
        <View style={styles.rightMsgContent}>
          <Text style={styles.rightMsgText}>{message.text}</Text>
        </View>
      </View>
    );
  else
    return (
      <View style={styles.leftMain}>
        <View style={styles.leftMsgContent}>
          <Text style={styles.leftMsgText}>{message.text}</Text>
        </View>
        <Text style={styles.timeContent}>
          {moment(message.createdAt).format('HH:MM A')}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  rightMain: {
    marginBottom: 20,
    marginRight: 36.91,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  timeContent: {color: Colors.black, fontSize: 10},
  rightMsgContent: {
    backgroundColor: Colors.lightBlue3,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    borderTopEndRadius: 0,
    maxWidth: (screenWidth / 10) * 6.5,
    flexDirection: 'row',
    marginLeft: 5,
  },
  rightMsgText: {color: Colors.white, fontSize: 14},
  leftMain: {
    marginBottom: 20,
    marginLeft: 36.91,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftMsgContent: {
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    maxWidth: (screenWidth / 10) * 6.5,
    flexDirection: 'row',
    marginRight: 5,
  },

  leftMsgText: {color: Colors.black, fontSize: 14},
});

export default RenderMessage;
