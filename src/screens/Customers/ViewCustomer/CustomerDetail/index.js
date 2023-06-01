import Octicons from 'react-native-vector-icons/Octicons';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';

import Header from '../../../../component/Header';

import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';

import styles from './style';

const CustomerDetail = props => {
  const title = props.route.params?.title ? props.route.params.title : '';

  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.bg} source={images.background}>
        <Header
          title={title}
          onBackPress={() => {
            props.navigation.goBack();
          }}
          textStyle={{fontSize: 14, fontWeight: 700}}
          isPopOver
          firstIcon={() => {
            return (
              <Octicons
                name="pencil"
                size={21}
                color={Colors.darkGrey}
                style={{marginRight: 10}}
              />
            );
          }}
          secondIcon={() => {
            return (
              <Image
                source={images.trash}
                style={styles.trashImage}
                resizeMode="contain"
              />
            );
          }}
          firstTitle={'Edit'}
          secondTitle={'Delete'}
          firstOnPress={() => {}}
          secondOnPress={() => {}}
        />
      </ImageBackground>

      
    </ScrollView>
  );
};

export default CustomerDetail;
