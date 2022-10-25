import React, { useState, useEffect } from "react";

import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

import "../styles.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {products?.map((product, index) => (
          <Card
            product={product}
            key={index}
            addtoCart={false}
            removeFromCart={true}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h2>This section is for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Home Page" description="Welcome to online tshirt store">
      <div className="row text-center">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">{loadCheckout()}</div>
      </div>
    </Base>
  );
};

export default Cart;
