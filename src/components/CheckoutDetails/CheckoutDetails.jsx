import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './checkout-details.css'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import BillingDetails from '../BillingDetails/BillingDetails'
import { useState } from 'react'
import OrderDetails from '../OrderDetails/OrderDetails'

const CheckoutDetails = ({ couponCode, setCouponCode }) => {
  const [showCouponForm, setShowCouponForm] = useState(false)

  return (
    <div className='checkout-details'>
      <div className='checkout-content'>
        <div className='coupon-meta'>
          <p>
            Have a coupon? &nbsp;
            <span
              className='coupon-toggle-btn'
              onClick={() => setShowCouponForm((prev) => !prev)}
            >
              Click here to enter your code
            </span>
          </p>

          <div className='copy-icon'>
            <FontAwesomeIcon icon={faClone} />
          </div>
        </div>

        <div
          className='coupon-form'
          style={{ display: showCouponForm ? 'grid' : 'none' }}
        >
          <input
            type='text'
            placeholder='Coupon code'
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className='table-action-btn'>Apply coupon</button>
        </div>

        <div className='order-info'>
          <BillingDetails />
          <OrderDetails />
        </div>
      </div>
    </div>
  )
}

export default CheckoutDetails
