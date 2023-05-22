import {TextInput as RNTextInput, StyleSheet} from 'react-native';

const TextInput = props => {
  return (
    <RNTextInput
      {...props}
      placeholderTextColor={'#B0B8C5'}
      style={[
        styles.main,
        props.style,
        {
          borderWidth: props.isError ? 2 : 0,
          borderColor: props.isError ? 'red' : 'white',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    height: 56,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
});

export default TextInput;
