import React from "react";
import Card from "./Card";

const products = [
  { id: 1, name: "Product 1", description: "Description of Product 1", price: 10 },
  { id: 2, name: "Product 2", description: "Description of Product 2", price: 20 },
  { id: 3, name: "Product 3", description: "Description of Product 3", price: 30 }
];

const ProductList = () => {
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} title={product.name}>
          <p>Price: ${product.price}</p>
        </Card>
      ))}
    </>
  );
};

export default ProductList;