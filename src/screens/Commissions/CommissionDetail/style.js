import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  headerSubTitle: {color: Colors.white, fontSize: 12,},
  
   tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    borderRadius: 13,
    paddingHorizontal: 20,
    marginHorizontal:20
  }, 
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
    fontWeight:300
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
