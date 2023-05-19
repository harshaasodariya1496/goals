import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../utils/colors';

const Header = ({
  navigation,
  onMenuPress,
  isOption,
  title,
  onBackPress,
  textStyle,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: isOption ? 'space-between' : '',
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      <View style={[styles.header, {paddingHorizontal: isOption ? 0 : 15}]}>
        <TouchableOpacity style={styles.backBg} onPress={onBackPress}>
          <AntDesign name="left" size={20} color={Colors.white} />
        </TouchableOpacity>
        <Text style={[styles.headerText, textStyle]}>{title}</Text>
      </View>
      {isOption && (
        <TouchableOpacity onPress={onMenuPress}>
          <AntDesign name="ellipsis1" size={20} color={Colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  backBg: {
    height: 51,
    width: 51,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  headerText: {
    fontSize: 28,
    color: Colors.white,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    letterSpacing: 0.5,
  },
});
export default Header;
