import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction} from "../Store/Actions";
import { ProductsListItem } from "./ProductsListItem";

export default function ProductList({ searchedProducts }) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.productsReducer);
  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);


  return (
    <div className='page'>
      <h1>Products</h1>
      <p> Vegan, cruelty free and made with the best raw materials. </p>
      <div className='productlist-container'>
        {searchedProducts && searchedProducts.map(item => <ProductsListItem key={item.id} item={item} />) }
        {state.productsArray && state.productsArray.map(item => <ProductsListItem key={item.id} item={item} />)}
{/*    { searchedProducts ?  
       searchedProducts.map(item => <ProductsListItem key={item.id} item={item} />) :
      state.productsArray.map(item => <ProductsListItem key={item.id} item={item} />) } */}
      </div>
    </div>
  );
}
