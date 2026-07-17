import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="font-serif text-2xl font-bold mb-6">
              BEST<span className="text-red-500">YACHTS</span>
            </div>
            <p className="text-navy-300 mb-6 leading-relaxed">
              Your trusted partner in the rapidly growing yachting sector in Turkey. With over 20 years of experience, we provide outstanding service in yacht sales, building, and management.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/100079578176023"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-navy-900 hover:bg-red-600 text-white transition-all duration-300 rounded-sm"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://twitter.com/BestYachtsCo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-navy-900 hover:bg-red-600 text-white transition-all duration-300 rounded-sm"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/bestyachtsturkey/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-navy-900 hover:bg-red-600 text-white transition-all duration-300 rounded-sm"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/best-yachts-for-sale"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-navy-900 hover:bg-red-600 text-white transition-all duration-300 rounded-sm"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white border-t-2 border-red-600 pt-3 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/yacht-building" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Yacht Building
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Yacht Sales
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Yacht Refit
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Yachts Charter
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Yacht Management
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white border-t-2 border-red-600 pt-3 inline-block">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Luxury Yacht Building
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Superyacht Construction
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Yacht Design & Build
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  New Build Management
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Refit Management
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Charter Management
                </Link>
              </li>
              <li>
                <Link to="#" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  Crew Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white border-t-2 border-red-600 pt-3 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-navy-300">
                  Aydıntepe Mah. Sahilyolu Bulvarı<br />
                  Alize İş Merkezi NO: 191/76<br />
                  TUZLA – İSTANBUL – TR
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-red-500 flex-shrink-0" />
                <a href="tel:+905356744346" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  +90 535 674 43 46
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 flex-shrink-0" />
                <a href="mailto:info@bestyacht.net" className="text-navy-300 hover:text-red-500 transition-colors duration-300">
                  info@bestyacht.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-navy-400 text-sm">
              © {currentYear} Best Yachts Co. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-navy-400 hover:text-red-500 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-navy-400 hover:text-red-500 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
