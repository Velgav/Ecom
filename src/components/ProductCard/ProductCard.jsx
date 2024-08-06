import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const defaultImage = "https://via.placeholder.com/150";

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const imgSrc = product.imageURL || defaultImage;//this condition is not satisfying the condition
  return (
    <div className={styles.productWrapper}>
      <img src={product.imageUrl || defaultImage} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => navigate(`/product/${product.id}`)}>
        Click to Buy
      </button>
    </div>
  );
}

export default ProductCard;