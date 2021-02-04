import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };
  componentDidMount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isOnline);
    window.removeEventListener('offline', this.isOffline);
  }
  isOnline = () => {
    this.setState({
      status: 'online',
    });
  };
  isOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    const { status } = this.state;
    const className = `status ${status === 'offline' ? 'status_offline' : ''}`;

    return <div className={className}>{status}</div>;
  }
}

export default ConnectionStatus;
