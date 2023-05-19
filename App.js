import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Root from './src/router';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Root />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
