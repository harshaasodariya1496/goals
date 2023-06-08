import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Progress} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';

import styles from './style';
import {numberWithCommas} from '../../utils/constant';
import {useState} from 'react';
import Button from '../../component/Button';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Highlights = ({navigation, route}) => {
  const isList = route.params?.isList;
  const [data, setData] = useState([
    {
      name: 'Andrew Riverra was recognized for Going Above and Beyond by Shirley Chen',
      image: null,
      description:
        'I would like to recognize and thank Andrew for her boundless enthusiasm for our company and mission. Building a new market that grow up our company from last year.',
      time: 'Just now',
      likeCount: 0,
      commentCount: 0,
    },
    {
      name: 'Today is Mark Webber Birthday',
      image: images.banner,
      description: null,
      time: '2 minutes ago',
      likeCount: 1218,
      commentCount: 228,
    },
    {
      name: 'Laura Wilson was assigned to new task Build Belief in The Program by Mark Webber',
      image: null,
      description: null,
      time: '2 hours ago',
      likeCount: 401,
      commentCount: 61,
    },
    {
      name: 'Adam Morgan was recognized for Going Above and Beyond by Shirley Chen',
      image: null,
      description: 'I would like to recognize and thank Adam.',
      time: '2 hours ago',
      likeCount: 376,
      commentCount: 95,
    },
    {
      name: 'Today is Shirley Chen Birthday',
      image: images.banner,
      description: null,
      time: '2m',
      likeCount: 218,
      commentCount: 28,
    },
  ]);
  const renderItem = ({item, index}) => (
    <View key={index} style={styles.midContent}>
      <View style={styles.firstContent}>
        <Image source={images.user} style={styles.cardUserImage} />
        <View style={{marginLeft: 16}}>
          <Text style={styles.cardUserName}>{item.name}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
      {item.image !== null && (
        <Image source={images.banner} style={styles.highlightImage} />
      )}
      {item.description !== null && (
        <Text style={styles.descriptionText}>{item.description}</Text>
      )}
      <View style={styles.likeCommentContent}>
        <View style={styles.likeContent}>
          <MaterialCommunityIcons
            name={item.likeCount > 0 ? 'cards-heart' : 'cards-heart-outline'}
            size={20}
            color={item.likeCount > 0 ? Colors.red : Colors.black}
          />
          <Text style={styles.likeText}>{item.likeCount} Likes</Text>
        </View>
        <View style={styles.commentContent}>
          <MaterialCommunityIcons
            name={'message-text-outline'}
            size={20}
            color={Colors.black}
          />
          <Text style={styles.likeText}>{item.commentCount} comments</Text>
        </View>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      {isList === true ? (
        <View>
          <ImageBackground style={styles.bg} source={images.background}>
            <View style={styles.headerMain}>
              <View style={styles.headerImageContent}>
                <Image
                  source={images.highlights}
                  style={styles.menuImage}
                  resizeMode="contain"
                />
                <Text style={styles.menuTitle}>Highlight</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddHighlight')}>
                <Ionicons
                  name="add-circle-outline"
                  size={30}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{top: -268, marginHorizontal: 20}}>
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </View>
      ) : (
        <ImageBackground source={images.background} style={styles.emptyBg}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={images.highlights}
              style={styles.menuImage1}
              resizeMode="contain"
            />
            <Text style={styles.menuTitle1}>Highlights</Text>
          </View>
          <Image
            source={images.highlight}
            style={styles.noBonusImage}
            resizeMode="contain"
          />
          <Text style={styles.noBonusText}>
            No highlights have been created yet.
          </Text>
          <View style={{alignItems: 'center'}}>
            <Button
              type={'icon-label'}
              icon={
                <MaterialCommunityIcons
                  size={16}
                  color={Colors.white}
                  name={'plus'}
                />
              }
              title={'New Highlight'}
              textStyle={{fontSize: 14, color: Colors.white}}
              style={styles.newBonusBtn}
              onPress={() => navigation.navigate('AddHighlight')}
            />
          </View>
        </ImageBackground>
      )}
    </ScrollView>
  );
};

export default Highlights;
