import {
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Button as NativeButton} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

import styles from './style';
import GeneralSetting from './GeneralSetting';
import SecurityPrivacy from './SecurityPrivacy';
import EmployeeDashboard from './EmployeeDashboard';
import ROI from './ROI';
import InviteTeam from './InviteTeam';
import ManageRole from './ManageRole';
import ProduceCommission from './ProduceCommission';
import {useSelector} from 'react-redux';
import Notification from './Notification';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Setting = ({navigation}) => {
  const [isSelected, setIsSelected] = useState('General Settings');
  const user = useSelector(state => state.user.userDetails);
  const data =
    user?.userType.toLowerCase() == 'manager'
      ? [
          {name: 'General Settings'},
          {name: 'Security & Privacy'},
          {name: 'Employee Dashboard'},
          {name: 'ROI'},
          {name: 'Invite Your Team'},
          {name: 'Manage Roles'},
          {name: 'Products/Commissions'},
        ]
      : [
          {name: 'General Settings'},
          {name: 'Security & Privacy'},
          {name: 'Notification'},
        ];

  const renderTab = () => {
    switch (isSelected) {
      case 'General Settings':
        return <GeneralSetting />;
      case 'Security & Privacy':
        return <SecurityPrivacy />;
      case 'Employee Dashboard':
        return <EmployeeDashboard />;
      case 'ROI':
        return <ROI />;
      case 'Notification':
        return <Notification />;
      case 'Invite Your Team':
        return <InviteTeam />;
      case 'Manage Roles':
        return <ManageRole />;
      case 'Products/Commissions':
        return <ProduceCommission />;
    }
  };
  return (
    <KeyboardAvoidingScrollView
      nestedScrollEnabled={true}
      style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={images.background}></ImageBackground>

      <View style={{top: -125}}>
        <View style={styles.mainContainer}>
          <View style={styles.userContainer}>
            <Image source={images.user} style={styles.userImage} />
          </View>
          <NativeButton
            size="sm"
            variant="outline"
            _text={styles.changeBtnText}
            style={styles.changeBtn}>
            Change Picture
          </NativeButton>

          <NativeButton _text={styles.removeBtnText} variant="unstyled">
            Remove
          </NativeButton>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialCommunityIcons
              size={30}
              color={Colors.lightBlue2}
              name={'close'}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.btnList}
          renderItem={({item, index}) => {
            return (
              <Button
                type={'small'}
                title={item.name.toLocaleUpperCase()}
                onPress={() => {
                  setIsSelected(item.name);
                }}
                style={{
                  backgroundColor:
                    isSelected == item.name ? Colors.lightBlue4 : Colors.white,
                }}
                textStyle={{
                  color: isSelected == item.name ? Colors.white : Colors.black,
                }}
              />
            );
          }}
        />
        {renderTab()}
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Setting;
