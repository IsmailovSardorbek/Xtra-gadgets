import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import bannerSlide1 from '../../../public/img/slide1.png'
import bannerSlide2 from '../../../public/img/slide2.png'
import bannerSlide3 from '../../../public/img/slide3.png'
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper/modules'
import './showcase.css'

export default function Showcase() {
  return (
    <div id="showcase">
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            {/* LEFT SIDE */}
            <div className="banner-about">
              <h1 className="banner-title">
                Get <span>Best Device</span> With Lowest Price.
              </h1>

              <p className="banner-text">
                iPad is a line of tablet computers designed, developed and
                marketed by Apple Inc., which run the iOS and iPad OS mobile
                operating systems.
              </p>

              <div className="banner-btns">
                <button className="explore-btn">
                  Explore Now
                  <div className="explore-icon">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </button>

                <button className="play-btn">
                  <div className="play-icon">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  Watch Promotion
                </button>
              </div>
            </div>

            <div className="banner-carousel">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <img src={bannerSlide1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={bannerSlide2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={bannerSlide3} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
