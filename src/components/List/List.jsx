import React from 'react';
import './List.scss';
import Card from '../Card/Card';
const List = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1577899877811-35c27d5d7f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80',
      title: 'Dice',
      isNew: true,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1594803617043-2a5a0829fcd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      title: 'Cloud',
      isNew: true,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1580102167069-65b006f93d9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      title: 'Fierce',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1602562887763-851fa56061e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Chic',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80',
      title: 'Chic',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      title: 'Chic',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1586078130702-d208859b6223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Chic',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80',
      title: 'Chic',
      isNew: false,
      oldPrice: '$19',
      price: '$12',
    },
  ];
  return (
    <div className='list'>
      {data?.map((item) => (
        <Card item={item} key={item.id} alt='' />
      ))}
    </div>
  );
};

export default List;
