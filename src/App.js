import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import CarouselHome from "./Components/CarouselHome";
import ProductList from "./Components/ProductList";
import Product from "./Components/Product";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Cart from "./Components/Cart";
import Sale from "./Components/Sale";
import Sets from "./Components/Sets";
import logo from "./Components/images/logo.svg";
import basket from "./Components/images/basket.svg";
import { fetchProductsAction } from "./Store/Actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.scss";

export default function App() {

  const [searchValue, setsearchValue] = useState("");

  const dispatch = useDispatch();

  const quantity = useSelector(state => state.cartReducer.quantity);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const productsArray = useSelector(
    state => state.productsReducer.productsArray
  );
  const searchedProducts = productsArray.filter(
    product => product.product_type == searchValue
  );

  const searchData = e => {
    e.preventDefault();
  };

  return (
    <>
      <HashRouter>
        <div className='App'>
          <div className='navbars'>
            <div className='fixed-navbar'>
              <nav className='first-navbar'>
                <div className='left'>
                  <Link to='/'>
                    <img src={logo} alt='logo' />
                  </Link>
                  <form onSubmit={searchData}>
                    <input
                      type='text'
                      placeholder='type here to search'
                      onChange={e => setsearchValue(e.target.value)}
                    />
                    <button className='search' type='submit'>
                      &#x1F50D;
                    </button>
                  </form>
                </div>
                <div className='right'>
                  <Link to='/login' className='text-link'>
                    Sign In
                  </Link>
                  <Link to='/cart' className='cart-link'> 
                    <img src={basket} alt='basket' />  <span className="quantity-cart"> {quantity} </span>
                  Your Cart
                  </Link>
                </div>
              </nav>
              <nav className='second-navbar'>
                <Link to='/products' className='text-link'>
                  Products
                </Link>
                {/* <Link to='/sets' className='text-link'>
                  Sets
                </Link>
                <Link to='/sale' className='text-link'>
                  Sale
                </Link> */}
              </nav>
            </div>
          </div>

          <Switch>
            <Route exact path='/'>
              <br />
              <CarouselHome />
            </Route>
            <Route path='/products/:name' component={Product} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route path='/sets'>
              <Sets />
            </Route>
            <Route path='/sale'>
              <Sale />
            </Route>
            <Route path='/cart' component={Cart} />
            <Route path='/products'>
              <ProductList searchedProducts={searchedProducts} />
            </Route>
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </HashRouter>
    </>
  );
}
