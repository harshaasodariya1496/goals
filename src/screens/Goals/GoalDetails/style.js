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

  menuImage: {
    width: 51,
    height: 51,
    marginRight: 10,
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
  salesText: {fontSize: scale(16), color: Colors.darkGrey2},
  annualSalesText: {
    fontSize: scale(18),
    color: Colors.black,
    marginBottom: 5,
  },
  subSalesText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subSalesContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amtText: {
    fontSize: scale(18),
    color: Colors.black,
  },
  percentageContent: {
    backgroundColor: 'rgba(255,0,0,0.1)',
    paddingVertical: 8,
    marginLeft: 10,
    borderRadius: 8,
  },
  percentageText: {
    fontSize: scale(13),
    color: Colors.red,
    marginHorizontal: 15,
  },
  textInputStyle: {
    borderColor: Colors.darkGrey,
    borderWidth: 1,
    padding: 5,
    height: scale(30),
    paddingLeft: 10,
    width: '90%',
    marginVertical: 8,
    color: Colors.black,
  },
  textInputLabel: {
    fontSize: scale(16),
    color: Colors.black,
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  actualAmtText: {
    color: Colors.black,
    fontSize: scale(14),
    marginLeft: 10,
    marginVertical: 8,
  },
});

export default styles;
