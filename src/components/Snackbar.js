import React, { useState, useEffect } from 'react';

const Snackbar = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!isVisible) return null;

  return (
    <div style={styles.snackbar}>
      {message}
    </div>
  );
};

const styles = {
  snackbar: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
};

export default Snackbar;
