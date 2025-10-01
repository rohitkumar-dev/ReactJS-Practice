import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Api({ search }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    //cleanup code
    return () => {
      controller.abort();
    };
  }, [search]);

  if (error) {
    return <h2>Something went wrong!</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Number of Products are: {products.length}</h2>
    </div>
  );
}

export default Api;
