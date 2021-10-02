import React from 'react';
import { useHistory } from 'react-router';
import useCard from '../../hooks/useCard';
import useProducts from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
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

    const handlePlaceOrder = () => {
        history.push('/placeorder')
        setCard([])
        clearTheCart()
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
                        <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                        
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;