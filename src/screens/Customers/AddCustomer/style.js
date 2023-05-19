import {StyleSheet} from 'react-native'; 

import {Colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  midContent: {
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 14,
    color: Colors.black,
    height: 45,
    marginBottom: 10,
  },
  addMoreView: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addMoreText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'Roboto',
    fontWeight: 400,
    marginLeft: 4,
  },
});

export default styles;
