import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  },
  menuImage: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  searchIconMain: {
    backgroundColor: Colors.white,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
  footerMidView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  footerImages: {height: 24, width: 24, resizeMode: 'contain'},

  footerInput: {
    width: screenWidth - 135,
    height: 42,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    fontSize: 14,
    borderRadius: 0,
    backgroundColor: Colors.white,
    paddingLeft: 15,
  },
  footerEmoji: {
    paddingHorizontal: 10,
    height: 42,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    width: screenWidth - 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 31,
  },
  warningImage: {width: 124, height: 124, resizeMode: 'contain'},
  modalText: {
    fontSize: 20,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 700,
  },
  modalBtnContainer: {
    flexDirection: 'row',
    width: screenWidth - 81,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okBtn: {
    backgroundColor: Colors.green,
    height: 48,
    width: (screenWidth - 150) / 2,
    marginRight: 20,
    borderRadius: 10,
  },
  cancelBtn: {
    backgroundColor: Colors.white,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    width: (screenWidth - 150) / 2,
    borderRadius: 10,
  },
  closeBtn: {
    position: 'absolute',
    top: (screenHeight / 10) * 0.8,
    right: (screenWidth / 10) * 0.5,
  },

  searchIconMain: {
    backgroundColor: Colors.white,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchContainer: {marginTop: 70, marginHorizontal: 25},
  searchHead: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchHeadText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: 700,
    color: Colors.black,
  },
  searchBar: {
    backgroundColor: Colors.white,
    height: 50,
    fontSize: 18,
    marginVertical: 35,
    paddingHorizontal: 1,
    paddingVertical: 3,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
  },
});

export default styles;
