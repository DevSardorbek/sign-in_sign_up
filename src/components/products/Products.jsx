import React from "react";
import "../../sass/__products.scss";
const Products = ({ data }) => {
  console.log(data);
  return (
    <div className="products__wrapper">
      <div className="container">
        <div className="products__section">
          {data?.data?.products?.map((product) => (
            <div className="products__card" key={product.id}>
              <img src={product.urls[0]} alt="" width={200} />
              <div className="products__info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
