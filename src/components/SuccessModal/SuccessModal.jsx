import { useContext } from 'react'
import { Context } from '../../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faChevronRight,
  faX,
} from '@fortawesome/free-solid-svg-icons'
import './success-modal.css'
import { Link } from 'react-router'

export default function SuccessModal() {
  const { setShowSuccessModal, productToAdd } = useContext(Context)

  return (
    <div className="success-modal-wrapper">
      <div className="success-modal-box">
        <FontAwesomeIcon icon={faCheckCircle} size="4x" color="#42ce42" />
        <h2>{productToAdd.name}</h2>
        <p>Product has been added to your list.</p>

        <Link
          to="/wishlist"
          className="modal-wishlist-link"
          onClick={() => setShowSuccessModal(false)}
        >
          View wishlist page
          <div className="explore-icon">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>

        <button
          className="close-modal-btn"
          onClick={() => setShowSuccessModal(false)}
        >
          &times;
        </button>
      </div>
    </div>
  )
}
