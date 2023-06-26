import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../utils/colors';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // marginBottom:50
  },
  bg: {
    height: (screenHeight / 10) * 2.5,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 70,
  },
  mainContainer: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 23,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  userImage: {width: 102, height: 102, resizeMode: 'contain'},
  changeBtnText: {
    color: Colors.lightBlue3,
    fontSize: 14,
    marginHorizontal: 20,
  },
  changeBtn: {
    borderColor: Colors.lightBlue3,
    borderRadius: 50,
    borderWidth: 2,
    height: 46,
  },
  removeBtnText: {
    color: Colors.darkGrey,
    fontSize: 14,
    marginVertical: 10,
    marginBottom: 0,
  },
  closeBtn: {position: 'absolute', top: 20, right: 20},
  btnList: {marginLeft: 25, marginTop: 35, marginBottom: 23},
  formContent: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 23,
  },
  saveBtn: {backgroundColor: Colors.green, height: 46, marginTop: 20},
  textInputMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Colors.lightBlue3,
    borderRadius: 5,
    marginBottom: 20,
    paddingRight: 10,
  },
  textInputStyle: {
    borderWidth: 0,
    borderColor: Colors.white,
    width: '90%',
    marginBottom: 0,
  },
  labelText: {color: Colors.black, fontSize: scale(14), marginBottom: 10},
  leaderboardMain: {
    borderWidth: 1,
    width: '100%',
    padding: 20,
    borderColor: Colors.darkGrey,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  leaderboardText: {
    color: Colors.black,
    fontSize: scale(18),
    fontWeight: '600',
    marginBottom: 5,
  },
  onText: {fontSize: scale(14), color: Colors.black},
  checkBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  checkBoxLabelText: {
    fontSize: scale(14),
    color: Colors.black,
    marginLeft: 5,
  },
  inviteTitle: {fontSize: scale(20), color: Colors.lightBlue4},
  inviteDesc: {
    fontSize: scale(14),
    color: Colors.lightBlue4,
    marginVertical: 15,
  },
  inviteUserImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  headerPart: {
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  headerText: {fontSize: scale(12), color: Colors.darkGrey2},
  bodyMain: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bodyNameText: {fontSize: scale(12), color: Colors.lightBlue4},
  rateMain: {
    width: '30%',
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionMain: {
    alignItems: 'flex-end',
    paddingRight: 30,
    marginVertical: 5,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  trashImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colors.darkGrey,
    marginLeft: 20,
  },
  addMoreView: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  addMoreText: {
    fontSize: 14,
    color: Colors.lightBlue4,
    fontFamily: 'Roboto',
    fontWeight: 400,
    marginLeft: 4,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    backgroundColor: Colors.grey1,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 20,
  },

  //notification

  cardMain: {
    backgroundColor: Colors.white,
    marginVertical: scale(10),
    padding: scale(14),
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 2.54,
    elevation: 2.5,
  },
  cardPress: {flexDirection: 'row', justifyContent: 'space-between'},
  cardTitle: {
    fontSize: scale(14),
    width: '70%',
    color: Colors.black,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: scale(15),
    marginVertical: scale(10),
  },
  innerText: {
    fontSize: scale(14),
    width: '60%',
    color: Colors.black,
  },
  switchStyle: {
    width: '25%',
    alignItems: 'center',
  },
});

export default styles;
