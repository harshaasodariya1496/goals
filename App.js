import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {LogBox} from 'react-native';
import {persistStore} from 'redux-persist';
import {NativeBaseProvider} from 'native-base';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
 
import {store} from './src/store';
import NavigatorSwitch from './src/router/NavigatorSwitch';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const persistor = persistStore(store);
function App() {
 
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <NavigatorSwitch />
            </PersistGate>
          </ReduxProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
