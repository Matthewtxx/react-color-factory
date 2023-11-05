import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorForm from './ColorForm';
import ColorDetail from './ColorDetail';
import './Navbar.css';

function App() {
  const [colors, setColors] = useState([
    { name: 'Red', colorCode: 'red' },
    { name: 'Green', colorCode: 'green' },
    { name: 'Blue', colorCode: 'blue' },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <nav className="navbar"> {/* Apply the navbar CSS styles */}
        <ul>
          <li>
            <Link to="/colors">Color List</Link>
          </li>
          <li>
            <Link to="/colors/new">Add Color</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<ColorForm onAddColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route
          path="*"
          element={<Navigate to="/colors" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;