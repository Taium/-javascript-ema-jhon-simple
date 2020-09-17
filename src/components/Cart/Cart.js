import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
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
    let grandtotal=total+shipping+tax;
    return (
        <div className="cart">
            <h4> Order Summery</h4>
            <p>items : {cart.length}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Total Cost: {grandtotal}</h5>
            {
                props.children
            }
            
            
        </div>
    );
};

export default cart;