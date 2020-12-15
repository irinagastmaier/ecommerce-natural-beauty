import Axios from "axios";

export const helpFetchProducts = async () => {
    const options = {
        method: "GET",
        url: "https://makeup.p.rapidapi.com/products.json",
        params: { product_tags: "vegan" },
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
          "x-rapidapi-host": "makeup.p.rapidapi.com",
        },
      };
  await Axios.request(options);
};
