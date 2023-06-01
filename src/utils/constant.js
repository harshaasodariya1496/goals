import {Colors} from './colors';
import {processColor} from 'react-native';
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

export const minSlot = [
  {label: '12:00am', value: '12:00am'},
  {label: '12:15am', value: '12:15am'},
  {label: '12:30am', value: '12:30am'},
  {label: '12:45am', value: '12:45am'},
  {label: '01:00am', value: '01:00am'},
  {label: '01:15am', value: '01:15am'},
  {label: '01:30am', value: '01:30am'},
  {label: '01:45am', value: '01:45am'},
  {label: '02:00am', value: '02:00am'},
  {label: '02:15am', value: '02:15am'},
  {label: '02:30am', value: '02:30am'},
  {label: '02:45am', value: '02:45am'},
  {label: '03:00am', value: '03:00am'},
  {label: '03:15am', value: '03:15am'},
  {label: '03:30am', value: '03:30am'},
  {label: '03:45am', value: '03:45am'},
  {label: '04:00am', value: '04:00am'},
  {label: '04:15am', value: '04:15am'},
  {label: '04:30am', value: '04:30am'},
  {label: '04:45am', value: '04:45am'},
  {label: '05:00am', value: '05:00am'},
  {label: '05:15am', value: '05:15am'},
  {label: '05:30am', value: '05:30am'},
  {label: '05:45am', value: '05:45am'},
  {label: '06:00am', value: '06:00am'},
  {label: '06:15am', value: '06:15am'},
  {label: '06:30am', value: '06:30am'},
  {label: '06:45am', value: '06:45am'},
  {label: '07:00am', value: '07:00am'},
  {label: '07:15am', value: '07:15am'},
  {label: '07:30am', value: '07:30am'},
  {label: '07:45am', value: '07:45am'},
  {label: '08:00am', value: '08:00am'},
  {label: '08:15am', value: '08:15am'},
  {label: '08:30am', value: '08:30am'},
  {label: '08:45am', value: '08:45am'},
  {label: '09:00am', value: '09:00am'},
  {label: '09:15am', value: '09:15am'},
  {label: '09:30am', value: '09:30am'},
  {label: '09:45am', value: '09:45am'},
  {label: '10:00am', value: '10:00am'},
  {label: '10:15am', value: '10:15am'},
  {label: '10:30am', value: '10:30am'},
  {label: '10:45am', value: '10:45am'},
  {label: '11:00am', value: '11:00am'},
  {label: '11:15am', value: '11:15am'},
  {label: '11:30am', value: '11:30am'},
  {label: '11:45am', value: '11:45am'},
  {label: '12:00pm', value: '12:00pm'},
  {label: '12:15pm', value: '12:15pm'},
  {label: '12:30pm', value: '12:30pm'},
  {label: '12:45pm', value: '12:45pm'},
  {label: '01:00pm', value: '01:00pm'},
  {label: '01:15pm', value: '01:15pm'},
  {label: '01:30pm', value: '01:30pm'},
  {label: '01:45pm', value: '01:45pm'},
  {label: '02:00pm', value: '02:00pm'},
  {label: '02:15pm', value: '02:15pm'},
  {label: '02:30pm', value: '02:30pm'},
  {label: '02:45pm', value: '02:45pm'},
  {label: '03:00pm', value: '03:00pm'},
  {label: '03:15pm', value: '03:15pm'},
  {label: '03:30pm', value: '03:30pm'},
  {label: '03:45pm', value: '03:45pm'},
  {label: '04:00pm', value: '04:00pm'},
  {label: '04:15pm', value: '04:15pm'},
  {label: '04:30pm', value: '04:30pm'},
  {label: '04:45pm', value: '04:45pm'},
  {label: '05:00pm', value: '05:00pm'},
  {label: '05:15pm', value: '05:15pm'},
  {label: '05:30pm', value: '05:30pm'},
  {label: '05:45pm', value: '05:45pm'},
  {label: '06:00pm', value: '06:00pm'},
  {label: '06:15pm', value: '06:15pm'},
  {label: '06:30pm', value: '06:30pm'},
  {label: '06:45pm', value: '06:45pm'},
  {label: '07:00pm', value: '07:00pm'},
  {label: '07:15pm', value: '07:15pm'},
  {label: '07:30pm', value: '07:30pm'},
  {label: '07:45pm', value: '07:45pm'},
  {label: '08:00pm', value: '08:00pm'},
  {label: '08:15pm', value: '08:15pm'},
  {label: '08:30pm', value: '08:30pm'},
  {label: '08:45pm', value: '08:45pm'},
  {label: '09:00pm', value: '09:00pm'},
  {label: '09:15pm', value: '09:15pm'},
  {label: '09:30pm', value: '09:30pm'},
  {label: '09:45pm', value: '09:45pm'},
  {label: '10:00pm', value: '10:00pm'},
  {label: '10:15pm', value: '10:15pm'},
  {label: '10:30pm', value: '10:30pm'},
  {label: '10:45pm', value: '10:45pm'},
  {label: '11:00pm', value: '11:00pm'},
  {label: '11:15pm', value: '11:15pm'},
  {label: '11:30pm', value: '11:30pm'},
  {label: '11:45pm', value: '11:45pm'},
];

export const timeDurationGap = [
  {label: '15', value: 15},
  {label: '30', value: 30},
  {label: '45', value: 45},
  {label: '1', value: 1},
];

export const timeGap = [
  {label: 'Minutes', value: 'Minutes'},
  {label: 'Hours', value: 'Hours'},
  {label: 'Days', value: 'Days'},
];

export const chartData = {
  legend: {
    enabled: false,
    textSize: 14,
    form: 'NONE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    wordWrapEnabled: true,
  },
  data: {
    dataSets: [
      {
        values: [5, 8, 4, 4.5, 6, 3, 5, 6, 6.5, 2, 5, 1.5],
        config: {
          drawValues: false,
          colors: [processColor(Colors.lightBlue4)],
          highlightEnabled: false,
        },
      },
      {
        values: [5.3, 7.5, 3.5, 4.5, 5.8, 3.5, 4.8, 5.8, 6, 2.2, 4.8, 1],
        config: {
          drawValues: false,
          colors: [processColor(Colors.lightBlue2)],
          highlightEnabled: false,
        },
      },
    ],
    config: {
      barWidth: 0.175,
      group: {
        fromX: 0,
        groupSpace: 0.1,
        barSpace: 0.1,
      },
    },
  },
  xAxis: {
    drawGridLines: false,
    valueFormatter: [
      'J',
      'F',
      'M',
      'A',
      'M',
      'J',
      'J',
      'A',
      'S',
      'O',
      'N',
      'D',
    ],
    granularityEnabled: true,
    granularity: 1,
    axisMaximum: 8,
    axisMinimum: 0,
    lineWidth: 15,
    position: 'BOTTOM',
    textColor: processColor(Colors.lightBlue3),
    textSize: 7,
    labelCount: 18,
    // centerAxisLabels: true,
  },
};
