import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'GREEN CONCEPT', path: '#' },
    { name: 'MEDIA', path: '#' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const rightLinks = [
    { name: 'SAILING YACHTS', path: '#' },
    { name: 'POWER YACHTS', path: '#' },
    { name: 'SUPERYACHTS', path: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[200] transition-all duration-500 ${
        scrolled ? 'bg-navy-950/98 backdrop-blur-lg py-3 shadow-lg' : 'bg-navy-950/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-full mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Hamburger Menu Button - Left Side */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl focus:outline-none z-[220] relative lg:block transition-colors duration-300 ${
              scrolled ? 'text-navy-950 hover:text-red-500' : 'text-white hover:text-red-500'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/logo/logo4-6.webp"
              alt="Best Yachts"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Right - Phone & Social */}
          <div className="flex items-center space-x-8">
            <a
              href="tel:+905356744346"
              className={`flex items-center space-x-2 transition-colors duration-300 ${
                scrolled ? 'text-navy-950 hover:text-red-500' : 'text-white hover:text-red-500'
              }`}
            >
              <FaPhone className="text-sm" />
              <span className="font-light text-sm tracking-wide">+90 535 674 43 46</span>
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/100079578176023"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  scrolled ? 'text-navy-950 hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/bestyachtsturkey/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  scrolled ? 'text-navy-950 hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/best-yachts-for-sale"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  scrolled ? 'text-navy-950 hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu - Sliding from Left */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Sidebar - Must be before overlay to be on top */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed top-0 left-0 h-full w-80 bg-navy-950 z-[9999] shadow-2xl overflow-y-auto"
              >
                <div className="p-8">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white text-2xl hover:text-red-500 transition-colors z-[10000]"
                  >
                    <FaTimes />
                  </button>

                  {/* Logo */}
                  <div className="mb-12 pt-4">
                    <img
                      src="/logo/logo4-6.webp"
                      alt="Best Yachts"
                      className="h-16 w-auto"
                    />
                  </div>

                  {/* Menu Items */}
                  <nav className="space-y-2">
                    {[...navLinks, ...rightLinks].map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className="block py-4 px-4 text-sm font-light text-white hover:bg-red-600/20 hover:text-red-500 transition-all duration-300 tracking-widest uppercase border-b border-white/5"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Contact Info */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <a
                      href="tel:+905356744346"
                      className="flex items-center space-x-3 text-white hover:text-red-500 transition-colors duration-300 mb-6"
                    >
                      <FaPhone className="text-lg" />
                      <span className="font-light text-sm">+90 535 674 43 46</span>
                    </a>
                    <div className="flex items-center space-x-4">
                      <a
                        href="https://www.facebook.com/100079578176023"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-500 transition-colors duration-300"
                      >
                        <FaFacebook className="text-xl" />
                      </a>
                      <a
                        href="https://www.instagram.com/bestyachtsturkey/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-500 transition-colors duration-300"
                      >
                        <FaInstagram className="text-xl" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/best-yachts-for-sale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-500 transition-colors duration-300"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 z-[9990]"
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
