import {View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {Modal} from 'native-base';

import {Colors} from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const BgModal = props => {
  return (
    <Modal
      {...props}
      style={[
        {
          backgroundColor: 'rgba(0,0,0,0.8)',
          justifyContent: 'flex-start',
          paddingVertical: 100,
        },
        props.style,
      ]}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBg} />
        <View style={{marginHorizontal: 20}}>{props.children}</View>
      </View>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => props.onClose(false)}>
        <MaterialCommunityIcons size={24} color={Colors.white} name={'close'} />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBg: {
    backgroundColor: Colors.lightBlue4,
    height: 15,
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  modalContainer: {
    backgroundColor: Colors.white,
    width: screenWidth - 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 31,
  },
  modalBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  okBtn: {
    backgroundColor: Colors.green,
    height: 48,
    marginRight: 20,
    borderRadius: 10,
  },
  closeBtn: {
    position: 'absolute',
    top: (screenHeight / 10) * 0.8,
    right: (screenWidth / 10) * 0.5,
  },
});
export default BgModal;
