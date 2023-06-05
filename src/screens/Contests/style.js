import {Dimensions, StyleSheet} from 'react-native';

import { scale } from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: 358,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
   
  emptyBg: {
    height: screenHeight,
    alignItems: 'center',
    paddingTop: 108,
  },
  menuImage: {width: 37, height: 37, marginRight: 10},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    color: Colors.white,
  },

  menuImage1: {width: 44, height: 44, marginRight: 10},
  menuTitle1: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 400,
    color: Colors.white,
  },
  userTitle: {
    fontSize: 32,
    color: Colors.black,
    marginVertical: 10,
    textAlign: 'center',
  },
  dateText: {fontSize: 20, color: Colors.black},

  midContent: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 13,
    width: screenWidth - 40,
    marginRight: 100,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBonusImage: {
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
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerImageContent: {flexDirection: 'row', alignItems: 'center'},
  firstContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7F6FF',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 40,
  },
  timerText: {
    fontSize: 31,
    color: Colors.lightBlue4,
    marginLeft: 7,
  },
  firstDescription: {fontSize: 20, color: Colors.black, textAlign: 'center'},
  rankText: {color: Colors.lightBlue4, fontSize: 22.3, marginLeft: 5},
  cardUserImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  cardUserName: {fontSize: 24, color: Colors.black},
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  bookingText: {fontSize: 35, color: Colors.green},
  bookingTitle:{fontSize: scale(14), color: Colors.placeHolderColor}
});

export default styles;
