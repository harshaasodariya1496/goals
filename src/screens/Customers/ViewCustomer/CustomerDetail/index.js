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

      <View style={{paddingHorizontal: 40, marginTop: 30}}>
        <View style={{marginVertical: 10}}>
          <Text style={styles.labelText}>Primary Contact</Text>
          <Text style={styles.valueText}>Dan Berger</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.labelText}>Office Phone</Text>
          <Text style={styles.valueText}>21865432919</Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.labelText}>Cell Phone</Text>
          <Text style={styles.valueText}>612-925-5678</Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.labelText}>Email</Text>
          <Text style={styles.valueText}>dan@financialplanners.com</Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.labelText}>Address</Text>
          <Text style={styles.valueText}>
            1000 Shelard Parkway 120 St Louis Park, Minnesota 55426
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomerDetail;
