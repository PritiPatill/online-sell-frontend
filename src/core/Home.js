import React, { useState, useEffect } from "react";

import Base from "./Base";
import Card from "./Card";

import "../styles.css";
import { getAllProducts } from "../admin/helper/adminapicall";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getAllProducts()
      .then((data) => {
        if (data?.error) setError(data?.error);
        else setProducts(data)
      })
      .catch((err) => console.log("getAllProducts error", err));
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to online tshirt store">
      <div className="row text-center">
        <h1 className="text-white">All of tshirts</h1>
        {products?.map((product, index) => (
          <div key={index} className="col-4 mb-4">
            <Card product={product} />
          </div>
        ))}
      </div> 
    </Base>
  );
};

export default Home;
