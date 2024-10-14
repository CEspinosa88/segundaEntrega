import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className='product-item'>
      <h2>{product.name}</h2>
      <img src={product.url} style={{width: '250px', height: '250px'}} />
      <br />
      <NavLink to={`/item/${product.id}`} activeclassname="active">
        Ver detalle
      </NavLink>
    </div>
  );
};

export default Item;
