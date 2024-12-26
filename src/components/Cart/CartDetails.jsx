import React from 'react';
import { removeFromeCart, increment, decrement } from '../../CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import './CartDetails.css';
import { Link } from 'react-router-dom';

const CartDetails = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.crt.carts);
  let total = 0;
  let count = 0;

  // Calculate total and count
  for (let row of cart) {
    count += row.q;
    total += row.price * row.q;
  }

  // Handle increment and decrement
  const handleIncrement = (item) => {
    dispatch(increment(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrement(item));
  };

  return (
    <div className="cartdetailsalldiv">
      <h2 className="cdh2">YOUR CART</h2>
      {cart.length === 0 ? (
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="cdimgdiv">
                <img
                  src="emptycartp.webp"
                  className="rounded mx-auto d-block"
                  alt="Empty Cart"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="cdtextdiv">
                <p className="cdp">Your Cart is Empty</p>
                <Link to="/">
                  <p className="cdplink">Continue Shopping</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {cart.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={item.id}>
                <div className="card h-100 ccalldiv">
                  <div className="ccimgdiv">
                    <img
                      className="card-img-top ccimg"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="card-body">
                    <p className="cctitle">
                      <strong>{item.title}</strong>
                    </p>
                    <p>
                      <strong>Price: </strong> {item.price} $
                    </p>
                    <div className="ccbutton d-flex justify-content-center align-items-center">
                      <button
                        className="ccplus btn btn-sm btn-primary mx-2"
                        onClick={() => handleIncrement(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <p className="ccnumber m-0">{item.q}</p>
                      <button
                        className="ccminus btn btn-sm btn-danger mx-2"
                        onClick={() => handleDecrement(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    <p
                      className="ccremove text-danger text-center mt-3"
                      onClick={() => dispatch(removeFromeCart(index))}
                      style={{ cursor: 'pointer' }}
                    >
                      <strong>Remove: </strong>
                      <i className="fas fa-trash"></i>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        <h4
          id="hello88"
          style={{
            color: 'black',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: 20,
          }}
        >
          Cart Amount: {total} $
        </h4>
        <Link to='/checkout' className="pdcheckout" >Check Out</Link>
        
      </div>
    </div>
  );
};

export default CartDetails;
