import React, { useEffect, useState } from 'react';
import './cart.scss';
import { useCartContext } from '../../context/cartcontext';

import useApiCall from '../../customHooks/ApiHook';

export default function Cart() {

  const [totalprice, setTotalPrice] = useState(0);

  const { cartItem , setCartItem} = useCartContext();

  


  const cartKey = Object.keys(cartItem);


  const accesskey = 'jgt_lh5w-iQJz57Fmn6j0AW_n08PHx6xi96pk8iNhaA'; // Corrected access key

  const { isLoading, data, apiError } = useApiCall(null, "GET", 'https://api.unsplash.com/photos/random', accesskey);

  // Log data if there's no API error
  useEffect(() => {
    if (!apiError && data?.urls?.raw) {
      console.log("data url",data.urls.raw);
    }
  }, [data, apiError]);

  useEffect(() => {
    setTotalPrice(cartKey.reduce((acc, cur) => {
      return acc + cartItem[cur].price * cartItem[cur].quantity;
    }, 0)); // Initialize with 0
  }, [cartKey, cartItem]);

  let imageUrl = data && data.urls && data.urls.raw ? data.urls.raw : "";

  const handleRemoveItem = (itemId) => {
    const newCartItem = { ...cartItem };
    delete newCartItem[itemId];
    setCartItem(newCartItem);
  };

  const handlePlaceOrder = () => {
    // Implement logic to place order
    
  };

  return (
    <>
      <h2 className='cartheading'>My Cart</h2>
      <div className="cart">

        {isLoading ? (
          <p>I am Loading</p>
        ) : (
          <div className="product-item">
            {cartKey.length > 0 ? (
              cartKey.map((item) => (
                <div className="product-display" key={item}>
                  <div className='product-image'>
                    {apiError ? (
                      <p>I am not available= {apiError}</p>
                    ) : (
                      <img src={imageUrl} alt="product" height={200} width={200} />
                    )}
                  </div>
                  <div className='product-details'>
                    <p>Product Id : {cartItem[item].id}</p>
                    <p>Product Name :{cartItem[item].name}</p>
                    <p>Product Price : {cartItem[item].price}</p>
                    <p>Product Quantity : {cartItem[item].quantity}</p>
                  </div>
                  <button onClick={() => handleRemoveItem(cartItem[item].id)}>Remove</button>
                </div>
              ))
            ) : (
              <div>
                <p>No Item Found, Please add items in the cart</p>
              </div>
            )}
            <button className='placeorder' onClick={handlePlaceOrder}>Place Order</button>
          </div>
        )}
        <div className="cart-math">
          {/* I will show here total price and total quantity */}

          <div className='math-main'>
            <div className='price-heading'>
              Price Details:
            </div>
            <hr />
            <div className='price-summary'>
              <p>Price:</p>
              <p>Discount: </p>
              <p>Delivery Charges:</p>

            </div>
            <hr />
            {/* how to give dotted line */}
            <div className='price-total'>
              <strong>Total Price: {totalprice}</strong>
            </div>
            <hr />
            {/* how to give dotted line */}
            <div className='price-message'>
              <p>You will save $ in this order</p>
            </div>
            <hr />
          </div>


        </div>
      </div>
    </>
  );
}
