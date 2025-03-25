import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4CAF50] to-[#45a049] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Brilliant eSystems
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transforming Ideas into Digital Excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-white text-[#4CAF50] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
              <img
                src="/hero-image.svg"
                alt="Digital Innovation"
                className="w-full h-auto relative z-10"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-2">100+</h3>
            <p className="opacity-80">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="opacity-80">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">10+</h3>
            <p className="opacity-80">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">24/7</h3>
            <p className="opacity-80">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 