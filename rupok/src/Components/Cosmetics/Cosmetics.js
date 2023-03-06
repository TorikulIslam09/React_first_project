import React, { useEffect, useState } from 'react';
import Subcosmetic from './Subcosmetic/Subcosmetic';

const Cosmetics = () => {
    const [CosmeticCount, setCosmetics] = useState([])
    useEffect(()=> {

        fetch('Data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            {
             CosmeticCount.map(Cosmetic => <Subcosmetic cosmetic={Cosmetic}></Subcosmetic>)   
            }
            
        </div>
    );
};

export default Cosmetics;