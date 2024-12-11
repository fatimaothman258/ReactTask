import React, { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [showProduct, setShowProduct] = useState(false);

  const product = {
    name: "iPhone 16",
    price: "$8000",
    description: "A premium smartphone with advanced features.",
  };

  return (
    <div style={styles.container}>
  
      <h1 style={styles.counterText}>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} style={styles.button}>
        Increase
      </button>
      <button
        onClick={() => setShowProduct(!showProduct)}
        style={styles.button}
      >
        Show Product
      </button>

    
      {showProduct && (
        <div style={styles.productContainer}>
          <h2 style={styles.productTitle}>Product Details</h2>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      )}
    </div>
  );
}


const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "pink",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "auto",
  },
  counterText: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#800080",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  productContainer: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    color: "#555",
  },
  productTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
  },
};

export default App;

