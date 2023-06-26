import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: scale(screenHeight / 2),
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 70,
  },
  totalTitle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: Colors.white,
  },
  totalAmt: {
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: '300',
    color: Colors.white,
  },
  amtContent: {
    borderRadius: 10,
    backgroundColor: Colors.lightSkyBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 37,
    marginTop: 20,
    paddingHorizontal: 25,
  },

  midContent: {
    backgroundColor: Colors.white,
    padding: 19,
    marginVertical: 10,
    borderRadius: 13,
  },
  tableAmt: {
    width: scale(60),
    fontSize: scale(12),
    color: Colors.black,
    textAlign: 'center',
  },
  monthText: {
    width: scale(70),
    fontSize: scale(12),
    color: Colors.lightBlue4,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    marginVertical: scale(10),
    marginHorizontal: scale(15),
  },
});

export default styles;
