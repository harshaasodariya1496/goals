import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: screenHeight,
    padding:24
  },
  
  input: {
    fontSize: 14,
    color: Colors.black,
    height: 46,
    marginBottom: 10,
  },
});

export default styles;
