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

        {/* Bloque 1: Quién soy */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src="/Gisel2.jpg"
            alt="Gisel - Fundadora de Vianel"
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
            <h3 className="text-2xl font-serif mb-4 text-[#1a1a1a]">Quién soy</h3>
            <p className="text-gray-700 leading-relaxed">
              Hola, soy Gisel, Dermatocosmiatra Clínica, Auxiliar en Cirugía Plástica, Docente en Estética e Instructora en Formación Profesional, especialista en patologías cutáneas. Con amplia experiencia en el cuidado de la piel y la enseñanza, me comprometo a brindar soluciones efectivas y seguras para el cuidado personal.
            </p>
          </motion.div>
        </div>

        {/* Bloque 2: Así nace Vianel */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <motion.img
            src="/17377.png"
            alt="Creación de Vianel"
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
            <h3 className="text-2xl font-serif mb-4 text-[#1a1a1a]">Así nace Vianel</h3>
            <p className="text-gray-700 leading-relaxed">
              Tengo el placer de presentar mi propia línea de productos Vianel, creada con la más alta calidad y dedicación para brindar soluciones efectivas y seguras para el cuidado de la piel. Como creadora de Vianel, me enorgullece ofrecer productos que reflejan mi compromiso con la excelencia y la innovación.
            </p>
          </motion.div>
        </div>

        {/* Bloque 3: Tu piel, mi compromiso */}
        <div className="flex flex-col items-center text-center gap-6">
          <motion.img
            src="/17472.jpg"
            alt="Compromiso con tu piel"
            className="w-[90%] md:w-[70%] lg:w-[40%] rounded-xl shadow-lg object-cover"
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
            <h3 className="text-2xl font-serif mb-4 text-[#1a1a1a]">Tu piel, mi compromiso</h3>
            <p className="text-gray-700 leading-relaxed">
              Si estás buscando productos de alta calidad para cuidar tu piel, te invito a conocer más sobre mi línea Vianel y a contactarme para obtener asesoramiento personalizado. Estoy aquí para ayudarte a encontrar las soluciones que mejor se adapten a tus necesidades y objetivos de cuidado personal.
            </p>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default About;
