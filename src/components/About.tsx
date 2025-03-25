import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Brilliant eSystems</h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/about-image.jpg"
              alt="About Brilliant eSystems"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Leading Software Development in Kano
            </h3>
            <p className="text-gray-600">
              Brilliant eSystems is a premier software development company based in Kano, Nigeria. 
              We specialize in creating innovative digital solutions that help businesses thrive 
              in the modern digital landscape.
            </p>
            <p className="text-gray-600">
              Our team of expert developers, designers, and consultants work together to deliver 
              cutting-edge solutions that meet your specific needs and exceed your expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-[#4CAF50] mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  To empower businesses through innovative technology solutions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-[#4CAF50] mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  To be the leading tech innovator in Northern Nigeria.
                </p>
              </div>
            </div>

            <button className="mt-8 bg-[#4CAF50] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300 transform hover:-translate-y-1">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 