import React from 'react';
import { useHistory } from 'react-router';
import useCard from '../../hooks/useCard';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts()
    const [card, setCard] = useCard(products)
    const handleRemove = key => {
        const newCard = card.filter(product => product.key !== key)
        setCard(newCard)
        removeFromDb(key)
    }

    const history = useHistory()

    const handleProceedToShipping = () => {
        history.push('/shipping')
        // setCard([])
        // clearTheCart()
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        card.map(product => <ReviewItem product={product} key={product.key} handleRemove={handleRemove}></ReviewItem>)
                    }
                </div>
                <div className="card-container">
                    <Cart cart={card}>
                        <button onClick={handleProceedToShipping} className="btn-regular">Proceed to Shipping</button>
                        
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;