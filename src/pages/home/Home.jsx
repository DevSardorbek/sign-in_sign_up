import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";

const Home = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="home__section">
      <Products data={data} />
    </div>
  );
};

export default Home;
