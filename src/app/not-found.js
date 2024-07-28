import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Go back to home
      </a>
    </div>
  );
};

export default NotFound;
