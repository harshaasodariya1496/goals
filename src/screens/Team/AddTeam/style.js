import {StyleSheet} from 'react-native';

import { scale } from 'react-native-size-matters';
import {Colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  midContent: {
    paddingHorizontal: 25,
  },
  input: {
    fontSize: 14,
    color: Colors.black,
    height: 46,
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
  checkBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 0, 
  },
  checkBoxLabelText: {
    fontSize: scale(14),
    color: Colors.white,
    marginLeft: 5,
  },
  
  salaryUserName: {
    fontSize: scale(16),
    color: Colors.white, 
  },
});

export default styles;
