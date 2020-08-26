import React from 'react';
import './Cart.css'
const cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        total=total+product.price;
    }
    let shipping=0;
    if(total>0){
        shipping=5;
    }
    let tax = Math.round(total/10);
    return (
        <div className="cart">
            <h4> Order Summery</h4>
            <p>items : {cart.length}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Cost: {total+shipping+tax}</p>
            
            
        </div>
    );
};

export default cart;