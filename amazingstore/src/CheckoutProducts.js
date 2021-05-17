import React from 'react';
import './CheckoutProducts.css';
import { useStateValue } from './StateProvider';

export default function CheckoutProducts({ id, title, image, price, rating }) {
  const [{ basket, }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProducts'>
      <img className='checkoutProduct_image' src={image} alt=''
      />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>{price}
        <small>$</small>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>🌟</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}