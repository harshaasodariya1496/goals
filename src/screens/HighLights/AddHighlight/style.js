import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: screenHeight,
  },
  menuImage: {width: 37, height: 37, marginRight: 20},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 400,
    color: Colors.white,
    textAlign: 'center',
  },
  bonusImage: {
    height: 231,
    width: '90%',
    marginVertical: 48,
  },
  inputStyle: {fontSize: 14, height: 43, marginBottom: 36},

  formMain: {marginHorizontal: 40, marginTop: 30},
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 70,
  },
});

export default styles;
