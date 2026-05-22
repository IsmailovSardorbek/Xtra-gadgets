import { useContext } from 'react'
import './cart-totals.css'
import { Context } from '../../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'

export default function CartTotals({ setCurrentStep }) {
  const { totalPrice } = useContext(Context)

  return (
    <div className='cart-totals'>
      <h3>Cart totals</h3>

      <div className='price-box'>
        <div className='cart-subtotal-price'>
          <h4>Subtotal</h4>

          <span>${totalPrice}</span>
        </div>
        <div className='cart-total-price'>
          <h4>Total</h4>
          <span>${totalPrice}</span>
        </div>
      </div>
      {totalPrice < 999 ? (
        <div className='free-shipping-bar'>
          <p>
            <FontAwesomeIcon icon={faDolly} />
            &nbsp; Add <strong>${999 - totalPrice}</strong> more to get free
            shipping!
          </p>

          <div className='free-shipping-progress-bar'>
            <div
              className='bar'
              style={{
                width: `${(totalPrice * 100) / 999}%`,
              }}
            ></div>
          </div>
        </div>
      ) : null}

      <button
        className='table-action-btn checkout-btn-secondary'
        onClick={() => setCurrentStep(1)}
      >
        Proceed to checkout
      </button>
    </div>
  )
}
