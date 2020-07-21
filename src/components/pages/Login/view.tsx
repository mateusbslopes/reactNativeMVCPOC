import React from 'react';
import { Login as LoginState } from "../../../types";
import { setEmail as setEmailAction, setPassword as setPasswordAction } from "../../../store/ducks/login";
import { connect, ConnectedProps } from 'react-redux';
import { default as Presenter } from "./presenter";
import { ViewWithProvider } from '../../../utils/viewWithProvider';

const mapState = (state: LoginState) => ({
  email: state.email,
  password: state.password
});

const mapDispatch = {
  setEmail: (email: String) => setEmailAction(email),
  setPassword: (email: String) => setPasswordAction(email),
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
      <div>
        <input onChange={event => this.presenter?.setEmail(event.target.value)} />
        Email: {this.props.email}
      </div>
    );
  }
}

export default connector(Login);