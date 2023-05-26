import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';
import Table from '../../../../component/Table';
import {getBgColor, getColor} from '../../../../utils/constant';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Contact = ({navigation, route}) => {
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
      <View style={styles.tableContainer}>
        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>Primary Contact</Text>
          <Text style={styles.valueText}>Lisa Miller</Text>
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>Office Phone</Text>
          <Text style={styles.valueText}>{'(612) 845-5590'}</Text>
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>Cell Phone</Text>
          <Text style={styles.valueText}>{'(763) 862-7509'}</Text>
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.valueText}>lisa@americanexpress.com</Text>
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>Address</Text>
          <Text style={styles.valueText}>
            1000 Shelard Pkwy Minneapolis, MN 55426
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    borderRadius: 13,
    paddingHorizontal: 20,
  },
  title: {fontSize: 12, fontWeight: 700, color: Colors.black},
  valueText: {
    fontSize: 14,
    fontWeight: 400,
    color: Colors.lightBlue4,
    marginTop: 8,
  },
});
