import React from 'react';
import CatalogoItem from './CatalogItem';
import './Cata.css'; // Importa los estilos CSS

const Paquete= () => {
    return (
        <div className="catalogo">
            <CatalogoItem tipo="Paquete 1 " imagen="/images/Hotel.png" />
            <CatalogoItem tipo="Paquete 2" imagen="/images/Bungee.png" />
            <CatalogoItem tipo="Paquete 3" imagen="/images//Bus.png" />
            
        </div>
    );
};

export default Paquete;
