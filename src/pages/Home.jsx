import { useContext, useState } from 'react'
import Catalog from '../components/Catalog/Catalog'
import Devices from '../components/Devices/Devices'
import News from '../components/News/News'
import Products from '../components/Products/Products'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'
import Showcase from '../components/Showcase/Showcase'
import VrSaleBanner from '../components/VrSaleBanner/VrSaleBanner'
import { Context } from '../context'
import SuccessModal from '../components/SuccessModal/SuccessModal'

export default function Home() {
  const { showSuccessModal } = useContext(Context)

  const [scrollY, setScrollY] = useState(window.scrollY)

  window.addEventListener('scroll', () => setScrollY(window.scrollY))

  return (
    <>
      <Showcase />
      <Catalog />
      <Devices />
      <Products />
      <VrSaleBanner />
      <News />
      {showSuccessModal && <SuccessModal />}
      <ScrollToTopButton scrollY={scrollY} />
    </>
  )
}
