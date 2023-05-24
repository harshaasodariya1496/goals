import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginBottom:50
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 23,
  },
  saveBtn: {backgroundColor: Colors.green, height: 46, marginTop: 20},
});

export default styles;
