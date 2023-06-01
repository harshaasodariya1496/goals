import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  processColor,
} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';
import {Colors} from '../utils/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Charts = ({navigation}) => {
  const data = {
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
        barWidth: 0.1,
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
  return (
    <BarChart
      xAxis={data.xAxis}
      yAxis={{
        left: {drawGridLines: false, enabled: false},
        right: {drawGridLines: false, enabled: false},
      }}
      pinchZoom={false}
      doubleTapToZoomEnabled={false}
      chartDescription={{text: ''}}
      drawBarShadow={false}
      data={data.data}
      highlights={data.highlights}
      legend={data.legend}
      style={{height: 150, marginTop: 15, width: '100%'}}
    />
  );
};

export default Charts;
