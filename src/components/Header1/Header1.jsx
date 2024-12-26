import React from 'react'
import "./Header1.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header1 = () => {

  const cart = useSelector(state => state.crt.carts);
  return (
    <>
      <nav className="navbar navbar-expand-lg navigation-wrap headernav " id='navbar' >
        <div className="container">
          <div className='row'>
            <a className="navbar-brand" href="/">
              <img className='headerimg' src="/tech_haven_logo.webp" width="60" alt="logo" />
            </a>
          </div>
          <li className="nav-item carticon">
            <Link to='/cart'>
              <i class="fa-solid fa-cart-shopping">{cart.length}</i>
            </Link>
          </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-stream navbar-toggler-icon" style={{ color: 'white' }}></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Header1;