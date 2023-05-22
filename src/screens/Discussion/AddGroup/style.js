import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    backgroundColor: Colors.white,
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
  headerContainer: {
    flexDirection: 'row',
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 100, 
    justifyContent: 'center',
  },
  headerTitle: {fontSize: 32, color: Colors.white, paddingBottom: 5},
  headerSubTitle: {color: Colors.white, fontSize: 12},

  chatUserImage: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 50,
  },
  msgNotificationView: {
    backgroundColor: Colors.red,
    borderRadius: 8,
    height: 16,
    width: 16,
    alignItem: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  msgNotificationCount: {color: Colors.white, fontSize: 10},
  msgView: {flexDirection: 'row', justifyContent: 'space-between'},
  msgText: {
    color: Colors.darkGrey2,
    fontSize: 11,
    width: screenWidth - 200,
  },
  msgTime: {color: Colors.darkGrey2, fontSize: 10},
  msgUserName: {color: Colors.black, fontSize: 12},
  msgMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  msgContainer: {
    marginLeft: 15,
    width: screenWidth - 110,
    justifyContent: 'center',
  },
  backBg: {
    height: 51,
    width: 51,
    borderRadius: 25,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
});

export default styles;
