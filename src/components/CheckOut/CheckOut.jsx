import React, { useState } from 'react';
import "./CheckOut.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
const CheckOut = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);   };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <h5 className="mt-4">Payment Details</h5>
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">Name on Card</label>
          <input
            type="text"
            className="form-control"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="expDate" className="form-label">Expiration Date</label>
            <input
              type="text"
              className="form-control"
              id="expDate"
              name="expDate"
              placeholder="MM/YY"
              value={formData.expDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100" style={{marginBottom:20}}>Place Order</button>
      <Link to="/">Go To Home Page</Link>
         
      </form>

      {showSuccess && (
        <div className="alert alert-success alert-dismissible fade show mt-4" role="alert">
          <strong>Success!</strong> Your order has been placed.
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowSuccess(false)}
          ></button>
          
        </div>
      )}
    </div>
  );
};

export default CheckOut;