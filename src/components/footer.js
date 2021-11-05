import galleryImg1 from "../images/contact-1.jpg";
import galleryImg2 from "../images/contact-2.jpg";
const Footer = () => (
  <footer id="contact" className="footer">
    <div className="container">
      <div className="footer-container">
        <div className="footer-gallery">
          <h3 className="footer-title">Latest From The Blog</h3>
          <div className="gallery-box">
            <div className="gallery-img">
              <img src={galleryImg1} alt="" width="120" />
            </div>
            <div className="gallery-info">
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                illum, doloribus voluptatem iusto itaque totam, Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="gallery-box">
            <div className="gallery-img">
              <img src={galleryImg2} alt="" width="120" />
            </div>
            <div className="gallery-info">
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                illum, doloribus voluptatem iusto itaque totam, Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <h3 className="footer-title">Company Details</h3>
          <ul>
            <li>Company Name</li>
            <li>Street Name & Number</li>
            <li>Town</li>
            <li>Postal Code</li>
            <li>Tel: 0123456789</li>
            <li>Fax: 0123456789</li>
            <li>
              Email: <span>Ahmed@Saleh.com </span>
            </li>
          </ul>
          <h4 className="working">Working Hours</h4>
          <p>Monday - Friday 08:00 - 17:00</p>
        </div>
        <div className="contact-us">
          <h3 className="footer-title">Contact Us</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="copyright">
        <div className="text">All Right Reserved &copy; 2018</div>
        <div className="author">Designed By AS Template</div>
      </div>
    </div>
  </footer>
);

export default Footer;
