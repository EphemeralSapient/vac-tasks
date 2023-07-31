import React from 'react';
import { Link } from 'react-router-dom';

const AboutMobiles = () => {
  return (
    <div>
      <h1>About Mobiles</h1>
      <ul>
        <li>
          <Link to="/brand1">Brand 1</Link>
        </li>
        <li>
          <Link to="/brand2">Brand 2</Link>
        </li>
        <li>
          <Link to="/brand3">Brand 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutMobiles;
