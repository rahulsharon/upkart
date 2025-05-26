import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './sell.css';
// import Navbar from './Navbar';
import axios from 'axios';
// import './Men.css';

const Sell = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [targetAudience, setTargetAudience] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productImage) {
      setPopupMessage('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('file', productImage);
    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('stock', productStock);
    formData.append('category', targetAudience);

    try {
      const response = await axios.post('http://127.0.0.1:8080/products', formData);
      setPopupMessage(response.data);
    } catch (error) {
      console.log(error);
      setPopupMessage('Error occurred during product addition');
    }
    setProductImage(null);
    setProductName('');
    setProductPrice('');
    setProductStock('');
    setTargetAudience('');
  };

  const handlePopupClose = () => {
    setPopupMessage('');
  };

  const handleDropdownChange = (event) => {
    setTargetAudience(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="vendorContainer">
        <h1 className="vendorTitle">Add Product</h1>
        <div className="vendorForm">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <select
            className="dropdown-select"
            value={targetAudience}
            onChange={handleDropdownChange}
          >
            <option value="" disabled hidden>
              Category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>

          <input
            type="text"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Product Stock"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
          />

          <input
            type="file"
            id="productImage"
            className="image-input"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      </div>
      {popupMessage && (
        <div className="popupContainer">
          <div className="popup">
            <p>{popupMessage}</p>
            <button className="popupClose" onClick={handlePopupClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sell;