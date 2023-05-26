import {Dimensions, StyleSheet} from 'react-native';

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

  midContent: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 13,
    width: screenWidth - 60,
    marginRight: 100,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userTitle: {
    fontSize: 32,
    color: Colors.black,
    marginVertical: 10,
    textAlign: 'center',
  },
  amt: {
    fontSize: 22,
    color: Colors.lightBlue3,
    fontWeight: 300,
    marginTop: 30,
  },

  graphContent: {
    height: 130,
    borderWidth: 0.5,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {fontSize: 20, color: Colors.black},
  midView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E9F9ED',
    height: 60,
    justifyContent: 'center',
    marginVertical: 30,
  },
  bonusImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: Colors.green,
    marginRight: 15,
  },
  bonusText: {color: Colors.green, fontSize: 36, fontWeight: 300},
  progressMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  progressType: {fontSize: 18, color: Colors.darkGrey},
  progressText: {fontSize: 18, color: Colors.green, fontWeight: 300},
  slashText: {color: Colors.darkGrey},
  allProgressText: {color: Colors.lightBlue},
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
});

export default styles;
