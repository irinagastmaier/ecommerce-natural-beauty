import React, {useState} from "react";
import { checkout } from "../Store/Actions";
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import PaypalPage from '../Components/PaypalPage'


export default function Cart() {
  const element = <FontAwesomeIcon icon={faTrashAlt} />
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const total = useSelector(state => state.cartReducer.total);

  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>
      <div className='cart-container-item'>
        {cart.map(item => {
          return (
            <div className='cart-item'>
              <ul>
                <li>
                  <img src={item.image_link} alt='product' />
                </li>
                <li> {item.name}</li>
                <p
                onDoubleClick={() =>
                  dispatch({ type: "REMOVE_CART_ITEM", payload: item })
                }
              >
                {element} Remove
              </p>
                <li>
                  {item.price}
                  {item.price_sign}
                </li>
              </ul>
            </div>
          );
        })}
        <div className='cart-container-total'>
          <div>
          <h2>Order Summary </h2>
          </div>
          <div className="total">
          <ul>
            <li className='total-label'>Products</li>
            <li className='total-number'>{total} $</li>
            <li className='total-label'>Shipping- Stantard</li>
            <li className='total-number'>0,0$</li>
            <li className='total-label bold'>Subtotal</li>
            <li className='total-number bold'>{total} $</li>
          </ul>
          </div>
        </div>
        {/* <button className="btn" onClick={() => checkout()}>Checkout</button> */}
        <PaypalPage />
      </div>
    </div>
  );
}
