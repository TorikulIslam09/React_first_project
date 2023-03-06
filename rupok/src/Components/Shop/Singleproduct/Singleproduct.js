import React from 'react';
import './Singleproduct.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Singleproduct = (props) => {
    const {singleproduct, Addtocart} = props;
    // const {img, name, price, category, ratings} = props.singleproduct;
    const {img, name, price, category, ratings} = singleproduct;
    // const {Addtocart} = props.singleproduct;
    // console.log()
    return (
        <div className='items'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className="title">
                <h2>{name}</h2>
                <p>price: {price}</p>
                <p>category: {category}</p>
                <p>ratings:{ratings}</p>

            </div>
            <div className="footer">
                {/* <p onClick={()=>props.Addtocart(props.singleproduct)}>Add to card </p>
                 */
                <p onClick={()=>Addtocart(singleproduct)}>Add to card {<FontAwesomeIcon icon={faCoffee} />}</p>
                
                }
            </div>
        </div>
    );
};

export default Singleproduct;