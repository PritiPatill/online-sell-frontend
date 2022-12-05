import React, { useState, useEffect } from "react";

import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

import "../styles.css";
import Paymentb from "./Paymentb";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

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

  return (
    <Base title="Home Page" description="Welcome to online tshirt store">
      <div className="row text-center">
        <div className="col-6">
          {products.length ? loadAllProducts() : <h3>No Products in cart</h3>}
        </div>
        <div className="col-6">
          <h3>Checkout</h3>
          <Paymentb products={products} reload={reload} setReload={setReload}/>
          </div>
      </div>
    </Base>
  );
};

export default Cart;
