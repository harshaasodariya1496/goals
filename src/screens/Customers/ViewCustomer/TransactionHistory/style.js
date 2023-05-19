import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    paddingTop: 30,
  },
  tableHeader: {
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    height: 43,
    alignItems: 'center',
  },
  head: {
    width: screenWidth / 3,
    paddingStart: 20,
  },
  headText: {
    fontSize: 12,
  },
  tableBody: {
    flexDirection: 'row',
    height: 43,
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 12,
    color: Colors.lightBlue,
  },
});

export default styles;
