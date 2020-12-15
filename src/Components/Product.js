import React, { useState } from "react"; 
import basket from "./images/basket.svg";
import {useDispatch} from 'react-redux'



export default function Product(props) {
  const dispatch = useDispatch()

  let item = props.location.state;
  const [description, setDescription] = useState(false);
  return (
    <div className='item-container'>
        <div className='a'>
        <p>{item.name}</p>
        </div>
        <div className=' b'>
        <p>{item.brand}</p>
        </div>
          <div className=' c'>
            <img src={item.image_link} alt='product' />
          </div>  
          <div className=" d">  
          <select name='color'>
            <option>select color</option>
            {item.product_colors.map((product, i) => {
              return (
                <option
                  style={{ backgroundColor: product.hex_value[i] }}
                  key={i}
                >
                  {product.colour_name}
                </option>
              );
            })}
          </select>
        <p> Price: {item.price + item.price_sign}</p>
        <button className='btn-submit' 
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
          <img src={basket} className='basket' />
          ADD TO CART
        </button>
        </div>
        <div className='e'>
          <ul>
          {item.tag_list.map(product => {
            return <li>#{product}  </li>;
          })}
</ul>
          {description && <p>{item.description}</p>}

          <button
            className='btn-description'
            onClick={() => setDescription(!description)}
          >
            Description
          </button>
        </div>
      </div>
  );
}