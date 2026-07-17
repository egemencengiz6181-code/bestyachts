import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTools, FaPencilRuler, FaCogs, FaPalette, FaCheckCircle, FaAnchor } from 'react-icons/fa';

const YachtBuilding = () => {
  const builders = [
    {
      name: 'PINA MARIN',
      location: 'Antalya Free Trade Zone',
      link: 'http://www.pinamarin.com/',
    },
    {
      name: 'ADA SHIPYARD',
      location: 'Tuzla Istanbul',
      link: 'https://ada-shipyard.com/',
    },
    {
      name: 'AES SHIPYARD',
      location: 'Kocaeli Free Trade Zone',
      link: 'https://www.aesyacht.com/',
    },
    {
      name: 'ARC YACHTS',
      location: 'Antalya Free Trade Zone',
      link: 'https://www.arcsolaryacht.com/',
    },
  ];

  const constructionProcess = [
    {
      icon: <FaPencilRuler className="text-4xl" />,
      title: 'Conceptual Design',
      description: 'Collaborative work between clients, designers, and naval architects to create artistic conceptualization combining aesthetic vision with structural excellence.',
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: 'Material Selection',
      description: 'Thoughtful selection of materials ensuring durability, strength, and aesthetic beauty, meeting the finest standards for yacht construction.',
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: 'Construction & Assembly',
      description: 'Skilled craftsmen undertake careful construction with advanced techniques, ensuring every seam, joint, and fixture is built to perfection.',
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: 'Finishing & Interior Design',
      description: 'Luxury interior design brings life to inner spaces, creating environments that speak of opulence, comfort, and the owner\'s personal style.',
    },
  ];

  const advantages = [
    'Skilled pool of artisans and craftsmen',
    'Strategic geolocation for yachting destinations',
    'State-of-the-art shipyards with modern technology',
    'Blend of tradition and innovation',
    'Efficient, top-of-the-line yacht building',
    'Excellence in craftsmanship and quality',
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-900/75 to-navy-950/85 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop"
            alt="Yacht Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Yacht Building in Turkey
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 max-w-4xl mx-auto">
              We are Offering a Trustworthy Partnership to Reach the Most Reliable and Talented Luxury Yacht Builders in Turkey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="section-title">Your Reliable Partner for Yacht Building</h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                Best Yachts Team is your reliable partner for yacht building in Turkey. If you are investing in the Yachting industry as an investor to build a Yacht or you are seeking the best choice matching your needs as well as your budget to buy a Yacht, now you are looking at the right website.
              </p>
              <p className="text-lg text-navy-600 leading-relaxed">
                The search for the right yacht requires professional guidance as well as personal insight. Every Yacht is different and our global team of expert brokers are ready to work for you to find you the right yacht at the right price.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 bg-navy-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Unveiling the Excellence in Craftsmanship</h2>
            <p className="section-subtitle mx-auto">
              Turkey has quickly grown into a yacht building hub in the world where centuries-old craftsmanship blends with modern technology and luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1608381199471-854a6509be83?q=80&w=2071&auto=format&fit=crop"
                  alt="Yacht Construction"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                What makes Turkey's yacht building so appealing is that it mixes the old and the new. Being a maritime country with traditional skills from ancient times, modern yacht construction infuses ancient techniques with the latest innovations.
              </p>
              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                From the sailing vessels of yesteryears to the high-tech, modern superyachts, the Turkish yacht builders business industry has received widespread attention for excellence, quality, and innovation.
              </p>
              <Link to="/contact" className="btn-primary">
                START YOUR PROJECT
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Yacht Construction Process</h2>
            <p className="section-subtitle mx-auto">
              Turkey takes up the process of yacht construction whereby the procedures are carried out with a symphony of skills, innovation, and attention to details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-100 text-gold-600 rounded-full mb-6 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-4">
                  {step.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="max-w-4xl mx-auto bg-navy-950 text-white p-12 rounded-sm">
              <FaAnchor className="text-6xl text-gold-500 mx-auto mb-6" />
              <h3 className="font-serif text-3xl font-bold mb-4">
                Excellence Through Every Phase
              </h3>
              <p className="text-lg text-navy-200 leading-relaxed">
                All these phases come together in the shipyards of Turkey, where passion, precision, and innovation merge with delivery of yachts of unmitigated beauty: embodying artistry and technical brilliance as they sway to and fro on the high seas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Turkish Advantage */}
      <section className="py-24 bg-navy-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">The Turkish Advantage in Yacht Building</h2>
              <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                Turkey boasts of an edge in yacht building due to many advantages. The strategic geolocation of Turkey makes it accessible to prominent yachting destinations.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <FaCheckCircle className="text-gold-600 text-xl flex-shrink-0 mt-1" />
                    <p className="text-navy-700 text-lg">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
                alt="Turkish Shipyard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yacht Builders */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Famous Yacht Builders in Turkey</h2>
            <p className="section-subtitle mx-auto">
              Turkey is home to a range of notable yacht builders and manufacturers, each covering different aspects of yacht construction with exceptional expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {builders.map((builder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 text-center group hover:bg-navy-950 transition-all duration-500"
              >
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4 group-hover:text-white transition-colors duration-300">
                  {builder.name}
                </h3>
                <p className="text-navy-600 mb-6 group-hover:text-navy-300 transition-colors duration-300">
                  {builder.location}
                </p>
                <a
                  href={builder.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gold-600 font-semibold hover:text-gold-500 transition-colors duration-300"
                >
                  VISIT WEBSITE →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold-500">
                Antalya Free Trade Zone
              </h2>
              <h3 className="font-serif text-2xl font-semibold mb-4">Yacht Building Zone</h3>
              <p className="text-lg text-navy-200 mb-6 leading-relaxed">
                Antalya Free trade zone is one of the biggest Yacht Builders location in Turkey. The Free Trade Zone is giving several advantages to the investors. Import and export incentives at the zone is an advantage.
              </p>
              <p className="text-lg text-navy-200 leading-relaxed">
                Antalya is one of the most beautiful city in Turkey. It is called a capital City for Tourism in Turkey. The climate offers a lot of sunshine and warmer weather during winter. The investor also like the benefits of the city which Antalya offers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold-500">
                Tuzla - TURKEY
              </h2>
              <h3 className="font-serif text-2xl font-semibold mb-4">Ship Building Center</h3>
              <p className="text-lg text-navy-200 mb-6 leading-relaxed">
                Tuzla is a great location for building Ships. There are many small and big shipyards at the zone with a supporting thousands of contractors, suppliers, engineers, services and design offices.
              </p>
              <p className="text-lg text-navy-200 leading-relaxed">
                Tuzla is the center of marine and ship building industrie. The heart of shipbuilding center Tuzla is a perfect zone to build or refit yachts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title">Turkey's Unique Domain of Yacht Making</h2>
            <p className="text-lg text-navy-600 mb-10 leading-relaxed">
              BestYachts.net is a symbol of craftsmanship, design, and innovation in yacht building. Rich maritime heritage constitutes its commitment to unparalleled quality, making Turkey one of the premier destinations for yacht aficionados.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-gold">
                GET IN TOUCH
              </Link>
              <Link to="/" className="btn-secondary">
                BACK TO HOME
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default YachtBuilding;
