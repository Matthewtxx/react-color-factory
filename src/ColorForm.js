import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ColorForm.css'; 

function ColorForm({ onAddColor }) {
  const [newColor, setNewColor] = useState('');
  const [colorValue, setColorValue] = useState('#000000');
  const navigate = useNavigate();

  const handleColorChange = (event) => {
    setNewColor(event.target.value);
  };

  const handleColorPickerChange = (event) => {
    setColorValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddColor({ name: newColor, colorCode: colorValue });
    setNewColor('');

    // Redirect to the home page after form submission
    navigate('/colors');
  };

  return (
    <div className="form-container">
      <h2>Add a New Color</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Color Name:
          <input
            type="text"
            value={newColor}
            onChange={handleColorChange}
            className="color-input"
          />
        </label>
        <label className="label">
          Color Picker:
          <input
            type="color"
            value={colorValue}
            onChange={handleColorPickerChange}
            className="color-input"
          />
        </label>
        <button type="submit" className="button">
          Add Color
        </button>
      </form>
    </div>
  );
}


export default ColorForm;
