import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  },
  menuImage: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  searchIconMain: {
    backgroundColor: Colors.white,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 150,
  },
  headerTitle: {fontSize: 14, color: Colors.white, paddingBottom: 5},
  headerSubTitle: {color: Colors.white, fontSize: 12},
  rightMain: {
    marginBottom: 20,
    marginRight: 36.91,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  timeContent: {color: Colors.black, fontSize: 10},
  rightMsgContent: {
    backgroundColor: Colors.lightBlue3,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    borderTopEndRadius: 0,
    maxWidth: (screenWidth / 10) * 6.5,
    flexDirection: 'row',
    marginLeft: 5,
  },
  rightMsgText: {color: Colors.white, fontSize: 14},
  leftMain: {
    marginBottom: 20,
    marginLeft: 36.91,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftMsgContent: {
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    maxWidth: (screenWidth / 10) * 6.5,
    flexDirection: 'row',
    marginRight: 5,
  leftMsgText: {color: Colors.black, fontSize: 14},
},
});

export default styles;
