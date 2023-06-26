import {Text, View, FlatList, Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';
import Table from '../../../../component/Table';
import {getBgColor, getColor} from '../../../../utils/constant';
import {scale} from 'react-native-size-matters';
import TextInput from '../../../../component/TextInput';
import Button from '../../../../component/Button';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Notes = ({navigation, route}) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.tableContainer}>
        <FlatList
          style={styles.msgContainer}
          data={[
            {
              message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
              time: '08:19 AM',
            },
          ]}
          renderItem={({item, index}) => (
            <View style={styles.msgMain}>
              <Text style={styles.timeText}>{item.time}</Text>
              <View style={styles.msgTextMain}>
                <Text style={styles.msgText}>{item.message}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.divider} />
        <View style={styles.inputContent}>
          <TextInput
            placeholder={'Write note here'}
            style={styles.inputStyle}
          />
          <Button
            title={'Post'}
            style={{height: scale(30), backgroundColor: Colors.green}}
            textStyle={{marginHorizontal: 0, fontSize: scale(12)}}
          />
        </View>
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: Colors.white,
    paddingTop: 28,
    borderRadius: 13,
  },
  msgContainer: {
    height: scale(200),
    marginBottom: scale(10),
    paddingHorizontal: scale(20),
  },
  msgMain: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  timeText: {fontSize: scale(8), color: Colors.black},
  msgTextMain: {
    backgroundColor: Colors.lightBlue4,
    width: '70%',
    padding: scale(8),
    borderRadius: scale(5),
    borderTopRightRadius: scale(0),
    marginLeft: scale(5),
    paddingRight: scale(15),
  },
  msgText: {
    color: Colors.white,
    fontSize: scale(12),
    fontWeight: 200,
  },
  divider: {borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 2},
  inputContent: {
    paddingHorizontal: scale(20),
    marginVertical: scale(10),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    width: '80%',
    height: scale(30),
    marginBottom: 0,
    paddingLeft: 0,
  },
});
