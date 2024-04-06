import React, { useState } from 'react';
import './Product.scss';
import productobj from './productobj';
import { useContext } from 'react';
import cartContext, { CartContextProvider, useCartContext } from '../../context/cartcontext';

export default function Product() {


  const { cartItem, setCartItem } = useCartContext();

  // State to manage quantity for each product
  const [quantities, setQuantities] = useState(productobj.map(() => 1));

  // Function to handle increasing quantity for a specific product
  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  // Function to handle decreasing quantity for a specific product
  const decreaseQuantity = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleAddToCart = (product, index) => {
    // Check if quantity is greater than 0 before adding to cart
    if (quantities[index] > 0) {
      let cartList = (prevCartItem => {
        const newCartList = { ...prevCartItem };

        // Use product ID as the key for cart items
        if (!newCartList[product.id]) {
          newCartList[product.id] = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 0
          };
        }

        newCartList[product.id].quantity += quantities[index];
        setQuantities(prevQuantities => {
          // Reset quantity to 1 after adding to cart
          const newQuantities = [...prevQuantities];
          newQuantities[index] = 1;
          return newQuantities;
        });
        //console.log("new cart list",newCartList);
        return newCartList;
      });
      setCartItem(cartList);
      console.log("new cart item",cartItem);
    }
  };

  return (
    <div className='products'>
      {productobj.map((product, index) => (
        <div key={index} className='main'>
          <h3 className='product-name'>Products with id = {product.id}</h3>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div className='quantity-container'>
            <button onClick={() => decreaseQuantity(index)}>-</button>
            <input type='text' value={quantities[index]} readOnly />
            <button onClick={() => increaseQuantity(index)}>+</button>
          </div>
          <hr />
          <div className='product-footer'>
            <input type='submit' name='addtocart' value='Add To Cart' onClick={() => handleAddToCart(product, index)} />
          </div>
        </div>
      ))}
    </div>
  );
}
