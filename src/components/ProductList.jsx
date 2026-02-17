import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy", price:"3.99", inStock: true },
  { id: 2, name: "Bread", category: "Bakery", price:"2.49", inStock: false },
  { id: 3, name: "Apple", category: "Fruits", price:"1.29", inStock: true },
  { id: 4, name: "Cheese", category: "Dairy", price:"4.99", inStock: true },
];

function ProductList({ addToCart, category }) {
  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category);

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
