import Hero from '../components/Hero';
import ProductoHome from '../components/ProductHome';

const Home = () => {
  const destacados = [
    {
      nombre: 'Crema Antioxidante',
      imagen: '/crema.jpg',
      subtitulo: 'Vitamina C, Niacinamida, Resveratrol y FPS 30. Una crema que trata, nutre y protege.',
      link: '/products#crema-antioxidante',
    },
    {
      nombre: 'Serum Retinol',
      imagen: '/serum.jpg',
      subtitulo: 'Reduce líneas, estimula colágeno, transforma tu piel.',
      link: '/products#serum-retinol',
    },
    {
      nombre: 'Agua de Rosas',
      imagen: '/agua.jpg',
      subtitulo: 'Frescura y calma para todo tipo de piel',
      link: '/products#agua-de-rosas',
    },
  ];

  return (
    <div className="pt-[80px] bg-[#f5f0e7]">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif text-[#1a1a1a]">Productos Destacados</h3>
          <p className="mt-2 text-base italic text-[#c6a25c]">Selección curada para tu ritual diario</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {destacados.map((p, i) => (
            <ProductoHome key={i} {...p} />
          ))}
        </div>
      </section>
      <div className="bg-[#fdfaf5] py-12 text-center">
  <p className="font-serif text-[#c6a25c] text-sm mb-4 tracking-wide">
    Cada ritual cuenta una historia. Descubrí la colección completa.
  </p>
  <a
    href="/products"
    className="px-6 py-2 border border-[#c6a25c] text-[#c6a25c] font-serif text-sm rounded-full hover:bg-[#c6a25c] hover:text-white transition"
  >
    Ver línea completa
  </a>
</div>


    </div>
  );
};

export default Home;
