import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import './billing-details.css'

export default function BillingDetails() {
  const [countries, setCountries] = useState([])

  const ACTIONS = {
    FIRSTNAME: 'first-name',
    LASTNAME: 'last-name',
    COMPANYNAME: 'company-name',
    STREETADDRESS: 'street-address',
    CITY: 'city',
    STATE: 'state',
    COUNTRY: 'country',
    POSTCODE: 'postcode',
    PHONENUMBER: 'phone-number',
    EMAIL: 'email',
    ORDERNOTES: 'order-notes',
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FIRSTNAME:
        return { ...state, firstName: action.payload }
      case ACTIONS.LASTNAME:
        return { ...state, lastName: action.payload }
      case ACTIONS.COMPANYNAME:
        return { ...state, companyName: action.payload }
      case ACTIONS.STREETADDRESS:
        return { ...state, streetAddress: action.payload }
      case ACTIONS.CITY:
        return { ...state, city: action.payload }
      case ACTIONS.STATE:
        return { ...state, state: action.payload }
      case ACTIONS.COUNTRY:
        return { ...state, country: action.payload }
      case ACTIONS.POSTCODE:
        return { ...state, postcode: action.payload }
      case ACTIONS.PHONENUMBER:
        return { ...state, phoneNumber: action.payload }
      case ACTIONS.EMAIL:
        return { ...state, email: action.payload }
      case ACTIONS.ORDERNOTES:
        return { ...state, orderNotes: action.payload }
    }
  }

  const [billingFormData, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postcode: '',
    phoneNumber: '',
    email: '',
    orderNotes: '',
  })

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await axios.get(
          'https://restcountries.com/v3.1/all?fields=name,flags',
        )

        setCountries(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchCountries()
  }, [])

  const billingFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='billing-details'>
      <h3>Billing details</h3>

      <hr />

      <form onSubmit={billingFormSubmit} className='billing-form'>
        <div
          style={{
            display: 'flex',
            gap: '30px',
          }}
        >
          <div>
            <label htmlFor='firstName'>
              First name <span>*</span>
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={billingFormData.firstName}
              onChange={(e) =>
                dispatch({ type: 'first-name', payload: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label htmlFor='lastName'>
              Last name <span>*</span>
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              required
              value={billingFormData.lastName}
              onChange={(e) =>
                dispatch({ type: 'last-name', payload: e.target.value })
              }
            />
          </div>
        </div>

        <label htmlFor='companyName'>Company name (optional)</label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          value={billingFormData.companyName}
          onChange={(e) =>
            dispatch({ type: 'company-name', payload: e.target.value })
          }
        />

        <label htmlFor='country'>
          Country / Region <span>*</span>
        </label>
        <select
          name='country'
          id='country'
          required
          value={billingFormData.country}
          onChange={(e) =>
            dispatch({ type: 'country', payload: e.target.value })
          }
        >
          {countries.map((country) => (
            <option value={country.name.common} key={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>

        <label htmlFor='address'>
          Street address <span>*</span>
        </label>
        <input
          type='text'
          name='address'
          id='address'
          placeholder='House number and street name'
          required
          value={billingFormData.streetAddress}
          onChange={(e) =>
            dispatch({ type: 'street-address', payload: e.target.value })
          }
        />

        <label htmlFor='city'>
          Town / City <span>*</span>
        </label>
        <input
          type='text'
          name='city'
          id='city'
          required
          value={billingFormData.city}
          onChange={(e) => dispatch({ type: 'city', payload: e.target.value })}
        />

        <label htmlFor='country'>
          State / Country <span>*</span>
        </label>
        <input
          type='text'
          id='country'
          name='country'
          value={billingFormData.state}
          required
          onChange={(e) => dispatch({ type: 'state', payload: e.target.value })}
        />

        <label htmlFor='postcode'>
          Postcode / ZIP <span>*</span>
        </label>
        <input
          type='text'
          id='postcode'
          name='postcode'
          required
          value={billingFormData.postcode}
          onChange={(e) =>
            dispatch({ type: 'postcode', payload: e.target.value })
          }
        />

        <label htmlFor='phoneNumber'>
          Phone <span>*</span>
        </label>
        <input
          type='text'
          id='phoneNumber'
          name='phoneNumber'
          required
          value={billingFormData.phoneNumber}
          onChange={(e) =>
            dispatch({ type: 'phone-number', payload: e.target.value })
          }
        />

        <label htmlFor='email'>
          Email address <span>*</span>
        </label>
        <input
          type='email'
          name='email'
          id='email'
          required
          value={billingFormData.email}
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
        />

        <h3>Additional information</h3>
        <hr />

        <label htmlFor='orderNotes'>Order notes (optional)</label>
        <textarea
          name='orderNotes'
          id='orderNotes'
          placeholder=' Notes about your order, e.g. special notes for delivery.'
          value={billingFormData.orderNotes}
          onChange={(e) =>
            dispatch({ type: 'order-notes', payload: e.target.value })
          }
        ></textarea>
      </form>
    </div>
  )
}
