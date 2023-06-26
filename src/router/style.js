import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../utils/colors';

const styles = StyleSheet.create({
  tabIcon: {
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain',
    tintColor: '#27A8F0',
  },
  tabHomeIcon: {
    width: scale(55),
    height: scale(55),
    resizeMode: 'contain',
    // top:(-25)
  },
  tabbarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: scale(11),
    color: Colors.lightBlue3,
  },
});

export default styles;
