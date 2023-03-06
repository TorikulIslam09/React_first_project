import React, { useEffect, useState } from 'react';
import './Shop.css'
import Singleproduct from './Singleproduct/Singleproduct';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState([])
    useEffect(()=>{

        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const Addtocart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='shop-page'>
            <div className="one-fourth">
                <div className="product-items">
                    {
                     product.map(singleproduct =>
                         <Singleproduct
                         singleproduct={singleproduct}
                         Addtocart={Addtocart}>

                         </Singleproduct>
                       
                         )

                    }
                   
                </div>
            
            </div>
            <div className="one-div">
                <h1>order Summery</h1>
                <p>{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;