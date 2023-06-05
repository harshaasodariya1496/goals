import {StyleSheet, Dimensions} from 'react-native';

import { scale } from 'react-native-size-matters';
import {Colors} from '../../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg: {
    height: (screenHeight / 100) * 15,
  },
  trashImage: {
    width: 21,
    height: 21,
    marginRight: 10,
    tintColor: Colors.darkGrey,
  },
  labelText: {fontSize: scale(14), color: Colors.black, marginBottom: 5},
  valueText: {fontSize: 16, color: Colors.lightBlue},
});

export default styles;
