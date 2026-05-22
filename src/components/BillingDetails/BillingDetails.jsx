import { useEffect, useState } from 'react'
import axios from 'axios'
import './billing-details.css'

export default function BillingDetails() {
  const API_KEY = 'p7LLsFgZIRi9MHVZP8RZsvNZLwm22z6vPyrU9Ltp'

  const [countries, setCountries] = useState([])

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

  //   const billingFormData = {
  //     firstName: '',
  //     lastName: '',
  //     companyName: '',
  //     country: '',

  //   }

  return (
    <div className='billing-details'>
      <h3>Billing details</h3>

      <form onSubmit={(e) => e.preventDefault()} className='billing-form'>
        <label htmlFor='firstName'>First name *</label>
        <input type='text' id='firstName' name='firstName' required />

        <label htmlFor='lastName'>Last name *</label>
        <input type='text' id='lastName' name='lastName' required />

        <label htmlFor='companyName'>Company name (optional)</label>
        <input type='text' id='companyName' name='companyName' />

        <label htmlFor='country'>Country / Region *</label>

        <select name='country' id='country'>
          {countries.map((country) => (
            <option value={country.name.common} key={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}
