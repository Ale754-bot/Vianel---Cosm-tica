// src/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <img
        src="/hero-vianel.jpg" // Asegurate de colocar esta imagen en src/assets o public
        alt="VIANEL Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#c6a25c] bg-opacity-40 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white px-4"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">VIANEL</h2>
          <p className="text-lg md:text-xl font-light tracking-wide">
            Belleza que trasciende el tiempo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
