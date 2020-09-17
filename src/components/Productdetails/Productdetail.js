import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdetail = () => {
    let { productkey } = useParams();
    const product = fakeData.find(pd=>pd.key===productkey);
    return (
        <div>
            <Product product={product}
                     showaddtocart={false}
            
            ></Product>
        </div>
    );
};

export default Productdetail;