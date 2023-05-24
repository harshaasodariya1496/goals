import {StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';

import {Colors} from '../utils/colors';

const Dropdown = (
  {style, data, placeHolder, value, onSelect, buttonTextStyle},
  props,
) => {
  return (
    <SelectDropdown
      {...props}
      data={data}
      onSelect={onSelect}
      defaultButtonText={placeHolder}
      defaultValue={value}
      renderDropdownIcon={() => {
        return (
          <Ionicons name="chevron-down-outline" size={20} color={'#2376C4'} />
        );
      }}
      dropdownStyle={styles.dropdownStyle}
      selectedRowTextStyle={{color: Colors.lightBlue4}}
      buttonTextStyle={[
        styles.buttonTextStyle,
        buttonTextStyle,
        {color: value ? Colors.black : Colors.placeHolderColor},
      ]}
      rowStyle={{}}
      rowTextStyle={{
        textAlign: 'left',
        paddingHorizontal: 15,
      }}
      buttonStyle={[styles.buttonStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    width: '100%',
    height: 46,
    backgroundColor: Colors.white,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  dropdownStyle: {
    borderRadius: 10,
    height: 150,
  },
  buttonTextStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: Colors.placeHolderColor,
  },
});

export default Dropdown;
