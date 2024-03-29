import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {Link } from 'react-router-dom';
import  './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
  const[{basket}]=useStateValue();
  return (
    <div className='header'>
<Link to="/"><img className='header_image' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/></Link>
<div className='header_search'>
  <input type="text" className='header_search_input'/>
  <SearchIcon className="header_searchIcon"/>
</div>
<div className='header_nav'>
  <div className='header_option'>
    <span className='header_optionLineOne'>Hello Guest</span>
    <span className='header_optionLineTwo'>Sign In</span>
  </div>
  <div className='header_option'>
    <span className='header_optionLineOne'>Returns</span>
    <span className='header_optionLineTwo'>Orders</span>
  </div>
  <div className='header_option'>
    <span className='header_optionLineOne'>Yours</span>
    <span className='header_optionLineTwo'>Prime</span>
  </div>
  <div className='header_optionBasket'>
   <Link to="/checkout"> <ShoppingBasketIcon /></Link>
    <span className='header_BasketCount'>{basket.length}</span>
  </div>
</div>
    </div>
  )
}

export default Header