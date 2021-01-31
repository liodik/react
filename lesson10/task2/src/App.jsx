import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${this.state.userData.firstName}`}</h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}
export default App;
