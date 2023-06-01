import {StyleSheet} from 'react-native';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: 564,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 70,
  },
  totalTitle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: Colors.white,
  },
  totalAmt: {
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: 300,
    color: Colors.white,
  },
  amtContent: {
    borderRadius: 10,
    backgroundColor: Colors.lightSkyBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 37,
    marginTop: 20,
    paddingHorizontal: 25,
  },

  midContent: {
    backgroundColor: Colors.white,
    padding: 19,
    marginVertical: 10,
    borderRadius: 13,
  },

  userImage: {
    width: 81,
    height: 85,
    borderRadius: 65,
  },
  userTitle: {
    fontSize: 20,
    color: Colors.black,
    marginVertical: 10,
  },
  amt: {
    fontSize: 22,
    color: Colors.lightBlue3,
    fontWeight: 300,
    marginTop: 30,
  },

  graphContent: {
    height: 170,
    width: '100%',
  },
});

export default styles;
