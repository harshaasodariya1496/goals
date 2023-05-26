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
  noBonusText: {fontSize: 20, color: Colors.white},
  newBonusBtn: {
    marginTop: 50,
    height: 46,
    marginHorizontal: 20,
    backgroundColor: Colors.lightBlue2,
    borderRadius: 5,
  },
  checkBoxStyle: {
    marginRight: 15,
    marginVertical: 30,
  },
  checkBoxTitle: {color: Colors.white, fontSize: 16},
  checkBoxMain: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
