import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 29,
    paddingVertical: 30,
    flexDirection: 'row',
  },
  mainLogo: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {width: 155, height: 100},
  mainContainer: {
    paddingHorizontal: 30,
    marginVertical: 40,
  },
  redOption: {
    borderRadius: 5,
    backgroundColor: 'red',
    width: 10,
    height: 10,
    position: 'absolute',
    right: 0,
    top: 3,
  },
  bellIcon: {
    width: 25,
    height: 30,
    resizeMode: 'contain',
  },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: scale(40),
  },
  menuImage: {width: 30, height: 30, marginRight: 25},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 19,
    fontWeight: 400,
    color: Colors.white,
  },
  closeBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.lightBlue,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    shadowColor: Colors.lightBlue2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 10,
  },
});

export default styles;
