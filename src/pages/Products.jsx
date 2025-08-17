import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
        'Unifica el tono de la piel.',
        'Acción antiage visible.',
        'Protección solar FPS 30.',
        'Hidratación intensa y prolongada.',
      ],
      activos: [
        'Vitamina C y Resveratrol: antioxidantes que protegen la piel.',
        'Niacinamida y DMAE: mejoran elasticidad y firmeza.',
        'Ácido Hialurónico: hidrata y retiene la humedad.',
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
        'Piel más suave y luminosa.',
        'Reducción visible de arrugas y líneas finas.',
        'Tono de piel más uniforme y radiante.',
      ],
      activos: [
        'Retinol al 5%: potencia regeneradora con efecto antiage.',
        'Estimulación de colágeno y elastina: firmeza desde adentro.',
        'Mejora de textura y tono: piel más uniforme y luminosa.',
      ],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Serum%20Retinol',
    },
    {
      id: 'agua-de-rosas',
      nombre: 'Agua de Rosas',
      imagen: '/agua.jpg',
      descripcion:
        'Descubrí la esencia pura de la naturaleza en cada gota. Su poder calmante e hidratante transforma la limpieza diaria en un ritual de armonía. Respira suavidad, equilibrio y belleza emocional.',
      beneficios: [
        'Limpiar y purificar la piel.',
        'Hidratar y suavizar.',
        'Descongestionar y reducir la inflamación.',
        'Calmar y equilibrar la piel.',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas',
    },
    {
      id: 'gel-contorno-ojos',
      nombre: 'Gel Contorno de Ojos',
      imagen: '/Contorno.jpg',
      descripcion:
       'Revitalizá tu mirada con una fórmula que despierta, hidrata y protege. El ginseng y el ácido hialurónico reducen bolsas y ojeras, mientras el aloe vera suaviza con frescura natural. El colágeno y los aminoácidos tonifican y rejuvenecen visiblemente, y la vitamina E junto al aceite de ricino nutren en profundidad. Un gesto diario que transforma tu contorno en un ritual de belleza emocional.',
      beneficios: [
        'Piel más suave y radiante.',
        'Reducción de líneas finas y arrugas.',
        'Mirada más joven y fresca.',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Gel%20Contorno%20de%20Ojos',
    },
    {
      id: 'celulas-madre',
      nombre: 'Complejo de Células Madre',
      imagen: '/Complejo.jpg',
      descripcion:'Descubre el poder de las células madre en nuestra crema concentrada con activos reparadores y antioxidantes',
      beneficios: [
        'Repara y renueva: Ayuda a restaurar la piel dañada.',
        'Hidrata y nutre: Proporciona una hidratación profunda y nutre la piel para dejarla suave y radiante.',
        'Protege y rejuvenece: Con antioxidantes y activos reparadores, protege la piel del estrés ambiental y promueve un aspecto más joven.',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Complejo%20de%20Células%20Madre',
    },
    {
      id: 'agua-rosas-micelar',
      nombre: 'Agua de Rosas Micelar',
      imagen: '/Micelar.jpg',
      descripcion:
        'Descubre el poder de las rosas en nuestra agua de Rosas Micelar. Con materia prima de rosas de alta calidad. Es ideal para todos los tipos de piel, incluyendo pieles sensibles gracias a su fórmula suave y efectiva que te dejará con una piel fresca, hidratada y radiante.',
      beneficios: [
        'Limpia y purifica: Elimina impurezas y maquillaje sin resecar la piel.',
        'Hidrata y suaviza: Proporciona una hidratación profunda y deja la piel suave y radiante.',
        'Desinflamatorio y calmante: Ayuda a reducir la inflamación y el enrojecimiento.',
        'Antiage: Ayuda a prevenir los signos del envejecimiento y a mantener la piel joven y radiante.',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
    },
    {
      id: 'crema-despigmentante',
      nombre: 'Crema Despigmentante',
      imagen: '/despig.jpg',
      descripcion:
        'La Crema Despigmentante Vianel combina ácido kójico, emblica y mandélico para reducir manchas, unificar el tono y prevenir nuevas pigmentaciones. Su fórmula inteligente actúa en profundidad, inhibiendo la producción de melanina y devolviendo a tu rostro una apariencia radiante, uniforme y luminosa. Porque cada piel merece contar su historia sin sombras.',
      beneficios: [
         'Piel más radiante y uniforme.',
        'Reducción de manchas y hiperpigmentación.',
        'Aspecto más joven y saludable.',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
    },
    {
      id: 'serum-ultra',
      nombre: 'Sérum Facial Ultra Hidratante',
      imagen: '/facial.jpg',
      descripcion:
        'Encendé la luz de tu piel con una fórmula que transforma. Nuestro serum combina vitamina C al 20% y retinol plus para iluminar, unificar y rejuvenecer visiblemente. Reduce manchas, líneas finas y arrugas mientras protege del estrés oxidativo y ambiental. Una sinergia poderosa que renueva la piel desde adentro y revela su belleza natural con cada aplicación.',
      beneficios: [
        'Piel más radiante y luminosa.',
        'Reducción de líneas finas y arrugas.',
        'Mejora de la textura y el tono de la piel.',
        'Protección contra el envejecimiento prematur.',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
    },{
      id: 'serum-acidohialuronico',
      nombre: 'Sérum de Ácido Hialurónico',
      imagen: '/acido.jpg',
      descripcion:
        'Descubrí el poder del ácido hialurónico en su forma más concentrada. Este serum ha sido diseñado para transformar la piel desde el primer contacto: hidrata intensamente al atraer y retener la humedad, dejando el rostro suave, flexible y visiblemente más fresco. Su acción profunda ayuda a reducir la aparición de líneas finas y arrugas, mientras mejora la elasticidad y firmeza natural de la piel. Cada aplicación es un gesto de renovación, un ritual que devuelve a tu piel su equilibrio, su textura y su luz interior.',
      beneficios: [
        'Piel hidratada y suave.',
        'Reducción de líneas finas y arrugas.',
        'Mejora de la elasticidad y firmeza de la piel.',
        'Aspecto más joven y radiante.',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
    },
    {
      id: 'serum-niacinamida',
      nombre: 'Sérum de Niacinamida',
      imagen: '/niaci.jpg',
      descripcion:
        'Una fórmula que ilumina, hidrata y transforma. Con vitamina C al 10% y Alpha Arbutina, este serum ayuda a reducir manchas y unificar el tono, revelando una piel más luminosa y pareja. El ácido hialurónico al 2% aporta una hidratación profunda que suaviza y revitaliza, mientras la Niacinamida al 10% mejora visiblemente la textura, reduciendo poros y líneas finas. Una sinergia precisa que convierte cada aplicación en un ritual de renovación y belleza consciente..',
      beneficios: [
        'Piel más radiante y uniforme',
        'Reducción de manchas y hiperpigmentación',
        'Hidratación profunda y suavización de la piel',
        'Mejora de la textura y reducción de poros',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
    },
    {
      id: 'locion-anti',
      nombre: 'Loción Antibacterial',
      imagen: '/locion.jpg',
      descripcion:
        'Purificá tu piel con suavidad y precisión. El Agua Micelar Vianel está diseñada para pieles con acné y seborrea, combinando activos que limpian profundamente sin agredir. El cloruro de benzalconio controla la proliferación bacteriana, mientras la manzanilla calma y reduce la inflamación. El áloe vera hidrata y suaviza, restaurando el equilibrio natural. Una solución efectiva que respira armonía y bienestar.',
      beneficios: [
        'Limpia y purifica la piel sin resecar',
        'Ayuda a controlar la producción de sebo y reducir la aparición de poros',
        'Calma y reduce la inflamación y el enrojecimiento',
        'Hidrata y suaviza la piel',
      ],
      activos: [],
      whatsappLink:
        'https://wa.me/5491161861142?text=Hola,%20quiero%20consultar%20por%20el%20Agua%20de%20Rosas%20Micelar',
    },
  ];

  // Efecto de foco al producto que recibe el scroll
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.classList.add('destacado');
        setTimeout(() => {
          target.classList.remove('destacado');
        }, 2000);
      }
    }
  }, []);

  return (
    <div className="pt-[80px] bg-[#f8f5f2] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Slogan editorial con animación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl italic font-serif text-[#c6a25c] leading-snug">
            “Dicen que el alma también se hidrata…<br />con lo que huele a calma”
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Una colección pensada para nutrir los sentidos y vestir los espacios de serenidad.
          </p>
        </motion.div>

        {/* Grid de productos con animación escalonada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p, i) => (
            <motion.div
      key={p.id}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
      viewport={{ once: true }}
    >
              <ProductoDetalle {...p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
