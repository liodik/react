import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let button;
    console.log(this.state.isLoggedIn);
    if (this.state.isLoggedIn) {
      button = <Logout onClick={this.onLogout} />;
    } else {
      button = <Login onClick={this.onLogin} />;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
