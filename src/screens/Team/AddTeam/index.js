import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import Header from '../../../component/Header';
import Button from '../../../component/Button';
import TextInput from '../../../component/TextInput';

import {images} from '../../../utils/images';
import {Colors} from '../../../utils/colors';

import styles from './style';
import CheckBox from '@react-native-community/checkbox';
import {scale} from 'react-native-size-matters';
import {numberWithCommas} from '../../../utils/constant';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const AddTeam = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [annualSalary, setAnnualSalary] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSelected, setIsSelected] = useState('Add People');
  const [status, setStatus] = useState('checked');
  const [editIndex, setEditIndex] = useState(null);
  const [userList, setUserList] = useState([
    {
      name: 'Jacob Jones',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Esther Howard',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Albert Flores',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Leslie Alexander',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Jacob Jones',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Esther Howard',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Albert Flores',
      isChecked: false,
      salary: 10000,
    },
    {
      name: 'Leslie Alexander',
      isChecked: false,
      salary: 10000,
    },
  ]);
  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };
  const onDone = () => {
    if (fName === '' || lName === '' || email === '' || annualSalary === '') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  const AddPeople = () => (
    <View style={styles.midContent}>
      <TextInput
        placeholder="First Name"
        value={fName}
        onChangeText={setFName}
        style={styles.input}
        isError={isError && fName === ''}
      />
      <TextInput
        placeholder="Last Name"
        value={lName}
        onChangeText={setLName}
        isError={isError && lName === ''}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        isError={isError && email === ''}
      />
      <TextInput
        placeholder="Annual Salary"
        value={annualSalary}
        onChangeText={setAnnualSalary}
        style={styles.input}
        keyboardType="number-pad"
        isError={isError && annualSalary === ''}
      />
      <TouchableOpacity style={styles.addMoreView}>
        <AntDesign name="plus" size={15} color={Colors.white} />
        <Text style={styles.addMoreText}>Add More</Text>
      </TouchableOpacity>

      <View style={{marginVertical: 40, alignItems: 'center'}}>
        <Button
          title={'Done'}
          style={{height: 46}}
          textStyle={{fontSize: 14}}
          onPress={onDone}
        />
      </View>
    </View>
  );
  const onSelectUser = index => {
    let arr = userList;
    arr[index].isChecked = !arr[index].isChecked;
    setUserList([...arr]);
  };
  const RemovePeople = () => (
    <View style={styles.midContent}>
      <FlatList
        data={userList}
        showsVerticalScrollIndicator={false}
        style={{height: (screenHeight / 10) * 4}}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={[
              styles.checkBoxContent,
              {marginBottom: userList?.length - 1 == index ? 0 : 30},
            ]}>
            <CheckBox
              tintColors={{true: Colors.white, false: Colors.white}}
              value={item.isChecked}
              onValueChange={() => onSelectUser(index)}
            />
            <Image
              source={images.user}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
            />
            <Text style={styles.checkBoxLabelText}>{item.name}</Text>
          </View>
        )}
      />
      <View style={{marginVertical: 40, alignItems: 'center'}}>
        <Button
          title={'Delete User'}
          style={{height: 46}}
          textStyle={{fontSize: 14}}
          onPress={onDone}
        />
      </View>
    </View>
  );
  const onChangeSalary = (e, i) => {
    let arr = userList;
    arr[i].salary = parseInt(e);
    setUserList([...arr]);
  };
  const Salaries = () => (
    <View style={styles.midContent}>
      <FlatList
        data={userList}
        showsVerticalScrollIndicator={false}
        style={{height: (screenHeight / 10) * 4.2, marginTop: 20}}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={[
              styles.checkBoxContent,
              {marginBottom: userList?.length - 1 == index ? 0 : 15},
            ]}>
            <Image
              source={images.user}
              style={{
                width: 55,
                height: 55,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
            />
            <View style={{width: '68%', marginHorizontal: 10}}>
              <Text style={[styles.salaryUserName]}>{item.name}</Text>
              {editIndex === index ? (
                <View>
                  <TextInput
                    value={item.salary.toString()}
                    onChangeText={e => onChangeSalary(e, index)}
                    style={{
                      height: scale(20),
                      padding: 0,
                      paddingLeft: 5,
                      width: '90%',
                      marginVertical: scale(5),
                      marginBottom: scale(5),
                    }}
                  />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons
                      name="calendar-sharp"
                      size={15}
                      color={Colors.white}
                    />
                    <Text
                      style={{
                        fontSize: scale(14),
                        color: Colors.white,
                        marginLeft: 10,
                      }}>
                      Date adjusted salary starts
                    </Text>
                  </View>
                </View>
              ) : (
                <Text style={{fontSize: scale(14), color: Colors.white}}>
                  ${numberWithCommas(item.salary)}
                </Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                setEditIndex(editIndex == index ? null : index);
              }}>
              <SimpleLineIcons name="pencil" size={30} color={Colors.white} />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={{marginVertical: 40, alignItems: 'center'}}>
        <Button
          title={'Confirm'}
          style={{height: 46}}
          textStyle={{fontSize: 14}}
          onPress={onDone}
        />
      </View>
    </View>
  );
  const renderItem = () => {
    switch (isSelected) {
      case 'Add People':
        return <AddPeople />;
      case 'Remove People':
        return <RemovePeople />;
      case 'Salaries':
        return <Salaries />;
    }
  };
  return (
    <ImageBackground style={styles.container} source={images.background}>
      <KeyboardAvoidingScrollView nestedScrollEnabled>
        <Header title={''} onBackPress={() => navigation.goBack()} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <Image
            source={images.team}
            style={{height: 35, width: 45, marginRight: 10}}
          />
          <Text style={{fontSize: 33, color: Colors.white}}>Team Settings</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
            paddingTop: 0,
          }}>
          <Button
            type={'small'}
            title={'Add People'}
            onPress={() => {
              setIsSelected('Add People');
            }}
            style={{
              backgroundColor:
                isSelected == 'Add People' ? Colors.lightBlue3 : Colors.white,
            }}
            textStyle={{
              color: isSelected == 'Add People' ? Colors.white : Colors.black,
            }}
          />
          <Button
            type={'small'}
            title={'Remove People'}
            onPress={() => {
              setIsSelected('Remove People');
            }}
            style={{
              backgroundColor:
                isSelected == 'Remove People'
                  ? Colors.lightBlue3
                  : Colors.white,
            }}
            textStyle={{
              color:
                isSelected == 'Remove People' ? Colors.white : Colors.black,
            }}
          />
          <Button
            type={'small'}
            title={'Salaries'}
            onPress={() => {
              setIsSelected('Salaries');
            }}
            style={{
              backgroundColor:
                isSelected == 'Salaries' ? Colors.lightBlue3 : Colors.white,
            }}
            textStyle={{
              color: isSelected == 'Salaries' ? Colors.white : Colors.black,
            }}
          />
        </View>

        {renderItem()}

        <View style={{height: 50}} />
      </KeyboardAvoidingScrollView>
    </ImageBackground>
  );
};

export default AddTeam;
