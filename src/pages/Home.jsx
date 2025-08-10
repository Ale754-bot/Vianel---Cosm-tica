// src/pages/Home.jsx
import Hero from '../components/Hero';
import ProductoHome from '../components/ProductHome';

const Home = () => {
  const destacados = [
    {
      nombre: 'Crema Antioxidante',
      imagen: '/crema.jpg',
      subtitulo: 'Nutrición con girasol y rosa mosqueta',
      link: '/productos#crema-antioxidante',
    },
    {
      nombre: 'Serum Retinol',
      imagen: '/serum.jpg',
      subtitulo: 'Regeneración nocturna con retinol vegetal',
      link: '/productos#serum-retinol',
    },
    {
      nombre: 'Agua de Rosas',
      imagen: '/agua.jpg',
      subtitulo: 'Frescura y calma para todo tipo de piel',
      link: '/productos#agua-de-rosas',
    },
  ];

  return (
    <div className="pt-[80px] bg-[#f5f0e7]">
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-serif mb-6 text-[#1a1a1a]">Destacados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destacados.map((p, i) => (
            <ProductoHome key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
