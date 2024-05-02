import React from 'react';
import CatalogoItem from './CatalogItem';
import './Cata.css'; // Importa los estilos CSS

const Catalog = () => {
    return (
        <div className="catalogo">
            <CatalogoItem tipo="Hospedaje" imagen="/images/image2.png" />
            <CatalogoItem tipo="Servicios" imagen="/images/image2.png" />
            <CatalogoItem tipo="Realidad Aumentada" imagen="/images/image2.png" />
            <CatalogoItem tipo="Reservas cualquier servicio" imagen="/images/image2.png" />
            <CatalogoItem tipo="Paquetes Turísticos" imagen="/images/image2.png" />
            <CatalogoItem tipo="Experiencias y Actividades Locales" imagen="/images/image2.png" />
            <CatalogoItem tipo="Transporte" imagen="/images/image2.png" />
            <CatalogoItem tipo="Seguro de Viaje" imagen="/images/image2.png" />
        </div>
    );
};

export default Catalog;
