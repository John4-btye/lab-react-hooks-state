import React from 'react'

function ProductCard ({ product, addToCart }) {

  return (
    <div>

      <h3>{product.name}</h3>

      <p>Price: {product.price}</p>

      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
