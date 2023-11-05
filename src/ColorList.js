import React from 'react';
import { Link } from 'react-router-dom';
import './ColorList.css'; // Import the CSS file

function ColorList({ colors }) {
  return (
    <div className="list-container">
      <h1>List of Colors</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={index} className="list-item">
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;
