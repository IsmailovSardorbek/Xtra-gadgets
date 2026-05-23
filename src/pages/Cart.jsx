import {
  faArrowRight,
  faCartPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SuggestionsBox from '../components/SuggestionsBox/SuggestionsBox'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { Link } from 'react-router'
import CartTotals from '../components/CartTotals/CartTotals'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import CheckoutDetails from '../components/CheckoutDetails/CheckoutDetails'

export default function Cart() {
  const { shoppingCart } = useContext(Context)

  const orderSteps = ['Shopping Cart', 'Checkout Details', 'Order Complete']

  const [couponCode, setCouponCode] = useState('')

  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className='cart-box'>
      <div className='container'>
        {shoppingCart.length > 0 && (
          <div className='steps'>
            {orderSteps.map((step, index) => (
              <div
                className={`step ${currentStep === index ? 'current-step' : ''}`}
                key={step}
                onClick={() => setCurrentStep(index)}
                aria-disabled={true}
              >
                <div className='step-index'>{index + 1}</div>
                <h2>{step}</h2>
                {index < 2 && <FontAwesomeIcon icon={faArrowRight} />}
              </div>
            ))}
          </div>
        )}
        {currentStep === 0 && (
          <ShoppingCart
            setCurrentStep={setCurrentStep}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
          />
        )}
        {currentStep === 1 && (
          <CheckoutDetails
            setCurrentStep={setCurrentStep}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
          />
        )}
      </div>
    </div>
  )
}
