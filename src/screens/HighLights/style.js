import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../utils/colors';
import { scale } from 'react-native-size-matters';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: 358,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  emptyBg: {
    height: screenHeight,
    alignItems: 'center',
    paddingTop: 108,
  },
  menuImage: {width: 37, height: 37, marginRight: 10},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    color: Colors.white,
  },
  menuImage1: {width: 44, height: 44, marginRight: 10},
  menuTitle1: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 400,
    color: Colors.white,
  },

  midContent: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 13,
    width: '100%',
    // marginRight: 100,
    paddingVertical: 22,
    paddingHorizontal: scale(25),
    justifyContent: 'center',
  },
  noBonusImage: {
    height: 231,
    width: '90%',
    marginVertical: 48,
  },
  noBonusText: {fontSize: 20, color: Colors.white},
  newBonusBtn: {
    marginTop: 50,
    height: 46,
    marginHorizontal: 20,
    backgroundColor: Colors.lightBlue2,
    borderRadius: 5,
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerImageContent: {flexDirection: 'row', alignItems: 'center'},
  cardUserImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cardUserName: {
    fontSize: 14,
    color: Colors.darkGrey3,
    paddingRight: 10,
  },
  timeText: {
    fontSize: 12,
    color: Colors.darkGrey3,
    marginTop:5
  },
  highlightImage: {
    width: '100%',
    height: 132,
    resizeMode: 'contain',
    marginVertical: 16,
    borderRadius: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.black,
    marginTop:16
  },
  firstContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  likeCommentContent: {
    flexDirection: 'row',
    marginTop: 18,
    alignItems: 'center',
  },
  likeContent: {flexDirection: 'row', width: 100, alignItems: 'center'},
  likeText: {marginLeft: 8, color: Colors.darkGrey3},
  commentContent: {flexDirection: 'row', marginLeft: 8, alignItems: 'center'},
});

export default styles;
