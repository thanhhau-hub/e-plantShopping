import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 20, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Peace Lily", price: 25, image: "https://via.placeholder.com/150" }
  ],
  Outdoor: [
    { id: 3, name: "Rose Plant", price: 15, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Bamboo Palm", price: 30, image: "https://via.placeholder.com/150" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setDisabledButtons([...disabledButtons, plant.id]);
  };

  return (
    <div>
      <h2>Our Plants</h2>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {plants[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>
              <button
                onClick={() => handleAddToCart(plant)}
                disabled={disabledButtons.includes(plant.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
