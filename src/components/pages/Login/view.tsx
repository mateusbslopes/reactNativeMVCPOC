import React from 'react';
import { Login as LoginState } from "../../../types";
import { setEmail as setEmailAction, setPassword as setPasswordAction } from "../../../store/ducks/login";
import { connect, ConnectedProps } from 'react-redux';
import { default as Presenter } from "./presenter";
import { ViewWithProvider } from '../../../utils/viewWithProvider';
import { setTheme } from '../../../store/ducks/theme';
import { View, TextInput } from 'react-native';

const mapState = (state: any) => ({
  email: state.login.email,
  password: state.login.password
});

const mapDispatch = {
  setEmail: (email: String) => setEmailAction(email),
  setPassword: (email: String) => setPasswordAction(email),
  toggleTheme: (string: Boolean) => setTheme(string)
}

const connector = connect(mapState, mapDispatch);
type LoginProps = ConnectedProps<typeof connector> & Presenter;

class Login extends ViewWithProvider<LoginState, LoginProps> {

  constructor(props: LoginProps | any) {
    super(props);
    this.state = {
      email: props.email
    }
  }

  render() {
    return (
      <View css={theme => style(theme)}>
        Email:
        <TextInput onChangeText={text => this.presenter?.setEmail(text)} value={this.props.email} />
        Value: {this.props.email}
        Lights on? 
        {/* <input type="checkbox" onChange={event => this.presenter?.toggleTheme(event.target.checked)}/> */}
      </View>
    );
  }
}

const style = (theme: any) => {
  return `
  color: ${theme.colors.primary[500]};
`};

export default connector(Login);