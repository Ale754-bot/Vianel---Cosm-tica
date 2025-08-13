import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-16 text-[#1a1a1a]">

        {/* Imagen única */}
        <motion.img
  src="/Gisel2.jpg"
  alt="Gisel - Fundadora de Vianel"
  className="w-full max-w-[600px] mx-auto rounded-xl shadow-lg object-cover"
  initial={{ scale: 1, opacity: 0 }}
  whileInView={{ scale: 1.05, opacity: 1 }}
  transition={{ duration: 2, ease: 'easeOut' }}
  viewport={{ once: false, amount: 0.5 }}
/>



        {/* Bloque 1 – Quién soy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-serif text-[#c6a25c]"></h3>
          <p className="text-base leading-relaxed text-gray-700">
            Hola, mi nombre es Gisel, soy Dermatocosmiatra Clínica, Aux. en Cirugía Plástica, Docente en Estética y Especialista en patologías cutáneas. Con amplia experiencia en el cuidado de la piel, me comprometo a brindar soluciones efectivas y seguras para el cuidado personal.
          </p>
        </motion.div>

        {/* Bloque 2 – Así nace Vianel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-serif text-[#c6a25c]">Así nace Vianel</h3>
          <p className="text-base leading-relaxed text-gray-700">
            Tengo el placer de presentar mi propia línea de productos Vianel que nace de la fusión entre ciencia y naturaleza, creada con la más alta calidad y dedicación para brindar soluciones efectivas y seguras para el cuidado de la piel. Como creadora de Vianel, me enorgullece ofrecer productos que reflejan mi compromiso con la excelencia y la innovación.
          </p>
        </motion.div>

        {/* Bloque 3 – Tu piel, mi compromiso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-serif text-[#c6a25c]">Tu piel, mi compromiso</h3>
          <p className="text-base leading-relaxed text-gray-700">
            Si estás buscando productos de alta calidad para cuidar tu piel, te invito a conocer más sobre mi línea Vianel y a contactarme para obtener asesoramiento personalizado. Estoy aquí para ayudarte a encontrar las soluciones que mejor se adapten a tus necesidades y objetivos de cuidado personal.
          </p>
        </motion.div>

      </section>
    </div>
  );
};

export default About;
