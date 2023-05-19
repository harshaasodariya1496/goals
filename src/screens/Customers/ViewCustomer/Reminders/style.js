import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  reminderImage: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
    marginRight: 5,
  },
  reminderDateContent: {
    height: 45,
    backgroundColor: Colors.lightSkyBlue,
    paddingHorizontal: 19,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  detailContent: {
    backgroundColor: Colors.lightBlue3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 19,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  detailText: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 20,
    paddingRight: 35,
  },
});

export default styles;
