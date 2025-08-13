// src/pages/Home.jsx
import Hero from '../components/Hero';
import ProductoHome from '../components/ProductHome';

const Home = () => {
  const destacados = [
    {
      nombre: 'Crema Antioxidante',
      imagen: '/crema.jpg',
      subtitulo: 'Vitamina C, Niacinamida, Resveratrol y FPS 30. Una crema que trata, nutre y protege.',
      link: '/productos#crema-antioxidante',
    },
    {
      nombre: 'Serum Retinol',
      imagen: '/serum.jpg',
      subtitulo: 'Reduce líneas, estimula colágeno, transforma tu piel.',
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
  <div className="text-center mb-10">
    <h3 className="text-2xl font-serif text-[#1a1a1a]">Destacados</h3>
    <p className="mt-2 text-sm italic text-[#c6a25c]">Selección curada para tu ritual diario</p>
  </div>
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
