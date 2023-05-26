import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../../../utils/colors';

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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 37,
    marginVertical: 16,
  },
  emailContent: {flexDirection: 'row', width: '50%'},
  emailText: {fontSize: 12, color: Colors.black, marginLeft: 12},
  phoneContent: {
    flexDirection: 'row',
    paddingLeft: 12,
    width: '50%',
  },
  divider: {borderBottomWidth: 2, borderBottomColor: Colors.grey1},
  btnContent: {
    flexDirection: 'row',
    padding: 22,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  mtoBtn: {
    backgroundColor: Colors.green,
    width: '50%',
    paddingHorizontal: 0,
  },
  mtoText: {
    fontSize: 14,
    marginHorizontal: 0,
    letterSpacing: 0,
    textAlign: 'center',
  },
  niBtn: {
    backgroundColor: '#E2E9EF',
    width: '45%',
    paddingHorizontal: 0,
  },
  niText: {
    fontSize: 14,
    marginHorizontal: 0,
    letterSpacing: 0,
    color: Colors.black,
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
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 30,
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
    marginBottom:50
  },  
});

export default styles;
