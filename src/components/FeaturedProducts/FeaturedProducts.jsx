import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1649864733234-830d4ca94d9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      img2: 'https://images.unsplash.com/photo-1649864735667-300c31f0e5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Dice',
      isNew: true,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1646337429096-0454ecf7ed06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      img2: 'https://images.unsplash.com/photo-1646337427114-678dfd1851d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Cloud',
      isNew: true,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1645994743219-d608115d82ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      img2: 'https://images.unsplash.com/photo-1645994743122-c046890c61fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Fierce',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1649242065799-f43da756efb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      img2: 'https://images.unsplash.com/photo-1649242067436-0f1233d81bcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Chic',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
  ];
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam,
          aspernatur autem eius dolor itaque maxime veniam est recusandae modi
          harum quas quibusdam cum vel nostrum ex neque impedit architecto ea
          possimus iure esse eaque! Sint.
        </p>
      </div>
      <div className='bottom'>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
