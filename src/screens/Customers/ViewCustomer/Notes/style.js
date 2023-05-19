import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyView: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: Colors.darkGrey,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
});

export default styles;
