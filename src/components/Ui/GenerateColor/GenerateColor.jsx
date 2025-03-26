import React, { useState } from 'react';
import './GenerateColor.css';

export const GenerateColor = () => {
  const coloresAbsolutos = [
    "#FF0000",     
    "#00FF00",    
    "#0000FF",     
    "#FFFF00",     
    "#FF00FF",     
    "#00FFFF",     
    "#000000",    
    "#FFFFFF",     
    "#808080",     
    "#800000",     
    "#808000",     
    "#800080",     
    "#008080",    
    "#C0C0C0",     
    "#FFA500",     
    "#A52A2A"      
  ];

  const [color, setColor] = useState('');

  const handleGenerateColor = () => {
    const colorGenerado = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setColor(colorGenerado);
  };

  return (
    <div className="containerGenerate" style={{ backgroundColor: color }}>
      <h2>Generador de Colores</h2>
      <button className="btn-12" onClick={handleGenerateColor}>
        <span>Generar</span>
      </button>
      <h3>Color generado: {color}</h3>
    </div>
  );
};
