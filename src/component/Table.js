import {FlatList, ScrollView, StyleSheet, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../utils/colors';

const Table = (
  {
    style,
    data,
    tableBody,
    tableHead,
    tableStyle,
    listContainerStyle,
    tableFooter,
  },
  props,
) => {
  return (
    <View style={[tableStyle ? tableStyle : styles.tableContainer]}>
      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}>
        <View>
          {tableHead}
          <FlatList
            nestedScrollEnabled={true}
            data={data}
            renderItem={tableBody}
            style={listContainerStyle}
          />
          {tableFooter ? tableFooter : null}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 28,
    marginVertical: 10,
    borderRadius: 13,
    marginLeft: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 20,
  },
  tableHead: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  headFirstCol: {
    fontSize: 14,
    color: Colors.black,
    width: 131,
    marginRight: 37,
  },
  headSecCol: {
    fontSize: 14,
    color: Colors.black,
    marginRight: 45,
  },

  bodyMain: {
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    borderBottomColor: Colors.grey,
  },
});

export default Table;
