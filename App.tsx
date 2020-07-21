import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/components/pages/Login/index';
import { Provider } from 'react-redux';
import store from './src/store/ducks';
import themes from "./src/theme";
import { AppProps } from "./src/types";
import { ThemeProvider } from 'emotion-theming';

export { store };

const mapState = (state: AppProps) => ({

});

export default class App extends React.Component {

  props: AppProps | any;

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={this.props.theme}>
          <View style={styles.container}>
            <Login />
          </View>
        </ThemeProvider>
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