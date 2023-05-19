import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../utils/colors';

const FlagAmount = ({amount, ViewStyle}) => {
  return (
    <View style={[styles.midSubContent, ViewStyle]}>
      <Feather
        name="flag"
        size={20}
        color={Colors.lightBlue2}
        style={styles.flagIcon}
      />
      <Text style={styles.amount}>$ {amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  midSubContent: {
    borderRadius: 10,
    backgroundColor: 'rgba(41, 215, 223, 0.1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 30,
  },
  flagIcon: {
    marginRight: 8,
  },
  amount: {fontSize: 12, color: Colors.lightBlue2},
});

export default FlagAmount;
