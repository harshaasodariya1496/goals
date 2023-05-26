import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    backgroundColor: Colors.white,
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
  tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    marginVertical: 10, 
    marginHorizontal:20
  },
  tableHead: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  headFirstCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    width: 131,
    marginRight: 37,
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    marginRight: 45,
  },

  bodyMain: {
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    borderBottomColor: Colors.grey,
  },
});

export default styles;
