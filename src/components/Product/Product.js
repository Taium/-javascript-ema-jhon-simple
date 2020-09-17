import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name"><Link to={"/Product/"+key}>{name}</Link></h3>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock- order soon</small></p>
               { props.showaddtocart && <button className="main-btn"
                        onClick={()=>props.handleaddproduct(props.product)}
                
                ><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>}
            </div>
        </div>
    );
};

export default Product;