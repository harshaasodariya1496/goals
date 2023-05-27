import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyBg: {
    height: screenHeight,
  },
  menuImage: {width: 37, height: 37, marginRight: 20},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 400,
    color: Colors.white,
  },
  bonusImage: {
    height: 231,
    width: '90%',
    marginVertical: 48,
  },
  checkBoxMain: {flexDirection: 'row', alignItems: 'center'},
  labelText: {fontSize: 14, color: Colors.white, marginBottom: 10},
  inputStyle: {fontSize: 14, height: 43, marginBottom: 36},
  dateTouchStyle: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    marginBottom: 36,
    marginTop: 0,
  },
  datePicketText: {
    fontSize: 14,
    color: Colors.black,
    marginHorizontal: 10,
  },
  formMain: {marginHorizontal: 24, marginTop: 30},
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default styles;
