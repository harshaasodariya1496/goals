import {View, Text, Image} from 'react-native';

import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';

import styles from './style';

const Reminders = props => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.reminderDateContent}>
          <Image source={images.reminder} style={styles.reminderImage} />
          <Text style={{color: Colors.lightBlue, marginRight: 5}}>
            Reminder
          </Text>
          <Text style={{color: Colors.lightBlue, marginRight: 5}}>
            08:19 AM
          </Text>
          <Text style={{color: Colors.lightBlue, marginRight: 5}}>on</Text>
          <Text style={{color: Colors.lightBlue, marginRight: 5}}>
            05/22/2023
          </Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolor
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Reminders;
