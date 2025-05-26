import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';
import './About.css';

const Product = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState(DATA); // Using provided static data

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on searchQuery
  const filteredData = products.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Helper function to render individual product card
  const renderProductCard = (item) => {
    return (
      <div
        className="card"
        key={item.id}
        style={{ width: '15rem', height: '25rem', marginBottom: '40px' }}
      >
        <img
          src={item.img} // Using provided image URL
          className="card-img-top"
          alt={item.title}
          style={{ width: '240px', height: '10rem', marginLeft: '-13px' }}
        />

        <div className="card-body">
          <p className="card-title">{item.title}</p>
          <p className="card-text">₹{item.price}</p>
          <ReactStars
            count={5}
            size={24}
            value={item.star}
            edit={false}
            activeColor="#ffd700"
          />
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div className="about">
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ color: 'yellow' }}>Products</h1>
              <hr style={{ color: 'yellow', borderWidth: '10px' }} />
            </div>
          </div>
        </div>
        <div className="container py-1">
          <div className="row justify-content-around">
            <div className="col-12 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            {filteredData.map(renderProductCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
