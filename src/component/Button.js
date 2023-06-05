import {Button as NativeButton} from 'native-base';
import {Text, StyleSheet, Pressable} from 'react-native';

import {Colors} from '../utils/colors';
import { scale } from 'react-native-size-matters';

const Button = (
  {style, title, onPress, leftIcon, textStyle, type, icon},
  props,
) => {
  if (type === 'icon-label')
    return (
      <Pressable style={[styles.iconWithLabel, style]} onPress={onPress}>
        {icon}
        <Text
          style={[
            {color: Colors.black, fontSize: 14, marginLeft: 5},
            textStyle,
          ]}>
          {title}
        </Text>
      </Pressable>
    );
  if (type === 'icon')
    return (
      <Pressable onPress={onPress} {...props} style={style}>
        {icon}
      </Pressable>
    );
  if (type == 'small')
    return (
      <Pressable
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.btnView, style]}>
        <Text style={[styles.btnText, textStyle]}>{title}</Text>
      </Pressable>
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
    fontSize: scale(14),
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: 1,
    color: Colors.white,
    marginHorizontal: 20,
  },
  btnView: {
    backgroundColor: Colors.lightBlue3,
    height: 32,
    // width: 101,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  btnText: {color: Colors.white, fontSize: 12},
  iconWithLabel: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Button;
