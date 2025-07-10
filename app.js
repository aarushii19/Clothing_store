function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [items, setItems] = React.useState(PRODUCTS);

  React.useEffect(() => {
    const input = document.getElementById("search");
    input.addEventListener("input", (e) => {
      setSearchTerm(e.target.value.toLowerCase());
    });
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  }

  function buyNow(item) {
    alert(`Buying ${item.name} for ₹${item.price}`);
  }

  return (
    <div className="product-list">
      {filteredItems.map((item) => (
        <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => buyNow(item)}>Buy Now</button>
        </div>

      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
