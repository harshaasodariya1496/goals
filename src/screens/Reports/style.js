import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 50,
  },
  yearMain: {
    flexDirection: 'row', 
  },
  item: {
    backgroundColor: '#A1A1A1',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: 120,
    width: 90,
  },
  itemText: {
    color: '#fff',
  },
  yearView: {
    marginRight: 20,
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    shadowColor: '#000',
    elevation: 2,
    borderRadius: 5,
    height: 40,
    width: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  yearText: {color: Colors.lightBlue, fontSize: 12},
  monthText: {
    fontSize: 12,
    color: Colors.lightBlue,
    textAlign: 'center',
    marginTop: 5,
  },
  cardMain: {
    marginBottom: 40,
    marginRight: 41,
  },
  mainView: {
    backgroundColor: Colors.white,
    paddingVertical: 31,
    paddingHorizontal: 24,
    borderRadius: 34,
  },
  textBox: {
    backgroundColor: Colors.grey,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  inputText: {color: Colors.lightBlue, fontSize: 16},
});

export default styles;
