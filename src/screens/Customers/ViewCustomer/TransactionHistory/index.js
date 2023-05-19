import {View, Text} from 'react-native';

import styles from './style';

const TransactionHistory = props => {
  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <View style={styles.head}>
          <Text style={styles.headText}>Date</Text>
        </View>
        <View style={[styles.head, {paddingStart: 10}]}>
          <Text style={styles.headText}>Product/Service</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.headText}>Amount</Text>
        </View>
      </View>
      <View style={styles.tableBody}>
        <View style={styles.head}>
          <Text style={styles.bodyText}>12/27/2022</Text>
        </View>
        <View style={[styles.head, {paddingStart: 10}]}>
          <Text style={styles.bodyText}>Carpet</Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.bodyText}>$13,000</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionHistory;
