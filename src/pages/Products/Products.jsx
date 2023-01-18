import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import List from '../../components/List/List';
import './Products.scss';
import { useParams } from 'react-router-dom';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='2'>Skirts</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem' id='mui-slider'>
            <span>0</span>
            <Box width={100}>
              <Slider
                onChange={(e) => setMaxPrice(e.target.value)}
                defaultValue={0}
                min={0}
                max={1000}
                aria-label='Default'
                valueLabelDisplay='auto'
              />
            </Box>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              onChange={(e) => setSort('asc')}
              type='radio'
              id='asc'
              value='asc'
              name='price'
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              onChange={(e) => setSort('desc')}
              type='radio'
              id='desc'
              value='desc'
              name='price'
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src='https://images.unsplash.com/photo-1619785690726-89c6b3bd3849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
