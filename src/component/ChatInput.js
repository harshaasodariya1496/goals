import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {images} from '../utils/images';
import {Colors} from '../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ChatInput = props => {
  return (
    <View style={[styles.footer,props.containerStyle]}>
      {props.renderFirstIcon}
      <View style={styles.footerMidView}>
        <TextInput
          {...props}
          placeholder={props.placeholder}
          returnKeyLabel={'Go'}
          returnKeyType={'go'}
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.footerInput}
          onSubmitEditing={props.onSubmitEditing}
        />
        <TouchableOpacity
          style={styles.footerEmoji}
          onPress={props.emijiOnPress}>
          <Image
            source={images.smile}
            tintColor={Colors.darkGrey2}
            style={styles.footerImages}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Feather name={'mic'} size={24} color={Colors.darkGrey2} />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={props.isVisible}
        mode="datetime"
        onConfirm={props.handleConfirm}
        onCancel={props.onCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: (screenHeight / 100) * 9,
    backgroundColor: '#D6D8DC',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerImages: {height: 24, width: 24, resizeMode: 'contain'},
  footerMidView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerInput: {
    width: screenWidth - 170,
    height: 42,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    fontSize: 14,
    marginBottom: 0,
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
});

export default ChatInput;
