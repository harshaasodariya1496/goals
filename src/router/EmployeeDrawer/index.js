import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import styles from './style';
import {Colors} from '../../utils/colors';
import {DrawerActions} from '@react-navigation/native';
import {images} from '../../utils/images';
import {useDispatch} from 'react-redux';

const EmployeeDrawer = ({navigation},props) => {
  const dispatch = useDispatch();
  const menu = [
    {title: 'Dashboard', image: images.dashboard},
    {title: 'Goals', image: images.goals},
    {title: 'Customers', image: images.customers},
    {title: 'Discussion', image: images.discussion},
    {
      title: 'Commissions',
      image: images.commissions,
    },
    {title: 'Highlights', image: images.highlights},
  ];

  const onClose = () => {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    navigation.dispatch(DrawerActions.closeDrawer());
    // navigation.navigate('EmpTab');
  };

  return (
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={styles.bgImage}>
      <ScrollView style={styles.bgImage}>
        <View style={styles.header}>
          <View>
            <Image source={images.bell} style={styles.bellIcon} />
            <View style={styles.redOption} />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <Image source={images.user} style={{width: 51, height: 51}} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainLogo}>
          <Image source={images.goalsLogo} style={styles.logoImage} />
        </View>
        <View style={styles.mainContainer}>
          {menu.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => { 
                  navigation.navigate(item.title);
                }}
                style={styles.menuView}>
                <Image
                  source={item.image}
                  style={styles.menuImage}
                  resizeMode="contain"
                />
                <Text style={styles.menuTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Login');
              dispatch.user.setUserDetail(null);
            }}
            style={styles.menuView}>
            <AntDesignIcon name={'logout'} size={30} color={Colors.white} />
            <Text style={[styles.menuTitle, {marginLeft: 25}]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <AntDesignIcon name="close" size={30} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default EmployeeDrawer;
