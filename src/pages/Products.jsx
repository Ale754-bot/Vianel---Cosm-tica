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
    {
  id: 'gel-contorno-ojos',
  nombre: 'Gel Contorno de Ojos',
  imagen: '/Contorno.jpg',
  descripcion:
    'Descongestiona y revitaliza la mirada con textura ligera y efecto frío. Ideal para despertar la piel y suavizar signos de fatiga.',
  composicion:
    'Extracto de pepino, ácido hialurónico, cafeína vegetal, agua de hamamelis.',
  uso:
    'Aplicar una pequeña cantidad en el contorno de ojos por la mañana y noche, con suaves toques.',
  whatsappLink:
    'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Gel%20Contorno%20de%20Ojos',
},
{
  id: 'celulas-madre',
  nombre: 'Complejo de Células Madre',
  imagen: '/Complejo.jpg',
  descripcion:
    'Regeneración profunda con activos botánicos. Una fórmula que estimula la renovación celular y potencia la luminosidad natural.',
  composicion:
    'Células madre vegetales, niacinamida, aceite de argán, extracto de té blanco.',
  uso:
    'Aplicar por la noche sobre rostro limpio, masajeando suavemente hasta su absorción.',
  whatsappLink:
    'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Complejo%20de%20Células%20Madre',
},
{
  id: 'agua-rosas-micelar',
  nombre: 'Agua de Rosas Micelar',
  imagen: '/Micelar.jpg',
  descripcion:
    'Limpieza suave y emocional. Elimina impurezas respetando el equilibrio natural de la piel, con aroma delicado y efecto calmante.',
  composicion:
    'Agua de rosas, micelas vegetales, extracto de manzanilla, glicerina.',
  uso:
    'Aplicar con un algodón sobre rostro y cuello. No requiere enjuague. Ideal para la rutina de mañana y noche.',
  whatsappLink:
    'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
}

  ];

 return (
  <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Slogan editorial */}
      <div className="text-center mb-12">
  <h1 className="text-xl md:text-2xl lg:text-3xl italic font-serif text-[#c6a25c] leading-snug">
    “Dicen que el alma también se hidrata…<br />con lo que huele a calma”
  </h1>
  <p className="mt-4 text-sm text-gray-500">
    Una colección pensada para nutrir los sentidos y vestir los espacios de serenidad.
  </p>
  <h2 className="mt-6 text-base uppercase tracking-wide text-gray-400">
    Productos
  </h2>
</div>

      {/* Grid de productos */}
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
