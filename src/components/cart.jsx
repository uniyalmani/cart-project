import React, { Component } from 'react';
import CartItem from './cartitem';

const Cart = (props) => {
 
        const {products} = props;
        return ( 
            <div className="cart">
            {products.map((product) => {
              return (
                <CartItem
                  product={product}
                  key={product.id}
                  onIncrement = {props.onIncrement}
                  onDecrement = {props.onDecrement}
                  onDelete = {props.onDelete} />
    
              )
            })}
          </div>
         );
    }

 
export default Cart;