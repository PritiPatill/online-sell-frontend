import React, { useState, useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";

import { isAuthenticated } from "../auth/helper";
import { getToken, processPayment } from "./helper/paymentbhelper";
import { cartEmpty } from "./helper/cartHelper";
import { createOrder } from "./helper/orderHelper";

const Paymentb = ({
  products = [],
  reload = undefined,
  setReload = (f) => f,
}) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: "",
  });
  const { user, token } = isAuthenticated();

  const getMyToken = () => {
    getToken(user._id, token).then((info) => {
      if (info.error) {
        setInfo({ ...info, error: info?.error });
      } else {
        setInfo({ clientToken: info?.clientToken });
      }
    });
  };

  useEffect(() => {
    getMyToken();
  }, []);

  const getAmount = () => {
    let amount = 0;
    products?.map(p => {
        amount = amount + p.price
    })

    return amount
  }

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getNonce = info?.instance.requestPaymentMethod().then(data => {
        nonce = data?.nonce
        const paymentData = {
            paymentMethodNonce: nonce,
            amount: getAmount()
        }
        processPayment(user._id, token, paymentData)
        .then(resp => {
            setInfo({...info, success: resp.success, loading: false})
            const orderData = {
                products,
                transaction_id: resp?.transaction.id,
                amount: resp?.transaction.amount
            }
            createOrder(user._id, token, orderData)
            cartEmpty(() => console.log("does our app crash"))
            setReload(!reload)
        })
        .catch(error => {
            setInfo({loading: false, success: false})
        })
    })
  };

  const showDropInUI = () => (
    <div>
      {info?.clientToken !== null && products.length ? (
        <div>
          <DropIn
            options={{ authorization: info?.clientToken }}
            onInstance={(instance) => setInfo({ instance })}
          />
          <button className="btn btn-block btn-success" onClick={onPurchase}>Buy</button>
        </div>
      ) : (
        <h3>Please login or add something to cart</h3>
      )}
    </div>
  );

  return (
    <div>
      <h3>Your bill is : ${getAmount()}</h3>
      {showDropInUI()}
    </div>
  );
};

export default Paymentb;
