import {
  View,
  Text, 
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Popover} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../utils/colors';

const Header = ({
  navigation,
  onMenuPress,
  isOption,
  title,
  onBackPress,
  textStyle,
  popOverOption,
  isPopOver,
  onTitlePress,
  firstIcon,
  secondIcon,
  firstTitle,
  secondTitle,
  firstOnPress,
  secondOnPress,
  customTitle,
}) => {
  const [isVisible, setIsVisible] = useState('');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: isOption || isPopOver ? 'space-between' : 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      <View style={[styles.header]}>
        <TouchableOpacity style={styles.backBg} onPress={onBackPress}>
          <AntDesign name="left" size={20} color={Colors.white} />
        </TouchableOpacity>
        {customTitle
          ? customTitle
          : title && (
              <Pressable onPress={onTitlePress}>
                <Text style={[styles.headerText, textStyle]}>{title}</Text>
              </Pressable>
            )}
      </View>
      {isPopOver && (
        <Popover
          isOpen={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
          trigger={triggerProps => {
            return (
              <TouchableOpacity
                {...triggerProps}
                onPress={() => {
                  setIsVisible(true);
                }}>
                <AntDesign name="ellipsis1" size={20} color={Colors.white} />
              </TouchableOpacity>
            );
          }}>
          <Popover.Content w="32" style={styles.popOverView}>
            <TouchableOpacity
              style={styles.touchView}
              onPress={() => {
                firstOnPress();
                setIsVisible(false);
              }}>
              {firstIcon()}
              <Text style={styles.popOverText}>{firstTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchView}
              onPress={() => {
                secondOnPress();
                setIsVisible(false);
              }}>
              {secondIcon()}
              <Text style={styles.popOverText}>{secondTitle}</Text>
            </TouchableOpacity>
          </Popover.Content>
        </Popover>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBg: {
    height: 51,
    width: 51,
    borderRadius: 25,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  popOverView: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    justifyContent: 'center',
    alignItem: 'center',
    right: 30,
    padding: 10,
    paddingHorizontal: 5,
  },
  touchView: {
    flexDirection: 'row',
    jusifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  popOverText: {fontSize: 14, color: Colors.black},
  headerText: {
    fontSize: 28,
    color: Colors.white,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    letterSpacing: 0.5,
  },
});
export default Header;
