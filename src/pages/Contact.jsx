// src/pages/Contact.jsx
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif mb-4 text-[#1a1a1a]"
        >
          Atención Personalizada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 mb-8"
        >
          En VIANEL, cada consulta es única. Escribinos directamente por WhatsApp y recibí asesoramiento exclusivo.
        </motion.p>

        <motion.a
          href="https://wa.me/5491161861142"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[#c6a25c] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#b08e4f] transition"
        >
          Escribir por WhatsApp
        </motion.a>
      </section>
    </div>
  );
};

export default Contact;
