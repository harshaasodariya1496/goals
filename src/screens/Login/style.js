import {StyleSheet} from 'react-native'; 
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
    marginTop:106
  },
  logoImage: {width: 155, height: 100},
  mainContainer: {
    paddingHorizontal: 30,
    marginTop: 100,
    marginBottom: 50,
  },
  buttonView: {
    alignItems: 'center',
  }, 
  loginText: {
    fontSize: scale(14),
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: 2,
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
});

export default styles;
