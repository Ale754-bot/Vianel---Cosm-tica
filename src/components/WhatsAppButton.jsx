// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5491161861142"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#c6a25c] text-white p-4 rounded-full shadow-lg hover:scale-105 transition z-50"
  >
    <FaWhatsapp size={24} />
  </a>
);

export default WhatsAppButton;
