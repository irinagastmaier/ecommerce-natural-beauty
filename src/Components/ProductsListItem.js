import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const ProductsListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='row-1' style={{ width: "15rem", height: "22rem" }}>
      <Link
        key={item.id}
        to={{ pathname: `/products/${item.name}`, state: item }}
      >
        <img
          variant='top'
          src={item.image_link}
          style={{ width: "8rem", height: "8rem" }}
          alt='product'
        />
        <ul className='row-2'>
          <li className='brand'>{item.brand}</li>
          <li className='name'>{item.name}</li>
          <li className='type'>{item.product_type}</li>
          <li className='price'>
            {item.price} {item.price_sign}
          </li>
        </ul>
      </Link>
      <button
        className='submit'
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
        add to cart
      </button>
    </div>
  );
};
