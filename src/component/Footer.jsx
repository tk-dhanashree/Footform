import '../styles/Footer.css'
import Reboot from '../assets/Reboot.png';
import LinkedIn from '../assets/LinkedIn.png';

function Footer() {
  return (
    <footer className="footer--section">
      <div className="footer--first--section">
        <div className="footer--first--subsection1">
          <div className="designed">
            <h3 className="footer-text-1">
              Designed And Developed By Reboot Consultancy And Services
            </h3>
          </div>
          <div>
            <h4 className="footer-text-2">Contact Details:-</h4>
            <ul className="mt-4">
              <li className="footer-text-3">
                <a href="tel:+917057141513">
                  Contact Number:- +91 7057141513
                </a>
              </li>
              <li className="footer-text-3">
                <a href="https://maps.app.goo.gl/H2XPvBYv2nwPUunB9" target="_blank">
                  Location:- Kothrud Pune 411038
                </a>
              </li>
              <li className="footer-text-3">
                <a href="mailto:sales@rebootcas.com?subject=Subject%20Here&body=Body%20Text%20Here">
                  Email ID:- sales@rebootcas.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer--first--subsection2">
          <img className="logo2" src={Reboot} alt="Logo2" />
        </div>
      </div>
      <div className="footer--second--section">
        <p className="footer-text-4">
          Copyright © 2024 REBOOTCAS ®
        </p>
        <a href="https://in.linkedin.com/company/reboot-consultancy-services" target="_blank" className="">
          <img src={LinkedIn} alt="LinkedIn Logo" width="100" height="26" />
        </a>
      </div>
    </footer>
  )
}

export default Footer