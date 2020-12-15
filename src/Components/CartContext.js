import React, { useEffect, useState, createContext} from "react";
import Axios from "axios";
import {Cart, sumItems} from './Cart'

export const CartContext =  createContext(null);


export default function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  

  const getProducts = () => {
    const options = {
      method: "GET",
      url: "https://makeup.p.rapidapi.com/products.json",
      params: { product_tags: "vegan" },
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        "x-rapidapi-host": "makeup.p.rapidapi.com",
      },
    };

    Axios.request(options).then(result => setProducts(result.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  let value = { cart, setCart, products, setProducts };

return(
  <CartContext.Provider value={value}>
  {children}
</CartContext.Provider>
)
}
