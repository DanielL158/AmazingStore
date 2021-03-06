import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home () {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home_image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
        <div className="home_row">
          <Product
          id='12345678'
          title="AstroAI Mini Fridge 4 Liter/6 Can AC/DC Portable Thermoelectric Cooler and Warmer"
          price={49.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61SX1DEzK4L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
          />
          <Product
          id='123456789'
          title='Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
          price={239.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81tCWi0BusL._AC_SL1500_.jpg'
          />
        </div>

        <div className="home_row">
          <Product
          id='12345619'
          title='All-new Echo Buds (2nd Gen)'
          price={99.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61zfyWSgVBL._AC_SL1000_.jpg'
          />
          <Product
          id='123456123'
          title='KINGSO Fire Pit, 22 Fire Pits Outdoor Wood Burning Steel BBQ Grill'
          price={49.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61J%2B463izhL._AC_SL1200_.jpg'
          />
          <Product
          id='123456353'
          title='Island Retreat Island Umbrella Hammock Pillow & Pad Set, Blue'
          price={49.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81gzJAuZ27L._AC_SL1500_.jpg'
          />
        </div>

        <div className="home_row">
          <Product
          id='123256123'
          title='SAMSUNG 43-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in'
          price={377.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg'
          />
        </div>
      </div>
    </div>
  )
}