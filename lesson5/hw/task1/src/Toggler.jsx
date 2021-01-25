import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Off',
    };
  }
  toggler = e => {
    e.target.textContent === 'Off'
      ? this.setState({ buttonText: 'On' })
      : this.setState({ buttonText: 'Off' });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggler}>
        {this.state.buttonText}
      </button>
    );
  }
}

export default Toggler;
