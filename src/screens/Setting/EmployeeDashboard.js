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
import {scale} from 'react-native-size-matters';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const EmployeeDashboard = ({navigation}) => {
  const [reminder, setReminder] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(['one', 'two']);
  const onSave = () => {
    setIsError(true);
  };
  return (
    <View style={[styles.formContent]}>
      <View style={styles.leaderboardMain}>
        <View>
          <Text style={styles.leaderboardText}>Leaderboard</Text>
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
      <Button
        title={'Save Change'}
        style={styles.saveBtn}
        textStyle={{fontSize: 14}}
        onPress={onSave}
      />
    </View>
  );
};

export default EmployeeDashboard;
