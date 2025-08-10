// src/pages/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif mb-4 text-[#1a1a1a] text-center"
        >
          Nuestra Historia
        </motion.h2>

        {/* Bloque 1: Inicio */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src="/17180.png"
            alt="Inicio de VIANEL"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif mb-4 text-[#1a1a1a]">Los comienzos</h3>
            <p className="text-gray-700 leading-relaxed">
              VIANEL nació del deseo de fusionar arte, moda y elegancia. Fundada por [Nombre de la dueña],
              la marca representa una visión de lujo accesible, con piezas que cuentan historias.
            </p>
          </motion.div>
        </div>

        {/* Bloque 2: Proceso */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <motion.img
            src="/proceso.jpg"
            alt="Proceso creativo"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif mb-4 text-[#1a1a1a]">El proceso</h3>
            <p className="text-gray-700 leading-relaxed">
              Cada decisión visual fue pensada como parte de un relato emocional. Desde el girasol hasta los tonos neutros,
              todo comunica autenticidad y calidez.
            </p>
          </motion.div>
        </div>

        {/* Bloque 3: Presente */}
        <div className="flex flex-col items-center text-center gap-6">
          <motion.img
            src="/presente.jpg"
            alt="Presente de VIANEL"
            className="w-full md:w-2/3 rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl"
          >
            <h3 className="text-2xl font-serif mb-4 text-[#1a1a1a]">El presente</h3>
            <p className="text-gray-700 leading-relaxed">
              Hoy, VIANEL es más que una marca: es una experiencia que conecta desde lo visual y lo humano.
              Cada pieza refleja una historia, una emoción, una intención.
            </p>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default About;
