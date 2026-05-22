import { useContext } from 'react'
import { Context } from '../../context'
import ProductCard from '../ProductCard/ProductCard'
import './products-list.css'

export default function ProductsList({ devices, loadingId, addToFavorites }) {
  return (
    <div className='products-list'>
      {devices.map((device) => {
        return (
          <ProductCard
            device={device}
            loadingId={loadingId}
            addToFavorites={addToFavorites}
            key={device.id}
          />
        )
      })}
    </div>
  )
}
