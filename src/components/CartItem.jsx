import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeItem,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + calculateItemTotal(item.price, item.quantity),
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Item Total: $
                  {calculateItemTotal(item.price, item.quantity)}
                </p>

                <button onClick={() => dispatch(increment(item.id))}>
                  +
                </button>

                <button
                  onClick={() =>
                    item.quantity === 1
                      ? dispatch(removeItem(item.id))
                      : dispatch(decrement(item.id))
                  }
                >
                  -
                </button>

                <button onClick={() => dispatch(removeItem(item.id))}>
                  Delete
                </button>
              </div>
            ))}

            <h3>Total Amount: ${totalAmount}</h3>

            <button onClick={() => navigate("/checkout")}>
              Checkout
            </button>

            <button onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default CartItem;
