import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Header() {

  const handleClick = () => {
    window.location.href="https://github.com/DanielL158/AmazingStore/tree/master/amazingstore"
  }

  return (
    <div className='header'>
      <img
      className='header_logo'
      src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />

      <div className='header_search'>
        <input
        className='header_searchInput'
        type='text' />
        <SearchIcon
        className='header_searchIcon' />

        <div className='header_nav'>
          <div className='header_option'>
            <span
            className='header_optionLineOne'>Hello Guest</span>
            <span
            className='header_optionLineTwo'>Sign In</span>
          </div>

          <div className='header_option'>
          <span
            className='header_optionLineOne'>Returns</span>
            <span
            className='header_optionLineTwo'>& Orders</span>
          </div>

          <div className='header_option'>
          <span
            className='header_optionLineOne'>Your</span>
            <span
            className='header_optionLineTwo'>Prime</span>
          </div>

          <div className='header_optionGitHub'>
          <GitHubIcon onClick={handleClick}/>
          </div>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>0</span>
          </div>

        </div>
      </div>
    </div>
  )
}