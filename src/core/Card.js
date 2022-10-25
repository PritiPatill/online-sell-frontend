import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = () => {},
  reload
}) => {
  const [redirect, setRedirect] = useState(false);

  const cartTitle = product ? product?.name : "A photo from pixel";
  const cartDescription = product
    ? product?.description
    : "Default description";
  const cartPrice = product ? product?.price : "DEFAULT";

  const showAddToCart = () => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = () => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product?._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  const getRedirect = () => {
    if (redirect) return <Navigate to="/cart" />;
  };

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getRedirect()}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap mt-3">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart()}</div>
          <div className="col-12">{showRemoveFromCart()}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
