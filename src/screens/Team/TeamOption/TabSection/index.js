import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import {Icon, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../../../utils/images';
import {Colors} from '../../../../utils/colors';
import Table from '../../../../component/Table';

import styles from './style';
import Button from '../../../../component/Button';
import {scale} from 'react-native-size-matters';
import Actions from './Actions';
import TransactionHistory from './TransactionHistory';
import Contact from './Contact';
import Notes from './Notes';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TabSection = ({onAddPress}) => {
  const [selectedTab, setSelectedTab] = useState('Actions');

  const renderTable = () => {
    switch (selectedTab) {
      case 'Actions':
        return <Actions onAddPress={onAddPress} />;
      case 'Transactions History':
        return <TransactionHistory />;
      case 'Notes':
        return <Notes />;
      case 'Contact':
        return <Contact />;
    }
  };
  return (
    <View>
      <View style={{marginTop: 20, marginBottom: 25, marginLeft: 20}}>
        <FlatList
          data={['Actions', 'Transactions History', 'Notes', 'Contact']}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => {
            return (
              <Pressable
                onPress={() => {
                  setSelectedTab(item);
                }}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 24,
                }}
                key={index}>
                <Text
                  style={{
                    fontSize: 14,
                    color:
                      selectedTab === item ? Colors.lightBlue4 : Colors.black,
                  }}>
                  {item}
                </Text>
                {selectedTab === item && (
                  <View
                    style={{
                      borderBottomWidth: 2,
                      width: '80%',
                      borderColor: 'rgba(39, 117, 189, 0.3)',
                    }}
                  />
                )}
              </Pressable>
            );
          }}
        />
      </View>
      {renderTable()}
    </View>
  );
};

export default TabSection;
