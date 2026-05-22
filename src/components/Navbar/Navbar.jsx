import { useContext, useEffect, useState } from 'react'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faBars,
  faCartArrowDown,
  faCartPlus,
  faEllipsis,
  faReceipt,
  faSearch,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router'
import logo from '/img/logo.png'
import { Context } from '../../context'
import './navbar.css'

export default function Navbar() {
  const {
    links,
    activeLink,
    setActiveLink,
    favorites,
    location,
    shoppingCart,
    removeFromShoppingCart,
    totalPrice,
  } = useContext(Context)

  const [openMobileNav, setOpenMobileNav] = useState(false)

  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-menu__wrapper')) setOpenMobileNav(false)
  })

  const itemsQuantity = shoppingCart
    .filter((item) => item.quantity > 0)
    .map((item) => item.quantity)
    .reduce((acc, cur) => acc + cur, 0)

  return (
    <div id={`site-nav`}>
      <div className='container'>
        <div className='nav-content'>
          <button className='menu-btn' onClick={() => setOpenMobileNav(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <Link
            to='/'
            className='home-link'
            onClick={() => setActiveLink('Home')}
          >
            <img src={logo} alt='Logo' />
          </Link>

          <div className='nav-actions'>
            <button className='nav-list__btn'>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
            <div
              className={`nav-menu__wrapper ${openMobileNav ? 'mobile-show' : ''}`}
            >
              <ul className='nav-menu'>
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link === 'Home' ? '' : link.split` `.join`-`.toLowerCase()}`}
                      className={`nav-link ${activeLink === link ? 'current-link' : ''}`}
                      onClick={() => setActiveLink(link)}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpenMobileNav(false)}
                className='mobile-close__btn'
              >
                &times;
              </button>
            </div>

            <div className='nav-search__form'>
              <FontAwesomeIcon icon={faSearch} />
              <input type='text' placeholder='Search ...' />
            </div>

            <div className='action-btns'>
              <div className='cart-wrapper'>
                <Link
                  className='action-btn cart-btn'
                  to='/cart'
                  onClick={() => setActiveLink(null)}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                  <div className='cart-counter'>{itemsQuantity}</div>
                </Link>

                <div className='cart-items'>
                  <div className='cart-items-wrapper'>
                    {shoppingCart.length === 0 ? (
                      <>
                        <FontAwesomeIcon
                          icon={faCartArrowDown}
                          size='2x'
                          color='rgb(0 0 0 / .07)'
                          style={{ paddingTop: '1rem' }}
                        />
                        <p style={{ paddingBottom: '1rem' }}>
                          Your cart is empty - start shopping
                        </p>
                      </>
                    ) : (
                      <div className='cart-items-list'>
                        {shoppingCart.map((cartItem) => (
                          <div className='cart-item' key={cartItem.id}>
                            <img src={`img/p${cartItem.id}.jpg`} />

                            <div className='cart-item-details'>
                              <h4>{cartItem.name}</h4>
                              <div className='cart-item-price'>
                                {cartItem.quantity} x ${cartItem.currentPrice}
                              </div>
                            </div>

                            <button
                              className='delete-item-btn'
                              onClick={() =>
                                removeFromShoppingCart(cartItem.id)
                              }
                            >
                              <FontAwesomeIcon icon={faXmark} />
                            </button>
                          </div>
                        ))}

                        <Link
                          className='cart-subtotal'
                          to='/cart'
                          onClick={() => setActiveLink(null)}
                        >
                          <div className='cart-subtotal-text'>
                            <FontAwesomeIcon icon={faReceipt} />
                            &nbsp; Cart Subtotal
                          </div>

                          <h4 className='total-price'>${totalPrice}</h4>
                        </Link>
                      </div>
                    )}
                  </div>
                  {shoppingCart.length > 0 && (
                    <>
                      <Link to='/cart' className='checkout-btn'>
                        Proceed to checkout
                      </Link>

                      <div className='cart-items-bottom'>
                        Free shipping on purchases over $999
                      </div>
                    </>
                  )}
                </div>
              </div>

              <Link
                className='action-btn like-btn'
                to='/wishlist'
                onClick={() => setActiveLink(null)}
              >
                <FontAwesomeIcon icon={faHeart} />
                <div className='liked-counter'>{favorites.length}</div>
              </Link>
            </div>
          </div>

          <button className='cart-btn__mobile'>
            <FontAwesomeIcon icon={faCartArrowDown} />
            <div className='cart-counter mobile'>{itemsQuantity}</div>
          </button>
        </div>
      </div>
    </div>
  )
}
