// src/pages/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif mb-6 text-[#1a1a1a]"
        >
          Nuestra Historia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 leading-relaxed mb-8"
        >
          VIANEL nació del deseo de fusionar arte, moda y elegancia. Fundada por [Nombre de la dueña],
          la marca representa una visión de lujo accesible, con piezas que cuentan historias.
        </motion.p>

        <motion.img
          src="/founder.jpg"
          alt="Fundadora de VIANEL"
          className="w-full rounded-lg shadow-md object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </section>
    </div>
  );
};

export default About;
