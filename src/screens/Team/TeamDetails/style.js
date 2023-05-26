import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: (screenHeight / 10) * 5,
  },
  fContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  graphContent: {
    height: 130,
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
  btnList: {marginStart: 20, marginVertical: 10 },
  tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    borderRadius: 13,
    paddingHorizontal: 20,
    marginHorizontal:20
  },
  // tableHead: {
  //   backgroundColor: Colors.grey,
  //   borderRadius: 5,
  //   borderTopRightRadius: 0,
  //   borderBottomRightRadius: 0,
  //   height: 53,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 22,
  // },
  tableHead: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22, 
  },
  headFirstCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    width: 130,
    marginRight:45
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    width: 130,
  },

  trashImage: {
    width: 21,
    height: 21,
    tintColor: Colors.darkGrey3,
  },
  
  bodyMain: {
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
    borderBottomColor: Colors.grey,
  },
  bodyContainer: {
    width: (screenWidth / 10) * 7.3,
  },
  optionContent: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 19,
    width: (screenWidth / 10) * 7.8,
  },
});

export default styles;
