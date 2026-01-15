function CartItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>

      <button>+</button>
      <button>-</button>
      <button>Remove</button>
    </div>
  );
}

export default CartItem;
