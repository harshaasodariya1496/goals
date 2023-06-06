import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 150,
  },
  headerTitle: {fontSize: scale(26), color: Colors.white, marginLeft: scale(8)},
  scrollStyle: {
    marginHorizontal: 20,
    height: 150,
  },
  bgContent: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: scale(22),

    marginBottom: 25,
  }, 
});

export default styles;
