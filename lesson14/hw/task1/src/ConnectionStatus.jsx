import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [statusData, setStatus] = useState({
    status: 'online',
  });
  useEffect(() => {
    const isOnline = () => {
      setStatus({
        status: 'online',
      });
    };
    window.addEventListener('online', isOnline);

    return () => {
      window.removeEventListener('online', isOnline);
    };
  });
  useEffect(() => {
    const isOffline = () => {
      setStatus({
        status: 'offline',
      });
    };

    window.addEventListener('offline', isOffline);
    return () => {
      window.removeEventListener('offline', isOffline);
    };
  });
  console.log(status);
  const { status } = statusData;
  let className = 'status';
  if (status === 'offline') {
    className += ' status_offline';
  }
  return <div className={className}>{status}</div>;
};

export default ConnectionStatus;
