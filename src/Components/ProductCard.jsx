import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm rounded-4 h-100">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.name}
        style={{ objectFit: "contain", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{product.name}</h5>
        <p className="card-text text-success fs-5">KSh {product.price}</p>
        <p className="text-muted small">{product.description}</p>
        <button className="btn btn-primary w-100 mt-2">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
