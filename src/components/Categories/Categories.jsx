import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/8570890/pexels-photo-8570890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link to='/products/1' className='link'>
              Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1649940181985-d81cf19eeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <button>
            <Link to='/products/1' className='link'>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1621604474789-055748a2b13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <button>
            <Link to='/products/1' className='link'>
              new season
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/10421811/pexels-photo-10421811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <button>
                <Link to='/products/1' className='link'>
                  men
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.unsplash.com/photo-1649940182870-d77543b5c0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
              />
              <button>
                <Link to='/products/1' className='link'>
                  accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt=''
          />
          <button>
            <Link to='/products/1' className='link'>
              shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
