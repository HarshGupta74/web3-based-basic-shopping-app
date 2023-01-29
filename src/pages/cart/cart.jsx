import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import web3 from "web3";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const checkWallet = async () => {
    if (window.ethereum) {
      const web3Provider = window.ethereum;
      try {
        await web3Provider.enable();
        const web3Instance = new web3(web3Provider);
        // check if address is available
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts[0]) {
          checkout();
          navigate("/checkout");
        } else {
          alert("Please connect your wallet");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={checkWallet}>Checkout</button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
