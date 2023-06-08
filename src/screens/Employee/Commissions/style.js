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
    paddingTop: scale(70),
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

  midContent: {
    backgroundColor: Colors.white,
    padding: 19,
    marginVertical: 10,
    borderRadius: 13,
  },

  tableContainer: {
    backgroundColor: Colors.white,
  },
  tableHead: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
  },
  headFirstCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    width: scale(130),
    marginRight: scale(40),
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    width: scale(130),
  },

  trashImage: {
    width: 21,
    height: 21,
    tintColor: Colors.darkGrey3,
  },

  bodyMain: {
    height: scale(45),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
    borderBottomColor: Colors.grey,
  },
  bodyContainer: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: Colors.white,
    height: scale(45),
    paddingLeft: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
