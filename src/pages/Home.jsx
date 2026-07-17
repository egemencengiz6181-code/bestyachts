import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAnchor, FaShip, FaCog, FaChartLine, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  
  const heroTexts = [
    'Building Dreams',
    'Creating Excellence',
    'Premium Craftsmanship',
    'Luxury Redefined'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <FaShip className="text-6xl lg:text-7xl" />,
      title: 'Yacht Building',
      description: 'Reach the most reliable and talented luxury yacht builders in Turkey. We offer trustworthy partnerships to build your dream yacht.',
      link: '/yacht-building',
    },
    {
      icon: <FaCog className="text-6xl lg:text-7xl" />,
      title: 'Yacht Refit',
      description: 'Expert refit services with our strong presence in Tuzla, Yalova, Bodrum, Kocaeli, Antalya, and Marmaris.',
      link: '#',
    },
    {
      icon: <FaAnchor className="text-6xl lg:text-7xl" />,
      title: 'Yacht Sales',
      description: 'Find your perfect yacht with our extensive network and expert brokers ready to work for you at the right price.',
      link: '#',
    },
    {
      icon: <FaChartLine className="text-6xl lg:text-7xl" />,
      title: 'Yacht Management',
      description: 'Comprehensive yacht management services including crew, charter, and operational management with meticulous attention.',
      link: '#',
    },
  ];

  const features = [
    'Over 20 years of experience in the yachting industry',
    'Extensive network across Turkish shipyards',
    'Expert brokers and marine engineers',
    'Round-the-clock service and support',
    'State-of-the-art facilities and technology',
    'Commitment to excellence and quality',
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          <motion.img
            key="hero-image"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Yacht"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-white px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="max-w-5xl mx-auto text-left"
          >
            {/* Animated Text */}
            <div className="mb-8 h-16 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={heroTextIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase font-light"
                >
                  {heroTexts[heroTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
            >
              <span className="block text-white">Best Yacht in Turkey</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm md:text-base lg:text-lg mb-12 text-white/70 leading-relaxed max-w-2xl font-light"
            >
              Your Trusted Partner in Luxury Yacht Building, Sales & Charter
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <Link to="/yacht-building" className="btn-primary bg-red-600 hover:bg-red-700 text-white text-sm px-10 py-4 font-light tracking-widest uppercase transition-all duration-300">
                EXPLORE YACHT BUILDING
              </Link>
              <Link to="/contact" className="btn-secondary bg-white text-navy-950 border-2 border-white hover:bg-navy-950 hover:text-white text-sm px-10 py-4 font-light tracking-widest uppercase transition-all duration-300">
                GET IN TOUCH
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white/50 text-3xl"
        >
          ↓
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 text-xs tracking-[0.4em] uppercase font-light mb-6 block">ABOUT US</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy-950 mb-10 leading-tight tracking-wide">
                We Are Your Solution Partner in Turkey
              </h2>
              <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8 font-light">
                Best Yachts Co. is your partner in the rapidly growing yachting sector in Turkey. When you need dependable and expert experience, we provide outstanding contacts and prompt service.
              </p>
              <p className="text-base md:text-lg text-navy-600 leading-relaxed mb-10 font-light">
                Best Yachts Co., a market leader in the marketing, selling, and building of luxury yachts, maintains an extensive network of offices to provide round-the-clock service. We are the go-to choice for yacht sales, yacht charter, yacht management, or new yacht construction because of our experience and meticulous attention to every last detail.
              </p>
              <div className="mt-12 inline-block px-10 py-6 bg-navy-950 text-white border-l-4 border-red-600">
                <p className="text-lg font-light font-serif">
                  With more than 20 years of experience, we are committed to maintaining our position as the leading brokerage for luxury yachting.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - EXPLORE OUR CATAMARANS Style */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* YENİ TEKNELER Style Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="relative inline-block">
              <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl font-extralight text-gray-100 tracking-[0.3em]">
                SERVICES
              </h2>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <p className="text-navy-950 text-xs md:text-sm tracking-[0.4em] uppercase font-light">
                  CHOOSE YOUR SERVICE
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={service.link} className="block relative overflow-hidden">
                  <div className="relative h-[550px] bg-navy-100 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1567899378494-47b22a2ae96a' : 
                        index === 1 ? '1544551763-46a013bb70d5' : 
                        '1605281317010-fe5ffe798166'
                      }?q=80&w=900&auto=format&fit=crop`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-3 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-navy-950/90 via-navy-950/60 to-transparent">
                      <h3 className="font-serif text-3xl lg:text-4xl font-light text-white mb-4 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm font-light leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 text-xs tracking-[0.4em] uppercase font-light mb-6 block">WHY CHOOSE US</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-navy-950 mb-8 leading-tight tracking-wide">The Best Choice for Luxury Yachting</h2>
              <p className="text-lg text-navy-600 mb-10 leading-relaxed font-light">
                Discover incredible deals available in the market. Our global team of expert brokers are ready to work for you to find you the right yacht at the right price.
              </p>
              <div className="space-y-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-5"
                  >
                    <FaCheckCircle className="text-red-600 text-xl flex-shrink-0 mt-1" />
                    <p className="text-navy-700 text-base lg:text-lg font-light">{feature}</p>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary text-sm px-10 py-5 font-light tracking-widest">
                GET STARTED TODAY
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[700px] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury Yacht"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-10 -left-10 bg-red-600 text-white p-10 lg:p-12 shadow-2xl max-w-sm"
              >
                <div className="text-6xl lg:text-7xl font-light font-serif mb-3">20+</div>
                <div className="text-lg lg:text-xl font-light leading-tight">Years of Excellence in Yachting Industry</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Service Categories - Grayscale to Color */}
      <section className="py-0 bg-white">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { title: 'YACHT REFIT', image: 'photo-1605281317010-fe5ffe798166' },
              { title: 'YACHT SALES', image: 'photo-1567899378494-47b22a2ae96a' },
              { title: 'YACHT CHARTER', image: 'photo-1544551763-46a013bb70d5' },
              { title: 'YACHT MANAGEMENT', image: 'photo-1540946485063-a40da27545f8' }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[450px] overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/${category.image}?q=80&w=800&auto=format&fit=crop`}
                  alt={category.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/30 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl lg:text-3xl font-light text-white tracking-wider text-center px-6">
                    {category.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YENİ TEKNELER Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block">
              <h2 className="font-serif text-8xl md:text-9xl font-extralight text-gray-100 tracking-[0.3em]">
                TEKNELER
              </h2>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <p className="text-navy-950 text-sm tracking-[0.5em] uppercase font-light">
                  YENİ TEKNELER
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['1567899378494-47b22a2ae96a', '1544551763-46a013bb70d5', '1605281317010-fe5ffe798166'].map((imageId, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[350px] overflow-hidden mb-6">
                  <img
                    src={`https://images.unsplash.com/photo-${imageId}?q=80&w=900&auto=format&fit=crop`}
                    alt={`Yacht ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light text-navy-950 mb-3">
                  Luxury Yacht {100 + index * 10}
                </h3>
                <p className="text-navy-600 text-sm font-light leading-relaxed">
                  Premium craftsmanship meets modern design
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section - Bavaria Style */}
      <section className="py-32 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2074&auto=format&fit=crop"
            alt="Luxury Yacht"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="border border-white/30 inline-block px-6 py-2 mb-8">
              <p className="text-xs tracking-[0.3em] uppercase font-light">BEST YACHTS NEWS</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Summer Deal: Save Up To €32,000 On A New Yacht', date: 'June 2024' },
              { title: 'Best Yachts Presents The Signature Edition', date: 'May 2024' },
              { title: 'Experience Yachts Authentically: Open Days', date: 'April 2024' }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="font-serif text-2xl font-light mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {news.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 font-light">{news.date}</p>
                <button className="text-sm tracking-widest uppercase font-light border-b border-white/30 group-hover:border-red-500 group-hover:text-red-500 transition-all duration-300 pb-1">
                  DAHA FAZLA KEŞFET →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2074&auto=format&fit=crop"
            alt="Luxury Yacht"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="text-red-500 text-xs tracking-[0.4em] uppercase font-light mb-8 block">GET IN TOUCH</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-10 leading-tight tracking-wide">
              Ready to Embark on Your Yachting Journey?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
              Get in touch with Best Yachts today to discuss your needs and how we can assist you in achieving your yachting dreams.
            </p>
            <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white text-sm px-12 py-6 font-light tracking-widest uppercase transition-colors duration-300 inline-block">
              CONTACT US NOW
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
