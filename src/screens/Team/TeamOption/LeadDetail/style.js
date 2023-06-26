import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../../../utils/colors';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
  },

  mainBg: {
    height: screenHeight,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  bg: {
    height: 190,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  headMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  menuImage: {width: 37, height: 37, marginRight: 10},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    color: Colors.white,
  },
  mainContainer: {
    backgroundColor: Colors.white,
    borderRadius: 17,
    paddingTop: 18,
    paddingBottom: 22,
    marginHorizontal: 20,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    color: Colors.lightBlue4,
    width: '80%',
    textAlign: 'center',
  },
  addView: {width: '15%', alignItems: 'flex-end'},
  subContent: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: scale(25),
    marginTop: 16,
  },
  emailContent: {flexDirection: 'row', width: '55%', alignItems: 'center'},
  emailText: {fontSize: 12, color: Colors.black, marginLeft: 12},
  phoneContent: {
    flexDirection: 'row',
    marginLeft: scale(12),
    alignItems: 'center',
  },
  processSubContent: {
    padding: scale(5),
    backgroundColor: Colors.white,
    borderRadius: scale(3),
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: scale(65),
  },
  processText: {fontSize: scale(10), color: Colors.black},
  processMain: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {borderBottomWidth: 2, borderBottomColor: Colors.grey1},
  btnContent: {
    flexDirection: 'row',
    padding: 22,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  mtoBtn: {
    backgroundColor: Colors.lightBlue,
    width: '60%',
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(10),
    borderRadius: scale(10),
  },
  mtoText: {
    fontSize: scale(12),
    textAlign: 'center',
  },
  niBtn: {
    backgroundColor: Colors.orange,
    width: '60%',
    paddingHorizontal: 0,
    marginBottom: scale(20),
    borderRadius: scale(10),
  },
  niText: {
    fontSize: 14,
    marginHorizontal: 0,
    letterSpacing: 0,
    color: Colors.white,
    textAlign: 'center',
  },
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
  warningImage: {width: 124, height: 124, resizeMode: 'contain'},
  modalText: {
    fontSize: scale(12),
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 30,
    width:'70%'
  },
  modalBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  okBtn: {
    backgroundColor: Colors.green,
    height: 48,
    borderRadius: 10,
    marginBottom: 50,
  },
});

export default styles;
