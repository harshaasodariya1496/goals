import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Center, Button as NativeButton, Radio, Switch} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

import styles from './style';
import {scale, verticalScale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ROI = ({navigation}) => {
  const [reminder, setReminder] = useState(false);
  const [isError, setIsError] = useState(false);
  const [margin, setMargin] = useState('');
  const onSave = () => {
    setIsError(true);
  };
  return (
    <View style={[styles.formContent]}>
      <View style={styles.leaderboardMain}>
        <View>
          <Text style={styles.leaderboardText}>ROI display</Text>
          <Text style={styles.onText}>On</Text>
        </View>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: reminder ? Colors.green : '#B7C1CC',
          }}>
          <Switch
            value={reminder}
            size="lg"
            onValueChange={() => {
              setReminder(!reminder);
            }}
            thumbColor={Colors.white}
            trackColor={{false: '#B7C1CC', true: Colors.green}}
          />
        </View>
      </View>
      <Text style={{fontSize: scale(13), color: Colors.lightBlue4}}>
        At Goals.com we believe measuring the ROl of your sales team
        collectively, as well as each sales person individually, is critical to
        driving a winning team.
      </Text>
      <Text
        style={{
          fontSize: scale(13),
          color: Colors.lightBlue4,
          marginVertical: verticalScale(20),
        }}>
        Calculating ROl involves measuring the gains against the cost of
        obtaining the gain, therefore Profit Margin must be factored in order to
        truly measure the profitability of your sales team. Please note, by
        default our platform has your Profit Margin set to 100%, this is likely
        not accurate. Please adjust your Cost of Goods Sold percentage in
        the field below.
      </Text>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: scale(13), color: Colors.lightBlue4}}>
          Profit Margin %
        </Text>
        <TextInput
          label={'First Name'}
          value={margin}
          onChangeText={setMargin}
          placeholder={'asdas'}
          style={{
            borderWidth: 2,
            borderColor: Colors.grey1, 
            height: 44,
            width: '35%',
            marginTop: 15,
          }}
        />
      </View>
      <Button
        title={'Save Change'}
        style={styles.saveBtn}
        textStyle={{fontSize: 14}}
        onPress={onSave}
      />
    </View>
  );
};

export default ROI;
