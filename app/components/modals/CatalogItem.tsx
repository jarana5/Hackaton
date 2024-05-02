import React from 'react';
import './Catalog.css';

const CatalogoItem = ({ tipo, imagen }) => {
    return (
        <div className="catalogo-item">
            <img src={imagen} alt={tipo} />
            <p>{tipo}</p>
        </div>
    );
};

export default CatalogoItem;
