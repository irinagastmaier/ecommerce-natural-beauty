import Axios from "axios";

export const fetchProductsAction = () => async dispatch => {

    const options = {
        method: "GET",
        url: "https://makeup.p.rapidapi.com/products.json",
        params: { product_tags: "vegan" },
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
          "x-rapidapi-host": "makeup.p.rapidapi.com",
        },
      };

  const response = await Axios.request(options);

  dispatch({ type: "GET_PRODUCTS", payload: response.data });
};

//PRODUCT LIST

export const addToCart = (value) =>{
    return {
        type: "ADD_TO_CART", payload: value
    }
}

//CART

export const checkout = (value) =>{
  return {
      type: "CHECKOUT", payload: value
  }
}


