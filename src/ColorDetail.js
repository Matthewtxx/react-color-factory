import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ColorDetail.css';

function ColorDetail({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  if (!selectedColor) {
    return (
      <div>
        <h2>Color Not Found</h2>
        <p>
          <Link to="/colors">Back to Color List</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h2 className="detail-header">Color Detail: {selectedColor.name}</h2>
      <div className="color-box" style={{ backgroundColor: selectedColor.colorCode }}></div>
      <p>
        <Link to="/colors">Back to Color List</Link>
      </p>
    </div>
  );
}

export default ColorDetail;
