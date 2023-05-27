import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    backgroundColor: Colors.white,
  },
  
  bg: {
    height: (screenHeight / 100) * 18,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  menuImage: {
    width: 44,
    height: 44,
    marginRight: 10,
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
  headerContainer: {
    flexDirection: 'row',
    // paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    width: screenWidth - 140,
    justifyContent: 'center',
  },
  headerTitle: {fontSize: 32, color: Colors.white},
  headerSubTitle: {color: Colors.white, fontSize: 20},

  chatUserImage: {
    width: 48,
    height: 48,
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
  newBonusBtn: {
    marginTop: 50,
    height: 46,
    marginHorizontal: 20,
    backgroundColor: Colors.lightBlue2,
    borderRadius: 5,
  },
  mainListView: { 
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default styles;
