import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockList from '../assets/mockList.json'; 

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {

        const data = mockList;

        const selectedProduct = data.find(product => product.id === Number(id));
        if (!selectedProduct) {
          throw new Error('Producto no encontrado');
        }
        setProduct(selectedProduct);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Cargando detalle del producto...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.url} alt={product.name} style={{ width: '250px', height: '250px' }} />
    </div>
  );
};

export default ItemDetailContainer;
