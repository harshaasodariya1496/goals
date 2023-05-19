import {View, Text, Image, Animated} from 'react-native';

import {images} from '../../../../utils/images';

import styles from './style';

const Notes = props => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyView}>
        <Image source={images.emptyNote} style={{width: 217, height: 208}} />
        <Text style={styles.emptyText}> 
          Save notes related to customer interactions here.
        </Text>
      </View>
    </View>
  );
};

export default Notes;
