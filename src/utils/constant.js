import {Colors} from './colors';

export const getColor = item => {
  switch (item) {
    case 'Phone Call':
      return Colors.green;
    case 'Meeting':
      return Colors.red;
    case 'Task':
      return Colors.orange;
  }
};

export const getBgColor = item => {
  switch (item) {
    case 'Phone Call':
      return 'rgba(67, 184, 134, 0.2);';
    case 'Meeting':
      return 'rgba(239, 62, 109, 0.2)';
    case 'Task':
      return 'rgba(255, 164, 18, 0.2)';
  }
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
