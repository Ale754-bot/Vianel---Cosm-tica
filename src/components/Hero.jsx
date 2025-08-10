// src/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <img
        src="/Modelo.jpg"
        alt="VIANEL Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-opacity-90 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white px-4"
        >
          {/* Logotipo animado y destacado */}
          <motion.img
            src="/vianel.png" // Usá /vianel-white.png si tenés una versión blanca
            alt="Vianel Logo"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.8, 0.25, 1],
              delay: 0.3
            }}
            className="mx-auto h-16 md:h-24 mb-4 drop-shadow-[0_2px_6px_rgba(255,255,255,0.5)]"
          />

          <p className="text-lg md:text-xl font-light tracking-wide">
            Sentí la pureza, sentí Vianel.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
