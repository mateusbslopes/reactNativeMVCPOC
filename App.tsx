import React from 'react';
import { StyleSheet, View } from 'react-native';
import Base from './src/index';
import { Provider } from 'react-redux';
import store from './src/store/ducks';
import { AppProps } from "./src/types";

export { store };

export default class App extends React.Component {

  props: AppProps | any;

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Base />
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