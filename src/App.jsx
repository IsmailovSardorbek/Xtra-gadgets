import { use, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import Home from './pages/Home'
import { Context } from './context'
import devices from './data/devices.json'
import Wishlist from './pages/Wishlist'
import Newsletter from './components/Newsletter/Newsletter'
import FooterTop from './components/FooterTop/FooterTop'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart'
import useLocalStorage from './hooks/useLocalStorage'
import Shop from './pages/Shop'

export default function App() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  const links = ['Home', 'Shop', 'Categories', 'Quick find', 'Pages']

  const [activeLink, setActiveLink] = useLocalStorage('activeNavLink', null)

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const [productToAdd, setProductToAdd] = useState(null)

  const [shoppingCart, setShoppingCart] = useLocalStorage('cartItems', [])

  const location = useLocation()

  const navigate = useNavigate()

  const itemsQuantity = shoppingCart
    .filter((item) => item.quantity > 0)
    .map((item) => item.quantity)
    .reduce((acc, cur) => acc + cur, 0)

  useEffect(() => {
    localStorage.setItem('activeNavLink', JSON.stringify(activeLink))
  }, [activeLink])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(shoppingCart))
  }, [shoppingCart])

  const removeFromShoppingCart = (id) => {
    setShoppingCart((prev) => prev.filter((item) => item.id !== id))
  }

  const totalPrice = shoppingCart
    .filter((item) => item.quantity > 0)
    .reduce((acc, cur) => acc + cur.currentPrice * cur.quantity, 0)
  return (
    <>
      <Context.Provider
        value={{
          links,
          activeLink,
          setActiveLink,
          devices,
          favorites,
          setFavorites,
          location,
          showSuccessModal,
          setShowSuccessModal,
          productToAdd,
          setProductToAdd,
          shoppingCart,
          setShoppingCart,
          removeFromShoppingCart,
          totalPrice,
        }}
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
        <Newsletter />
        <FooterTop />
        <Footer />
      </Context.Provider>
    </>
  )
}
