import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleaddproduct=(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        const sameproduct = newCart.filter(pd=>pd.key===product.key);
        const count=sameproduct.length;
        addToDatabaseCart(product.key,count)
    }
    
    
    return (
        <div className="shop-container">
            <div className="product-container">
           
            {
                products.map(pd => <Product
                     handleaddproduct={handleaddproduct}
                     product={pd}
                     showaddtocart={true}
                     >

                     </Product>)
            }
            
            </div>  
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
                <Link to="/review">
                    <button className= "main-btn" >
                        Review Item 
                    </button>
                 </Link>
            </div>          
            
            
        </div>
    );
};

export default Shop;