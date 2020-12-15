import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart.js";

export default function Sets({ data }) {
  const [addtocart, setAddtoCart] = useState(false);
  return (
    <div className='page'>
      <h1>Sets</h1>

      {addtocart ? (
        <Cart />
      ) : (
        <div className="productlist-container">
          {data &&
            data.map(item => {
              return (
                <div className="row-1" style={{ width: '15rem', height: "22rem"}}>
                  <Link
                    key={item.id}
                    to={{ pathname: `/products/${item.name}`, state: item }}
                  >
                    <img variant='top' src={item.image_link} style={{width: "8rem", height: "8rem"}} alt="product"/>
                    <ul className='row-2'>
                      <li className="brand">{item.brand}</li>
                      <li className="name">{item.name}</li>
                      <li className="type">{item.product_type}</li>
                      <li className="price">
                        {item.price} {item.price_sign}
                      </li>
                    </ul>
                  </Link>
                  <button className="submit" onClick={() => setAddtoCart(true)}>
                    add to cart
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}