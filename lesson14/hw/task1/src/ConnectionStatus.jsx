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
    const isOffline = () => {
      setStatus({
        status: 'offline',
      });
    };
    window.addEventListener('online', isOnline);
    window.addEventListener('offline', isOffline);

    return () => {
      window.removeEventListener('online', isOnline);
      window.removeEventListener('offline', isOffline);
    };
  }, []);

  const { status } = statusData;
  let className = 'status';
  if (status === 'offline') {
    className += ' status_offline';
  }
  return <div className={className}>{status}</div>;
};

export default ConnectionStatus;
