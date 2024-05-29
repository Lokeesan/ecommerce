import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Router from './Navigation/Router';
import {Provider} from 'react-redux';
import {store, persistor} from './Features/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {flexBoxStyle} from './Common/Styles';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={flexBoxStyle.flex}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={styles.main}>
            <Router />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
