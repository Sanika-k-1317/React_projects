import React from "react";
import Product from "./products";
import { useFetch } from "./use-fetch";

const url = "https://course-api.netlify.app/api/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}{" "}
      </section>
    </div>
  );
};
