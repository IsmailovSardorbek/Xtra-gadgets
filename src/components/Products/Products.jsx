import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../ProductCard/ProductCard'
import { Context } from '../../context'
import { Link, useNavigate } from 'react-router'
import ProductsList from '../ProductsList/ProductsList'
import 'swiper/css'
import './products.css'

export default function Products() {
  const {
    devices,
    favorites,
    setFavorites,
    setProductToAdd,
    setShowSuccessModal,
  } = useContext(Context)

  const [loadingId, setLoadingId] = useState(null)

  const navigate = useNavigate()

  const addToFavorites = (id) => {
    const device = devices.find((d) => d.id === id)

    if (favorites.some((d) => d.id === id)) {
      navigate('/wishlist')
      return
    }

    setLoadingId(id)

    setTimeout(() => {
      setFavorites((prev) => [...prev, device])
      setLoadingId(null)
      setProductToAdd(device)
      setShowSuccessModal(true)
    }, 2000)
  }

  return (
    <div id='products'>
      <div className='container'>
        <ProductsList
          devices={devices}
          loadingId={loadingId}
          addToFavorites={addToFavorites}
        />

        <Link to='/' className='shop-link'>
          Shop All Products
          <div className='explore-icon'>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>
      </div>
    </div>
  )
}
