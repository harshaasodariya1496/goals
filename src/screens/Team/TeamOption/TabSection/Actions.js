import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';
import Table from '../../../../component/Table';
import {getBgColor, getColor} from '../../../../utils/constant';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Actions = ({navigation, route}) => {
  const tableData = [
    {
      task: 'Phone Call',
      date: '04/24/2023',
      time: '12:00 PM',
      subject: 'Meeting w/ Jack',
    },
    {
      task: 'Meeting',
      date: '04/23/2023',
      time: '02:00 PM - 03:00 PM',
      subject: 'Phone call w/ Joe',
    },
    {
      task: 'Task',
      date: '04/21/2023',
      time: '10:00 PM',
      subject: 'Finish 1st quarter sales deck',
    },
    {
      task: 'Meeting',
      date: '04/20/2023',
      time: '02:00 PM - 01:00 PM',
      subject: 'Customer service lunch',
    },
  ];

  return (
    <View style={{marginHorizontal: 20}}>
      <Table
        data={tableData}
        tableStyle={styles.tableContainer}
        tableHead={
          <View style={styles.tableHead}>
            <Text style={styles.headFirstCol}>Task</Text>
            <Text style={[styles.headSecCol, {width: 100}]}>Date</Text>
            <Text style={[styles.headSecCol, {width: 150}]}>Time</Text>
            <Text
              style={[
                styles.headSecCol,
                {
                  width: 140,
                  marginRight: 3 == tableData.length - 1 ? 0 : 45,
                },
              ]}>
              Subject
            </Text>
          </View>
        }
        tableBody={({item, index}) => (
          <View
            style={[
              styles.bodyMain,
              {
                borderBottomWidth: index == tableData.length - 1 ? 0 : 2,
              },
            ]}
            key={index}>
            <View style={[styles.headFirstCol, {flexDirection: 'row'}]}>
              <Text
                style={{
                  fontSize: 14,
                  color: getColor(item.task),
                  paddingHorizontal: 10,
                  backgroundColor: getBgColor(item.task),
                  borderRadius: 5,
                  paddingVertical: 5,
                }}>
                {item.task}
              </Text>
            </View>
            <Text
              style={[
                styles.headSecCol,
                {
                  width: 100,
                },
              ]}>
              {item.date}
            </Text>
            <Text style={[styles.headSecCol, {width: 150}]}>{item.time}</Text>
            <Text
              style={[
                styles.headSecCol,
                {
                  width: 200,
                  marginRight: index == tableData.length - 1 ? 0 : 45,
                  color: Colors.lightBlue,
                },
              ]}>
              {item.subject}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    borderRadius: 13,
    paddingHorizontal: 20,
  },
  tableHead: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
  },
  headFirstCol: {
    width: 131,
    marginRight: 37,
    color:Colors.darkGrey3
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.darkGrey3,
    marginRight: 45,
  },

  bodyMain: {
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
    borderBottomColor: Colors.grey,
  },
});
