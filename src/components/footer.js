import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <footer className="footer-container">
        <div className="footer-container01">
          <div className="footer-container02">
            <div className="footer-container03">
              <span className="footer-text">{props.text2}</span>
              <span className="footer-text1">{props.text3}</span>
              <span className="footer-text2">{props.text4}</span>
              <span className="footer-text3">{props.text5}</span>
            </div>
            <div className="footer-container04">
              <span className="footer-text4">{props.text6}</span>
              <span className="footer-text5">{props.text7}</span>
              <span className="footer-text6">{props.text8}</span>
            </div>
          </div>
          <a href="http://teneightyagency.com/" className="footer-link">
            <div className="footer-container05">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="footer-image"
              />
              <span className="footer-text7">{props.text1}</span>
            </div>
          </a>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-container06">
          <span className="footer-text8 body2">{props.text}</span>
          <div className="footer-container07">
            <a
              href="https://www.instagram.com/teneightyagency/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
              <div className="footer-container08">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.facebook.com/TenEightyAgency/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
              <div className="footer-container09">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon2"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://twitter.com/teneightyagency"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link3"
            >
              <div className="footer-container10">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon4"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/teneightyagency/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link4"
            >
              <div className="footer-container11">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon6"
                >
                  <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  text1: 'TenEighty Agency',
  text: '©  TenEighty Agency. All rights reserved',
  text2: 'What We Do',
  text5: 'Blog',
  text4: 'Careers',
  image_alt: 'image',
  text8: 'Privacy Policy',
  text6: 'About Us',
  text3: 'Case Studies',
  image_src: '/playground_assets/teneighty%20agency-05-200h.png',
  text7: 'Contact Us',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  image_alt: PropTypes.string,
  text8: PropTypes.string,
  text6: PropTypes.string,
  text3: PropTypes.string,
  image_src: PropTypes.string,
  text7: PropTypes.string,
}

export default Footer
