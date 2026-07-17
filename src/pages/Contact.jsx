import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Our Address',
      content: [
        'Aydıntepe Mah. Sahilyolu Bulvarı',
        'Alize İş Merkezi NO: 191/76',
        'TUZLA – İSTANBUL – TR',
      ],
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone Number',
      content: ['+90 535 674 43 46'],
      link: 'tel:+905356744346',
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email Address',
      content: ['info@bestyacht.net'],
      link: 'mailto:info@bestyacht.net',
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Working Hours',
      content: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  const services = [
    'Yacht Building & Construction',
    'Yacht Sales & Brokerage',
    'Yacht Refit & Maintenance',
    'Yacht Charter Services',
    'Yacht Management',
    'New Build Project Management',
    'Crew Management',
    'General Inquiry',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us"
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 max-w-3xl mx-auto">
              Ready to embark on your yachting journey? Let's discuss your needs and how we can assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 text-center group hover:bg-navy-950 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 text-gold-600 rounded-full mb-6 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-4 group-hover:text-white transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="text-navy-600 group-hover:text-navy-300 transition-colors duration-300">
                  {info.link ? (
                    <a
                      href={info.link}
                      className="hover:text-gold-500 transition-colors duration-300"
                    >
                      {info.content.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </a>
                  ) : (
                    info.content.map((line, i) => <p key={i}>{line}</p>)
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-navy-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Send Us a Message</h2>
              <p className="text-lg text-navy-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-navy-200 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-navy-900"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border-2 border-navy-200 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-navy-900"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border-2 border-navy-200 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-navy-900"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-navy-900 mb-2">
                    Subject / Service Interest *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-navy-200 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-navy-900"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 bg-white border-2 border-navy-200 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-navy-900 resize-none"
                    placeholder="Tell us about your yachting needs..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold w-full group">
                  <span className="flex items-center justify-center">
                    SEND MESSAGE
                    <FaPaperPlane className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Why Choose Best Yachts?</h2>
              <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                Whether you're interested in buying, building, or managing your yacht, we're here to help you achieve your yachting dreams.
              </p>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-sm shadow-lg">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                    Expert Consultation
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    Our team of marine engineers and naval architects brings over 20 years of experience in the yachting industry, providing you with expert guidance every step of the way.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-lg">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                    Comprehensive Services
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    From yacht building and sales to refit, charter, and management, we offer a complete range of services to meet all your yachting needs under one roof.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-lg">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                    Strategic Location
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    Based in Turkey's premier yachting hub with partnerships across Tuzla, Antalya, Bodrum, Kocaeli, Yalova, and Marmaris, we're strategically positioned to serve you.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-lg">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                    Round-the-Clock Support
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    Our extensive network of offices ensures we can provide you with prompt service and support whenever you need it, day or night.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle mx-auto">
              We're located in the heart of Turkey's premier yachting district in Tuzla, Istanbul.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-sm overflow-hidden shadow-2xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.7445682894!2d29.295!3d40.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ4JzAwLjAiTiAyOcKwMTcnNDIuMCJF!5e0!3m2!1sen!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Best Yachts Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Let's Start Your Yachting Journey
            </h2>
            <p className="text-xl text-navy-200 mb-10">
              Get in touch with Best Yachts today and discover how we can turn your yachting dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+905356744346" className="btn-gold">
                CALL US NOW
              </a>
              <a href="mailto:info@bestyacht.net" className="btn-secondary text-white border-white hover:bg-white hover:text-navy-950">
                EMAIL US
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
