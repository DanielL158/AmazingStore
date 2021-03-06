import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';

export default function Checkout () {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png' alt=''
        />

        <div>
          <h3 className='checkout_greeting'>Hello, {!user ? `Guest` : user?.email.split('@')[0]}</h3>
          <h2 className='checkout_title'>Your Shopping Basket</h2>

          {basket.map((item, key)=> (
            <CheckoutProducts
              key={key}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
          ))}

        </div>
      </div>

        <div className='checkout_right'>
          <Subtotal />
        </div>
    </div>
  )
}