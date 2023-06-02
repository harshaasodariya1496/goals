import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

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
});

export default styles;
