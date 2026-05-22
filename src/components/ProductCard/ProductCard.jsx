import { Link, useLocation, useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBolt,
  faCartShopping,
  faCheck,
  faCircleNotch,
  faSearch,
  faShuffle,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useContext } from 'react'
import { Context } from '../../context'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faFilledHeart } from '@fortawesome/free-solid-svg-icons'
import './product-card.css'

export default function ProductCard({ device, loadingId, addToFavorites }) {
  const { favorites, setShoppingCart, shoppingCart, setFavorites } =
    useContext(Context)

  const navigate = useNavigate()

  const location = useLocation()

  const addToCart = (e, device) => {
    e.stopPropagation()
    e.preventDefault()

    if (shoppingCart.some((d) => d.id === device.id)) {
      if (location.pathname !== '/cart') navigate('/cart')
      return
    }

    setShoppingCart((prev) => [...prev, { ...device, quantity: 1 }])
  }

  const deleteFromFavorites = (e, id) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites((prev) => prev.filter((dev) => dev.id != id))
  }

  return (
    <Link to='/' className='product-link' key={device.id}>
      <div className='product-card'>
        <div className='card-top'>
          <img src={`/img/p${device.id}.jpg`} />

          {device.isOnSale && (
            <div className='sale-alert'>
              <div className='sale sale-badge'>Sale!</div>

              <div className='sale sale-amount'>{device.salePercentage}%</div>
            </div>
          )}

          <button className='add-to-cart' onClick={(e) => addToCart(e, device)}>
            {shoppingCart.some((d) => d.id === device.id) ? (
              <>
                <FontAwesomeIcon icon={faCheck} />
                &nbsp; View Cart
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCartShopping} />
                Add to Cart
              </>
            )}
          </button>

          {device.isOnSale && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
            >
              {[1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <FontAwesomeIcon
                    icon={faBolt}
                    fontSize={12}
                    color='#ffb300'
                  />
                  &nbsp; hot sale {device.salePercentage}% off &nbsp;
                  <FontAwesomeIcon
                    icon={faBolt}
                    fontSize={12}
                    color='#ffb300'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {
            <div className='card-actions'>
              <button
                disabled={loadingId === device.id}
                className={`card-action__btn add-to-favs__btn ${
                  favorites.some((dev) => dev.id === device.id) ? 'liked' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  addToFavorites(device.id)
                }}
              >
                <FontAwesomeIcon
                  icon={
                    loadingId === device.id
                      ? faCircleNotch
                      : favorites.some((dev) => dev.id === device.id)
                        ? faFilledHeart
                        : faHeart
                  }
                  spin={loadingId === device.id}
                />
              </button>

              <button className='card-action__btn compare-btn'>
                <FontAwesomeIcon icon={faShuffle} />
              </button>

              <button className='card-action__btn quick-view__btn'>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          }

          {location.pathname === `/wishlist` && (
            <button
              className='delete-cart-btn'
              onClick={(e) => deleteFromFavorites(e, device.id)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>

        <div className='card-body'>
          <h3>{device.name}</h3>
          <div className='product-category'>{device.category}</div>

          <div className='product-rating'>
            {Array.from({
              length: parseInt(device.rating),
            }).map((_, index) => (
              <FontAwesomeIcon icon={faStar} key={index} />
            ))}

            {!Number.isInteger(device.rating) && (
              <FontAwesomeIcon icon={faStarHalfStroke} />
            )}
          </div>

          <h3 className='product-price'>
            {device.oldPrice && (
              <>
                <span>${device.oldPrice}</span>
                &nbsp;
              </>
            )}
            ${device.currentPrice}
          </h3>
        </div>
      </div>
    </Link>
  )
}
