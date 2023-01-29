import "./footer.css"
import footerLogo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding ">
      <h1 className="gradient__text">
        Do you want to step on to the future before others
      </h1>
      <div className="btn"><span>Request Early access</span></div>

      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content_header">
 <img src={footerLogo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        
        <div className="gpt3__footer-content_text">      <ul>

          <h4>Links</h4>
          <li><a href="#">Ovevrons</a></li>
          <li><a href="#">Social Media</a></li>
          <li><a href="#">Counters</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <ul>

          <h4>Company</h4>
          <li><a href="#">Terms and condition</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul>

          <h4>Get in <i class="fas fa-scanner-touchscreen    "></i></h4>
          <li><a href="#">Crecgterwoord k12 182 dk aknjkcb </a></li>
          <li><a href="#">085-132567</a></li>
          <li><a href="#">info@gmail.com</a></li>
        </ul>
        </div>

      </div>
      <div className="gpt3__footer-copyright">
      <p>&copy; 202 GPt-3,  Al rights reserved.</p></div>

    </div>




  )
}

export default Footer