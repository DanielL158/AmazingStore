import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <img
      className='header_logo'
      src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />

      <div className='header_search'>
        <input className='header_searchInput' type='text'>

        </input>
      </div>
    </div>
  )
}