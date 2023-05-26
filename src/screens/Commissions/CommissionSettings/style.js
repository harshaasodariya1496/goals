import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  menuImage: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 150,
  },

  trashImage: {
    width: 21,
    height: 21,
    marginRight: 10,
    tintColor: Colors.darkGrey,
  },
  headerTitle: {fontSize: 14, color: Colors.white, paddingBottom: 5},
  headerSubTitle: {color: Colors.white, fontSize: 12},

  tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    borderRadius: 13,
    marginHorizontal: 20,
  },
  tableHead: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    width: screenWidth - 50,
    paddingRight: 50,
  },
  headFirstCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    marginRight: 45,
    width: 190,
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    fontWeight: 300,
    marginRight: 10,
    width: 50,
  },

  trashImage: {
    width: 21,
    height: 21,
    tintColor: Colors.darkGrey3,
  },

  bodyMain: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    width: screenWidth - 50,
    paddingHorizontal: 22,
    paddingRight: 50,
    borderBottomColor: Colors.grey,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    marginVertical: 19,
    width: (screenWidth / 10) * 7.8,
  },
  addMoreView: {
    flexDirection: 'row',
    marginLeft: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addMoreText: {
    fontSize: 12,
    color: Colors.lightBlue,
    fontFamily: 'Roboto',
    fontWeight: 400,
    marginLeft: 4,
  },
  okBtn: {
    height: 48,
    borderRadius: 10,
    marginVertical: 50,
  },
  textInputStyle: {
    borderWidth: 2,
    borderColor: Colors.darkGrey,
    width: 60,
    height: 30,
    paddingHorizontal: 15,
    marginHorizontal: 0,
    marginBottom: 0,
    padding: 0,
    color: Colors.lightBlue,
    marginRight: 10,
    marginLeft: -10,
    fontSize: 14,
  },
});

export default styles;
