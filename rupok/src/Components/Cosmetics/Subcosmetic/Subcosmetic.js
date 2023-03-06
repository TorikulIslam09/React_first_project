import React from 'react';

const Subcosmetic = (props) => {
    console.log(props.cosmetic);
    const { _id, age} = props.cosmetic;
    const torikulnHandle = (id)=> {
        console.log(id)
    }
    const idclicked = ()=> { 
        torikulnHandle(_id)
    };

    return (
        <div>
            <p>{_id}</p>
            <p>{age}</p>
            <button onClick={idclicked}>click me</button>
        </div>
    );
};

export default Subcosmetic;