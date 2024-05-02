'use client';
import React, { useState } from 'react';
import './TravelForm.css'; // Importa los estilos CSS

export default function TravelForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [travelers, setTravelers] = useState(0);

  return (
    <div className="travel-form">
      <div className="input-section">
        <h2>¿A dónde vamos a ir?</h2>
        
        <div className="input-box">
          <label>ORIGEN</label>
          <input type="text" placeholder="Lugar" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </div>
        
        <div className="input-box">
          <label>DESTINO</label>
          <input type="text" placeholder="Lugar" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        
        <div className="date-inputs">
          <div className="input-box">
            <label>LLEGADA</label>
            <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
          </div>

          <div className="input-box">
            <label>SALIDA</label>
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </div>
        </div>

        <div className="input-box">
          <label>CANTIDAD DE VIAJEROS</label>
          <input type="number" value={travelers} onChange={(e) => setTravelers(parseFloat(e.target.value))} />
        </div>

        <button className='red-button'>Buscar</button> 
      </div>

      <div className="image-section">
        <img src="/images/image2.png" alt="Imagen" />
      </div>
    </div>
  );
}
