import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import styles from './style';
import {} from 'react-native-size-matters';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';
import Header from '../../../component/Header';
import {TabView, SceneMap} from 'react-native-tab-view';

const ViewCustomer = props => {
  const title = props.route.params?.title ? props.route.params.title : '';

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}} />
  );

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bg} source={images.background}>
        <Header
          title={title}
          isOption
          onBackPress={() => {
            props.navigation.navigate('Customers');
          }}
          textStyle={{fontSize: 14, fontWeight: 700}}
        />
      </ImageBackground>
      <View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </View>
  );
};

export default ViewCustomer;
