import { useContext, useEffect, useMemo, useState } from 'react'
import ProductsList from '../ProductsList/ProductsList'
import { Context } from '../../context'
import './suggestions-box.css'

export default function SuggestionsBox() {
  const { devices, shoppingCart } = useContext(Context)

  const randomList = useMemo(() => {
    const count = shoppingCart.length > 0 ? 2 : 4

    return [...devices].sort(() => 0.5 - Math.random()).slice(0, count)
  }, [devices, shoppingCart.length])

  return (
    <div className='suggestions-box'>
      <h3>You may be interested in ... </h3>
      <ProductsList devices={randomList} />
    </div>
  )
}
