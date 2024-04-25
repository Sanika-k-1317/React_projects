import React, { useState, useEffect } from "react";
import { useFetch } from "./use-fetch";
const url = "https://course-api.netlify.app/api/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  //   this is our own custom hook
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"} </h2>
    </div>
  );
};
export default Example;
