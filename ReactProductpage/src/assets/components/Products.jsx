import React from "react";

const productList = [
  {
    id: 1,
    name: "Smartphone X",
    description: "A powerful smartphone with stunning display.",
    price: "₹52,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  
  {
    id: 3,
    name: "Smartwatch Pro",
    description: "Keep track of your health and notifications.",
    price: "₹14,500",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
  },
   {
    id: 1,
    name: "Smartphone X",
    description: "A powerful smartphone with stunning display.",
    price: "₹52,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  
  {
    id: 3,
    name: "Smartwatch Pro",
    description: "Keep track of your health and notifications.",
    price: "₹14,500",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="page-title">Our Products</h1>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              loading="lazy"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="btn btn-buy">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
