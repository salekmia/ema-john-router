import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, price, img, key} = props.product
    const {handleRemove} = props
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={()=> handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;