import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitems from '../Reviewitems/Reviewitems';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [data , setData] = useState([]);
    const [orderPlace , setorderPlace] = useState(false);
    const history= useHistory()
 const placeOrder = () => {
    history.push('/shipment')
    }
    useEffect(() => {
        const getData = getDatabaseCart();
        const productKeys = Object.keys(getData);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd =>pd.key === key);
            product.quantity = getData[key];
            return product;
        });
        setData(cartProducts);
    },[])
    console.log(data);
    const removeItem = (deletekey) => {
        removeFromDatabaseCart(deletekey);
        // console.log("clicked ",romovekey);
        const removekey = data.filter(getData=> getData.key !== deletekey)
        setData(removekey);
    }
    let thankyou;
    if(orderPlace){
        thankyou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            <h1>Total Product : {data.length}</h1>
            {
                data.map(pd=><Reviewitems 
                    key={pd.key}
                    removeItem={removeItem}
                    pd={pd}
                ></Reviewitems>)
            }
            {thankyou}
            </div>
             
            <div className="cart-container">
                    <Cart cart={data}>
                    {
                        data.length && <button onClick={placeOrder} className= "main-btn" >
                        Place Order
                    </button>
                    }
                    </Cart>
            </div> 
            
        </div>
        
    );
};

export default Review;