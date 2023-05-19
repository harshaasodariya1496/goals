import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
  },
  menuImage: {width: 37, height: 37, marginRight: 10},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    color: Colors.white,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#1E384B',
    fontFamily: 'SofiaPro-Medium',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#1E384B',
    fontFamily: 'SofiaPro-Medium',
  },
  containerStyle: {
    fontSize: 16,
    color: '#1E384B',
    fontFamily: 'SofiaPro-Medium',
    height: 150,
    width: 150,
    backgroundColor: Colors.white,
  },
  dropdown: {
    borderColor: '#253746',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: Colors.white,
    width: 150,
  },
  itemStyle: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  itemText: {
    color: Colors.lightBlue,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  searchIconMain: {
    backgroundColor: Colors.white, 
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default styles;
