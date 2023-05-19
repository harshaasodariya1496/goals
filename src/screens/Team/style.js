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
  midContent: {
    backgroundColor: Colors.white,
    padding: 19,
    marginVertical: 10,
    borderRadius: 13,
    alignItems: 'center',
  },
  userImage: {
    width: 81,
    height: 85,
    borderRadius: 65,
  },
  userTitle: {
    fontSize: 22,
    color: Colors.black,
  },
  box: {height: 83, width: screenWidth / 3, marginBottom: 20},
  boxMain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  roiText: {
    fontSize: 14,
    color: Colors.black,
    marginBottom: 5,
  },
  roiValue: {
    fontSize: 22,
    color: Colors.lightBlue,
    fontWeight: 300,
  },
  salesTitle: {
    fontSize: 14,
    color: Colors.black,
    
  },
  salesValue: {
    fontSize: 22,
    color: Colors.lightBlue,
    fontWeight: 300,
    marginVertical: 5,
  },
  flagView: {
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
    justifyContent: 'flex-start',
  },
});

export default styles;
