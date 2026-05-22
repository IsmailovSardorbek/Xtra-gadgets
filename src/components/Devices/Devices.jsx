import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './devices.css'

export default function Devices() {
  return (
    <div id="devices">
      <div className="container">
        <div className="devices-wrapper">
          <div className="device-box device-box-1">
            <div className="device-box__content">
              <h4 className="device-category__title">tablets</h4>
              <h1 className="device-model">Apple</h1>
              <h1 className="device-name">iPad Air</h1>

              <p className="device-about">
                iPad is a line of tablet computers designed, developed and
                marketed by Apple Inc., which run the iOS and iPad OS mobile
                operating systems.
              </p>

              <a className="explore-btn buy-btn" href="#">
                Buy Now
                <div className="explore-icon">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </a>
            </div>
          </div>

          <div className="device-box device-box-2">
            <div className="device-box__content">
              <h4 className="device-category__title">smart</h4>
              <h1 className="device-model">Apple</h1>
              <h1 className="device-name">Watch</h1>

              <p className="device-about">
                Apple Watch is a line of smartwatches produced by Apple Inc. It
                incorporates fitness tracking, health-oriented capabilities.
              </p>

              <a className="explore-btn buy-btn" href="#">
                Buy Now
                <div className="explore-icon">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
