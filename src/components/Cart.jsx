function Cart({ cart, removeFromCart }) {

  return (
    <div>

      <h2>Shopping Cart</h2>

      {/* Show message when cart is empty */}
      {cart.length === 0 ? (
        <p>Your Cart is empty.</p>
      
      ) : (

      <ul>

        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} is in your cart.

        {/* TODO: Include Remove Button*/}
        <button 
          data-testid={`remove-${item.id}`}
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

          </li>

        ))}

      </ul>

    )}

    </div>
  );
}

export default Cart;
