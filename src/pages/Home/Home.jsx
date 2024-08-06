import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from "../../components/ProductCard/ProductCard";
import { getAllProducts } from '../../services/product-services';
import styles from "./Home.module.scss";

const PRODUCTS_PER_PAGE = 6;

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log("Products:: ", products);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage -1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  if (!products.length) {
    return <div> Loading... </div>
  }

  return (
    <div>
      <Header />
      <h1 className={styles.heading}>Our Products</h1>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className={styles.productWrapper}>
          {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;