import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import './scrolltop-btn.css'

export default function ScrollToTopButton({ scrollY }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <button
      className={`scroll-top ${scrollY > 1000 ? 'scroll-show' : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  )
}
