import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: 350,
  },
  fContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  totalTitle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: Colors.white,
  },
  totalAmt: {
    fontSize: 40,
    fontFamily: 'Roboto',
    color: Colors.white,
  },
  amtContent: {
    borderRadius: 35,
    backgroundColor: Colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    marginTop: 20,
  },
  midContent: {
    backgroundColor: Colors.white,
    padding: 19,
    marginVertical: 10,
    borderRadius: 13,
  },
  graphContent: {
    height: 170,
  },
  midFirstContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthTitle: {
    fontSize: 14,
    color: Colors.black,
  },
  monthAmt: {
    fontSize: 22,
    color: Colors.lightBlue,
    fontWeight: 300,
  },
  pipeTitle: {
    fontSize: 22,
    color: Colors.black,
  },
  pipeDetailTitle: {
    fontSize: 14,
    color: Colors.black,
  },
  pipeDetailAmount: {
    fontSize: 26,
    color: Colors.lightBlue,
    fontWeight: 300,
    marginVertical: 5,
    textAlign: 'center',
  },
  pipeMain: {
    marginVertical: 15,
    width: '50%',
    alignItems: 'center',
  },
  pipeSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  userDetailsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  detailsContent: {
    backgroundColor: '#F5F6FA',
    width: 90,
    // height: 90,
    padding: 5,
    paddingVertical: 16,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  userSubTitle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#525E6B',
    flexWrap: 'wrap',
    // marginBottom: 10,
  },
  userSubValue: {
    textAlign: 'center',
    fontSize: 14,
    color: '#222B2E',
    fontWeight: 300,
  },
  userImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  userTitle: {
    fontSize: 14,
    color: Colors.lightBlue,
    marginVertical: 10,
  },

  headMain: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headUser: {flexDirection: 'row', alignItems: 'center'},
  headUserImage: {
    width: 51,
    height: 51,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 25,
    marginRight: 15,
  },
  headUserText: {fontSize: 14, color: Colors.white},
  headLastContent: {flexDirection: 'row', alignItems: 'center'},
  discussionImage: {
    tintColor: Colors.white,
    height: 44,
    width: 44,
  },
  cardAmtText: {fontSize: 22, color: Colors.lightBlue3, fontWeight: 300},
  cardText: {fontSize: 14, color: Colors.black, marginTop: 10},
  cardFooterText: {fontSize: 14, color: Colors.black},
  btnList: {marginStart: 20, marginVertical: 10},
  tableContainer: {
    backgroundColor: Colors.white,
  },
  tableHead: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
  },
  headFirstCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    width: scale(130),
    marginRight: scale(40),
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    width: scale(130),
  },

  trashImage: {
    width: 21,
    height: 21,
    tintColor: Colors.darkGrey3,
  },

  bodyMain: {
    height: scale(45),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
    borderBottomColor: Colors.grey,
  },
  bodyContainer: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: Colors.white,
    height: scale(45),
    paddingLeft: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionContent: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 19,
    // min: (screenWidth / 10) * 7.8,
  },
});

export default styles;
