import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='/img/en.png' alt='' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Men
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>
              Children
            </Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>
            Weakton Store
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>
              Stores
            </Link>
          </div>
          <div className='icons'>
            <SearchOutlinedIcon />
            <Person2OutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon'>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
