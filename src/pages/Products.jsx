import ProductoDetalle from '../components/ProductoDetalle';

const Products = () => {
  const productos = [
    {
      id: 'crema-antioxidante',
      nombre: 'Crema Antioxidante',
      imagen: '/crema.jpg',
      descripcion:
        'Es una poderosa crema antiage. Con una fórmula única y concentrada, combina los beneficios de la Vitamina C, Niacinamida, Resveratrol, DMAE y Ácido Hialurónico, junto con nanoesferas concentradas y un protector solar FPS 30 UVA/UVB.',
      beneficios: [
        'Unifica el tono de la piel',
    'Acción antiage visible',
    'Protección solar FPS 30',
    'Hidratación intensa y prolongada',
      ],
      activos: [
        'Vitamina C y Resveratrol: antioxidantes que protegen la piel',
        'Niacinamida y DMAE: mejoran elasticidad y firmeza',
        'Ácido Hialurónico: hidrata y retiene la humedad',
      ],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20la%20Crema%20Antioxidante',
    },
    {
      id: 'serum-retinol',
      nombre: 'Serum Retinol',
      imagen: '/serum.jpg',
      descripcion:
        'Nuestro Serum de Retinol al 5% es una fórmula potente diseñada para transformar tu piel. Con su alta concentración de Retinol, ayuda a reducir líneas finas y arrugas, mejorar la textura y el tono de la piel y estimular la producción de colágeno y elastina',
      beneficios: [
        'Piel más suave y luminosa',
        'Reducción visible de arrugas y líneas finas',
        'Tono de piel más uniforme y radiante',
      ],
      activos: [
        'Retinol al 5%: potencia regeneradora con efecto antiage',
  'Estimulación de colágeno y elastina: firmeza desde adentro',
  'Mejora de textura y tono: piel más uniforme y luminosa',
      ],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Serum%20Retinol',
    },
    {
      id: 'agua-de-rosas',
      nombre: 'Agua de Rosas',
      imagen: '/agua.jpg',
      descripcion:
        'Frescura y calma para todo tipo de piel. Un gesto diario que despierta la piel con suavidad y la prepara para el descanso.',
      beneficios: [],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas',
    },
    {
      id: 'gel-contorno-ojos',
      nombre: 'Gel Contorno de Ojos',
      imagen: '/Contorno.jpg',
      descripcion:
        'Descongestiona y revitaliza la mirada con textura ligera y efecto frío. Ideal para despertar la piel y suavizar signos de fatiga.',
      beneficios: [],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Gel%20Contorno%20de%20Ojos',
    },
    {
      id: 'celulas-madre',
      nombre: 'Complejo de Células Madre',
      imagen: '/Complejo.jpg',
      descripcion:
        'Regeneración profunda con activos botánicos. Una fórmula que estimula la renovación celular y potencia la luminosidad natural.',
      beneficios: [],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Complejo%20de%20Células%20Madre',
    },
    {
      id: 'agua-rosas-micelar',
      nombre: 'Agua de Rosas Micelar',
      imagen: '/Micelar.jpg',
      descripcion:
        'Limpieza suave y emocional. Elimina impurezas respetando el equilibrio natural de la piel, con aroma delicado y efecto calmante.',
      beneficios: [],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
    },
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
    </div>

    {/* Grid de productos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((p, i) => (
        <ProductoDetalle
          key={i}
          id={p.id} // ✅ se pasa como prop
          nombre={p.nombre}
          imagen={p.imagen}
          descripcion={p.descripcion}
          beneficios={p.beneficios}
          activos={p.activos}
          whatsappLink={p.whatsappLink}
        />
      ))}
    </div>
  </section>
</div>

  );
};

export default Products;
