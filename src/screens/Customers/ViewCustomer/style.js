import {StatusBar, StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg: {
    height: (screenHeight / 100) * 15,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  tabItem: {
    width: screenWidth / 3,
    padding: 16,
    alignItems: 'center',
    borderBottomColor: Colors.lightBlue,
    height: 55,
  },
  tabTitle: {
    fontSize: 12,
    width: screenWidth / 3,
    textAlign: 'center',
  },
  trashImage: {
    width: 21,
    height: 21,
    marginRight: 10,
    tintColor: Colors.darkGrey,
  },
});

export default styles;
