// src/pages/Products.jsx
import ProductoDetalle from '../components/ProductoDetalle';

const Products = () => {
  const productos = [
    {
      id: 'crema-antioxidante',
      nombre: 'Crema Antioxidante',
      imagen: '/crema.jpg',
      descripcion:
        'Nutrición profunda con girasol y rosa mosqueta. Ideal para pieles que buscan equilibrio, suavidad y un momento de conexión nocturna.',
      composicion: 'Agua de rosas, escualano vegetal, vitamina E, aceite de girasol, rosa mosqueta.',
      uso: 'Aplicar por la noche sobre piel limpia, masajeando suavemente hasta su completa absorción.',
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20la%20Crema%20Antioxidante',
    },
    {
      id: 'serum-retinol',
      nombre: 'Serum Retinol',
      imagen: '/serum.jpg',
      descripcion:
        'Regeneración nocturna con retinol vegetal. Una caricia activa que acompaña el descanso celular y revitaliza la piel.',
      composicion: 'Retinol vegetal, aceite de jojoba, extracto de lavanda, vitamina C.',
      uso: 'Aplicar 2 gotas antes de dormir, evitando el contorno de ojos. Masajear suavemente.',
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Serum%20Retinol',
    },
    {
      id: 'agua-de-rosas',
      nombre: 'Agua de Rosas',
      imagen: '/agua.jpg',
      descripcion:
        'Frescura y calma para todo tipo de piel. Un gesto diario que despierta la piel con suavidad y la prepara para el descanso.',
      composicion: 'Agua destilada de pétalos de rosa, glicerina vegetal, extracto de manzanilla.',
      uso: 'Rociar sobre el rostro por la mañana y antes de dormir. Puede usarse como tónico o bruma refrescante.',
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas',
    },
  ];

  return (
    <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-serif mb-8 text-[#1a1a1a]">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p, i) => (
            <div key={i} id={p.id}>
              <ProductoDetalle
                nombre={p.nombre}
                imagen={p.imagen}
                descripcion={p.descripcion}
                composicion={p.composicion}
                uso={p.uso}
                whatsappLink={p.whatsappLink}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
