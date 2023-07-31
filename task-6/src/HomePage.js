import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>Please select the page you want to visit:</p>
      <div>
        <Link to="/consumer">
          <button>Consumer Page</button>
        </Link>
        <Link to="/manager">
          <button>Stock Managing Page</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
