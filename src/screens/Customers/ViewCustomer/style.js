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
  footer: {
    height: (screenHeight / 100) * 9,
    backgroundColor: '#D6D8DC',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerImages: {height: 24, width: 24, resizeMode: 'contain'},
  footerMidView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerInput: {
    width: screenWidth - 170,
    height: 42,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    fontSize: 14,
    marginBottom: 0,
    borderRadius: 0,
  },
  footerEmoji: {
    paddingHorizontal: 10,
    height: 42,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
});

export default styles;
