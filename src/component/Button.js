import {Button as NativeButton} from 'native-base';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '../utils/colors';

const Button = ({style, title, onPress, leftIcon, textStyle, type}, props) => {
  if (type == 'small')
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.btnView, style]}>
        <Text style={[styles.btnText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  return (
    <NativeButton
      mode="elevated"
      style={[styles.loginButton, style]}
      onPress={onPress}
      leftIcon={leftIcon}
      {...props}>
      <Text style={[styles.loginText, textStyle]}>{title}</Text>
    </NativeButton>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    height: 56,
    borderRadius: 5,
    backgroundColor: Colors.lightBlue2,
  },
  loginText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: 1,
    color: Colors.white,
    marginHorizontal: 20,
  },
  btnView: {
    backgroundColor: Colors.lightBlue3,
    height: 32,
    width: 101,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {color: Colors.white, fontSize: 12},
});

export default Button;
