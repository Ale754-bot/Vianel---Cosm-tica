import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  // Cierra el menú al hacer clic en un link
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="bg-[#f8f5f2] text-[#1a1a1a] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={handleLinkClick}>
          <img
            src="/vianel.png"
            alt="Vianel"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#c2a67d] transition">Inicio</Link>
          <Link to="/products" className="hover:text-[#c2a67d] transition">Productos</Link>
          <Link to="/about" className="hover:text-[#c2a67d] transition">Historia</Link>
          <Link to="/contact" className="hover:text-[#c2a67d] transition">Contacto</Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-xl">&#9776;</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f5f0e7] px-6 pb-4 space-y-2 text-sm font-medium">
          <Link to="/" className="block" onClick={handleLinkClick}>Inicio</Link>
          <Link to="/products" className="block" onClick={handleLinkClick}>Productos</Link>
          <Link to="/about" className="block" onClick={handleLinkClick}>Historia</Link>
          <Link to="/contact" className="block" onClick={handleLinkClick}>Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
