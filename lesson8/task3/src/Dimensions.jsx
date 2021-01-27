import React, { Component } from 'react';

class Dimension extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimesions(innerWidth, innerHeight);
    document.title = `${innerWidth} x ${innerHeight}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimesions(innerWidth, innerHeight);
  };

  setDimesions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return <div>{`${this.state.width} x ${this.state.height}`}</div>;
  }
}

export default Dimension;