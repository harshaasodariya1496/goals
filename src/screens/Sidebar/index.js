import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import styles from './style';
import {images} from '../../utils/images';

const Sidebar = ({navigation}) => {
  const menu = [
    {title: 'Dashboard', image: images.dashboard},
    {title: 'Goals', image: images.goals},
    {title: 'Team', image: images.team},
    {title: 'Customers', image: images.customers},
    {title: 'Discussion', image: images.discussion},
    {
      title: 'Commissions',
      image: images.commissions,
    },
    {title: 'Bounses', image: images.bounses},
    {title: 'Contests', image: images.contest},
    {title: 'Highlights', image: images.highlights},
    {title: 'Reports', image: images.reports},
  ];

  const onClose = () => {
    navigation.goBack();
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
          <Image source={images.user} style={{width: 51, height: 51}} />
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
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <AntDesignIcon name="close" size={30} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Sidebar;
