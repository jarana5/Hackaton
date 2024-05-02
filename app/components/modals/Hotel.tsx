import React from 'react';
import CatalogoItem from './CatalogItem';
import './Cata.css'; // Importa los estilos CSS

const Hotel= () => {
    return (
        <div className="catalogo">
            <CatalogoItem tipo="Hotel 1 " imagen="/images/Hotel.png" />
            <CatalogoItem tipo="Hotel 2" imagen="/images/Hotel.png" />
            <CatalogoItem tipo="Hotel 3" imagen="/images/Hotel.png" />
            
        </div>
    );
};

export default Hotel;