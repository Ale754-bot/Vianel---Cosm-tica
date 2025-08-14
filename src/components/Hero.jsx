import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#f5f0e7]">
      {/* Imagen de fondo con zoom-out lento */}
      <motion.img
        src="/Modelo.jpg"
        alt="VIANEL Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 4 }}
      />

      {/* Niebla suave desde abajo */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#f5f0e7] to-transparent z-10" />

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* Logotipo animado */}
        <motion.img
          src="/vianel.png"
          alt="Vianel Logo"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
            delay: 0.3
          }}
          className="mx-auto h-16 md:h-24 mb-6 drop-shadow-[0_2px_6px_rgba(255,255,255,0.5)]"
        />

        {/* Frase editorial más sutil */}
        <p className="text-base sm:text-xl italic text-white">
  Sentí la pureza, sentí{' '}
  <span className="text-[#c6a25c] font-semibold italic">Vianel.</span>
</p>

      </motion.div>
    </section>
  );
};

export default Hero;
