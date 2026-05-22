import { useContext } from 'react'
import { Context } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router'
import ProductCard from '../components/ProductCard/ProductCard'

export default function Wishlist() {
  const { favorites } = useContext(Context)

  return (
    <div id='wishlist'>
      {favorites.length === 0 ? (
        <div className='empty-wishlist-message'>
          <FontAwesomeIcon
            icon={faHeart}
            fontSize={180}
            color='rgb(0 0 0 / .07)'
          />

          <h1>Your wishlist is currently empty</h1>
          <p>
            You don't have any products in the list yet, You will find a lot of
            interesting products on our <br /> "Shop" page
          </p>

          <Link to='/shop' className='shop-link'>
            Return to shop
          </Link>
        </div>
      ) : (
        <div className='container'>
          <div className='products-list'>
            {favorites.map((fav) => (
              <ProductCard device={fav} key={fav.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
