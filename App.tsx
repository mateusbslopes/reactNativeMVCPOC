import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/components/pages/Login/index';
import { Provider } from 'react-redux';
import store from './src/store/ducks';

export { store };

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Login />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});