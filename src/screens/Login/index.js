import {useState} from 'react';
import {View, Image, ImageBackground, ScrollView} from 'react-native';

import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

import styles from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const onLogin = () => {
    if (email === '' || password === '') {
      setIsError(true);
    } else {
      setIsError(false);
      navigation.navigate('Tabs');
    }
  };
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.bgImage}>
      <ScrollView style={styles.bgImage}>
        <View style={styles.header}>
          <View>
            <Image
              source={require('../../assets/images/bell.png')}
              style={styles.bellIcon}
            />
            <View style={styles.redOption} />
          </View>
          <Image
            source={require('../../assets/images/user.png')}
            style={{width: 51, height: 51}}
          />
        </View>
        <View style={styles.mainLogo}>
          <Image
            source={require('../../assets/images/goalsLogo.png')}
            style={styles.logoImage}
          />
        </View>

        <View style={styles.mainContainer}>
          <TextInput
            value={email}
            onChangeText={e => {
              setEmail(e);
            }}
            placeholder={'Email'}
            isError={isError && email === ''}
          />
          <TextInput
            value={password}
            onChangeText={e => {
              setPassword(e);
            }}
            secureTextEntry
            isError={isError && password === ''}
            placeholder={'Password'}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            title={'Login'}
            textStyle={{marginHorizontal: 30}}
            onPress={onLogin}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;
