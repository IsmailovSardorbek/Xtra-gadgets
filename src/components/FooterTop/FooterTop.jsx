import { Link } from 'react-router'
import './footer-top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function FooterTop() {
  return (
    <div id="pre-footer">
      <div className="container">
        <div className="pre-footer__container">
          <div className="pre-footer-content__wrapper">
            <div className="contacts-adress">
              <img src="/img/logo-footer.png" alt="Footer Logo" />

              <div className="address">
                <p>Our Address:</p>

                <div className="address-text">
                  No. 869 General Trade, Center,
                  <br />
                  California, USA
                </div>
              </div>

              <div className="contacts">
                <p>24/7 Free Call:</p>

                <div className="phone-number">+1 (800) 333 456</div>
              </div>

              <div className="social-links">
                <Link
                  to="https://x.com"
                  target="_blank"
                  className="social-link twitter-link"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>

                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="social-link instagam-link"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>

                <Link
                  to="https://facebook.com"
                  target="_blank"
                  className="social-link facebook-link"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </div>
            </div>

            <div className="pre-footer__links">
              <div className="pre-footer-links__list">
                <h2>Useful Links</h2>

                <ul className="links-list">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Our Shop
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      News
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pre-footer-links__list">
                <h2>Support</h2>

                <ul className="links-list">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Refund
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Report
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      DMCA
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pre-footer-links__list">
                <h2>Information</h2>

                <ul className="links-list">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Our Services
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Pricing Plan
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Vendor Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Affiliate
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pre-footer-links__list">
                <h2>Services</h2>

                <ul className="links-list">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Payment
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Discount
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Promotional
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-icon"
                      />
                      Gifts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
