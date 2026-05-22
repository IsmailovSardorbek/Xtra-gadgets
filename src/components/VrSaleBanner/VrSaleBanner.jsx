import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import './vrsale-banner.css'

export default function VrSaleBanner() {
  return (
    <div id='vr-ad'>
      <div className='container'>
        <div className='vr-ad__box'>
          <div className='ad-box__content'>
            <div className='ad-about'>
              <div className='container'>
                <div className='ad-badge'>deal of the day</div>

                <h1 className='ad-title'>
                  Get <span>Virtual Reality</span> with 30% off.
                </h1>

                <p className='ad-text'>
                  Virtual reality (VR) is a simulated experience that can be
                  similar to or completely different from the real world.
                  Applications of VR include entertainment, education and
                  business.
                </p>

                <a href='#' className='sale-btn'>
                  <div className='sale-prc'>
                    <FontAwesomeIcon icon={faPercent} />
                  </div>
                  Get 30% Off Now
                </a>

                <div className='timer'></div>
              </div>
            </div>

            <div className='ad-img'>
              <img src='img/ad-img.png' alt='VR Headset' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
