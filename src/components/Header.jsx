// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#f8f5f2] text-[#1a1a1a] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logotipo en lugar del texto */}
        <Link to="/">
          <img
            src="/vianel.png" // Asegurate de que esté en la carpeta public/
            alt="Vianel"
            className="h-10 w-auto" // Ajustá el tamaño según tu diseño
          />
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#c2a67d] transition">Inicio</Link>
          <Link to="/products" className="hover:text-[#c2a67d] transition">Productos</Link>
          <Link to="/about" className="hover:text-[#c2a67d] transition">Historia</Link>
          <Link to="/contact" className="hover:text-[#c2a67d] transition">Contacto</Link>
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-xl">&#9776;</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f5f0e7] px-6 pb-4 space-y-2">
          <Link to="/" className="block">Inicio</Link>
          <Link to="/products" className="block">Productos</Link>
          <Link to="/about" className="block">Historia</Link>
          <Link to="/contact" className="block">Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
