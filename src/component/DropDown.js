// import {StyleSheet} from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import SelectDropdown from 'react-native-select-dropdown';
// import {Dropdown as ElementDropDown} from 'react-native-element-dropdown';
// import {Colors} from '../utils/colors';
// import {useState} from 'react';

// const Dropdown = (
//   {
//     style,
//     data,
//     placeHolder,
//     value,
//     onSelect,
//     buttonTextStyle,
//     dropdownCustomStyle,
//   },
//   props,
// ) => {
//   const [isFocus, setIsFocus] = useState(false);
//   return (
//     <ElementDropDown
//       style={[styles.buttonStyle, style]}
//       placeholderStyle={[
//         styles.buttonTextStyle,
//         {color: value ? Colors.black : Colors.placeHolderColor},
//         buttonTextStyle,
//       ]}
//       // itemContainerStyle={styles.dropdownStyle}
//       itemTextStyle={{fontSize: 16, color: Colors.black}}
//       iconStyle={{width: 20, height: 20}}
//       iconColor={Colors.lightBlue4}
//       containerStyle={styles.dropdownCustomStyle}
//       selectedTextStyle={{color: Colors.lightBlue4}}
//       data={data}
//       labelField="label"
//       valueField="value"
//       placeholder={placeHolder}
//       value={value}
//       onFocus={() => setIsFocus(true)}
//       onBlur={() => setIsFocus(false)}
//       onChange={item => {
//         onSelect(item.value);
//         setIsFocus(false);
//       }}
//       activeColor={Colors.lightSkyBlue}
//       // render={() => (
//       //   <Ionicons name="chevron-down-outline" size={20} color={'#2376C4'} />
//       // )}
//       {...props}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   buttonStyle: {
//     borderRadius: 5,
//     width: '100%',
//     height: 46,
//     backgroundColor: Colors.white,
//     marginBottom: 10,
//     paddingHorizontal: 15,
//     // justifyContent: 'flex-start',
//   },
//   dropdownStyle: {
//     borderRadius: 10,
//   },
//   buttonTextStyle: {
//     fontSize: 14,
//     textAlign: 'left',
//     color: Colors.placeHolderColor,
//   },
// });

// export default Dropdown;

import {StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';

import {Colors} from '../utils/colors';

const Dropdown = (
  {
    style,
    data,
    placeHolder,
    value,
    onSelect,
    buttonTextStyle,
    dropdownCustomStyle,
  },
  props,
) => {
  data = data.map(item => item.label);
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
      dropdownStyle={{...dropdownCustomStyle, ...styles.dropdownStyle}}
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
