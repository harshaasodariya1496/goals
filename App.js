import React from 'react';
import {LogBox} from 'react-native';  
import {persistStore} from 'redux-persist';
import {NativeBaseProvider} from 'native-base';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Root from './src/router'; 
import {store} from './src/store';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const persistor = persistStore(store);
function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Root />
            </PersistGate>
          </ReduxProvider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
