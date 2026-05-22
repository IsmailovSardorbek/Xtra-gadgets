import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './news.css'
import news from '../../data/news.json'
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function News() {
  return (
    <div id="news">
      <div className="container">
        <div className="news-content">
          <div className="news-header">
            <div className="news-header__title">
              <h1>
                Latest <span>News</span>
              </h1>

              <p>
                Get updated with the latest news of new technologies and gadgets
              </p>
            </div>

            <a href="#" className="news-link">
              All News
              <div className="news-icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </a>
          </div>

          <div className="news-carousel__wrapper">
            <div className="news-carousel">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },

                  576: {
                    slidesPerView: 2,
                  },

                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                {news.map((n) => (
                  <SwiperSlide>
                    <div className="news-card">
                      <div className="news-card__top">
                        <img src={`img/n${n.id}.jpg`} />
                      </div>

                      <div className="news-card__body">
                        <h2>{n.title}</h2>
                        <p className="post-date">{n.postDate}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
