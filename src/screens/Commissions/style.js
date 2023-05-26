import {StyleSheet} from 'react-native';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: 358,
    paddingHorizontal: 20,  
    paddingTop: 40,
  },
  menuImage: {width: 37, height: 37, marginRight: 10},
  menuTitle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    color: Colors.white,
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
    height: 130,
    borderWidth: 0.5,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
