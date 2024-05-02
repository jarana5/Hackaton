import React from 'react';
import './Destino.css';

const Destino = ({ nombre, descripcion, imagen, url }) => {
    return (
        <div className="destino">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imagen} alt={nombre} />
            </a>
            <div>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <a href="./images/RealidadVirtual.html" target="_blank" rel="noopener noreferrer">Ver más</a>
            </div>
        </div>
    );
};

export default Destino;
