import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Navbar from "./Navbar";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "/images/aloe.jpg",
    category: "Indoor",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 12,
    image: "/images/snake.jpg",
    category: "Indoor",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 15,
    image: "/images/lily.jpg",
    category: "Indoor",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 9,
    image: "/images/spider.jpg",
    category: "Indoor",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 18,
    image: "/images/rubber.jpg",
    category: "Indoor",
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 20,
    image: "/images/zz.jpg",
    category: "Indoor",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      <Navbar />

      <div className="product-list">
        <h2>Our Plants</h2>

        <div className="products">
          {plants.map((plant) => (
            <div key={plant.id} className="product-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                disabled={isAdded(plant.id)}
                onClick={() => dispatch(addToCart(plant))}
              >
                {isAdded(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
