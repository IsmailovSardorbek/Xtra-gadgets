import { useContext, useState } from 'react'
import { Context } from '../../context'
import { faCartPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './shopping-cart.css'
import { Link } from 'react-router'
import SuggestionsBox from '../SuggestionsBox/SuggestionsBox'
import CartTotals from '../CartTotals/CartTotals'

export default function ShoppingCart({ setCurrentStep }) {
  const { shoppingCart, setShoppingCart, removeFromShoppingCart } =
    useContext(Context)

  const [couponCode, setCouponCode] = useState('')

  const decrementQuantity = (id) => {
    setShoppingCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    )
  }

  const incrementQuantity = (id) => {
    setShoppingCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    )
  }

  return (
    <>
      {shoppingCart.length === 0 ? (
        <div className='cart-empty-message'>
          <FontAwesomeIcon
            icon={faCartPlus}
            size='9x'
            color='rgb(0 0 0 / .07)'
          />
          <h1>Looks like your cart is empty!</h1>
          <p>Time to start your shopping</p>
        </div>
      ) : (
        <table className='cart-items-table'>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {shoppingCart.map((cartItem) => {
              return (
                <tr key={cartItem.id}>
                  <td>
                    <button
                      className='delete-row-btn'
                      onClick={() => removeFromShoppingCart(cartItem.id)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </td>

                  <td>
                    <img src={`/img/p${String(cartItem.id)}.jpg`} />
                  </td>

                  <td>
                    <h4>{cartItem.name}</h4>
                  </td>

                  <td>${cartItem.currentPrice}</td>

                  <td>
                    <div className='quantity'>
                      <button
                        className='dec-btn'
                        onClick={() => decrementQuantity(cartItem.id)}
                      >
                        -
                      </button>

                      <div className='quantity-box'>{cartItem.quantity}</div>

                      <button
                        className='inc-btn'
                        onClick={() => incrementQuantity(cartItem.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>${cartItem.currentPrice * cartItem.quantity}</td>
                </tr>
              )
            })}
          </tbody>
          <tr className='table-form'>
            <td colSpan={6}>
              <div className='bottom-row'>
                <div className='coupon-form'>
                  <input
                    type='text'
                    placeholder='Coupon code'
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button className='table-action-btn'>Apply coupon</button>
                </div>

                <Link className='table-action-btn'>Continue shopping</Link>
              </div>
            </td>
          </tr>
        </table>
      )}

      <div
        className={`suggestions__cart-total ${shoppingCart.length > 0 ? 'd-grid' : ''}`}
      >
        <SuggestionsBox />
        {shoppingCart.length > 0 && (
          <CartTotals setCurrentStep={setCurrentStep} />
        )}
      </div>
    </>
  )
}
