import React from 'react';
import Destino from './Destino';
import './Cata.css'; // Importa los estilos CSS

const Real= () => {
    return (
        <div className="catalogo">
            <Destino
  nombre="Hotel Playa"
  descripcion="Bella vista de un hotel"
  imagen="/images/Hotel.png"
  url="https://www.example.com/nosara.html"
/>

<Destino
  nombre="Excursión de senderismo"
  descripcion="Disfruta de la naturaleza con esta emocionante excursión de senderismo."
  imagen="/images/Hotel.png"
  url="https://www.example.com/hiking-excursion.html"
/>

<Destino
  nombre="Tour de la ciudad"
  descripcion="Explora los lugares históricos y culturales de la ciudad en este tour guiado."
  imagen="/images/Hotel.png"
  url="https://www.example.com/city-tour.html"
/>

<Destino
  nombre="Playa paradisíaca"
  descripcion="Relájate en las hermosas playas de arena blanca y aguas cristalinas."
  imagen="/images/Hotel.png"
  url="https://www.example.com/paradise-beach.html"
/>
            
            
        </div>
    );
};

export default Real;
