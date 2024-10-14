import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import mockList from '../assets/mockList.json';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = mockList; 
        
        if (categoryId) {
          const filteredProducts = data.filter(product => product.category === categoryId);
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h1>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <Item key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
