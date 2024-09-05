import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Rah, Tharad Rod</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>7984029734</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>deepmahakali123@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>&copy; Create By Deepchaudhary</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Privacy</a></li>
                    <li className="list-inline-item"><a href="#">Policy</a></li>
                    <li className="list-inline-item"><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="contact-social-links">
                <img src="https://vfitclub.netlify.app/image/whatsapp.svg" alt="WhatsApp" className="nav-hamburger" width="35" height="35" />
                <img src="https://vfitclub.netlify.app/image/facebook.svg" alt="Facebook" className="nav-hamburger" width="35" height="35" />
                <img src="https://vfitclub.netlify.app/image/instagram.svg" alt="Instagram" className="nav-hamburger" width="35" height="35" />
                <img src="https://vfitclub.netlify.app/image/twitter.svg" alt="Twitter" className="nav-hamburger" width="35" height="35" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
