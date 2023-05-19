import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Root from './src/router';
import {Colors} from './src/utils/colors';

function App() { 
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <NativeBaseProvider  >
          <Root />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
