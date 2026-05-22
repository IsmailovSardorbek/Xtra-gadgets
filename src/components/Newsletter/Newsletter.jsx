import './newsletter.css'

export default function Newsletter() {
  return (
    <div id="newsletter">
      <div className="container">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h1>
                Our <span>Newsletter</span>
              </h1>

              <p>Get updates by subscribe our weekly newsletter</p>
            </div>

            <div className="newsletter-form">
              <div className="subscribe-form">
                <input type="text" placeholder="Enter your email..." />

                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
