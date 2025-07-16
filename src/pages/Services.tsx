const Services = () => {
  const services = [
    {
      id: 1,
      title: "Tratamientos Faciales",
      description: "Rejuvenece tu rostro con nuestros tratamientos personalizados",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      treatments: [
        "Limpieza facial profunda",
        "Hidratación intensiva",
        "Peeling químico",
        "Microdermoabrasión",
        "Radiofrecuencia facial"
      ],
      price: "Desde $80"
    },
    {
      id: 2,
      title: "Depilación Láser",
      description: "Elimina el vello no deseado de forma permanente y segura",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      treatments: [
        "Piernas completas",
        "Axilas",
        "Bikini",
        "Rostro",
        "Espalda"
      ],
      price: "Desde $60"
    },
    {
      id: 3,
      title: "Masajes Relajantes",
      description: "Relájate y renuévate con nuestros masajes terapéuticos",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      treatments: [
        "Masaje relajante",
        "Masaje descontracturante",
        "Masaje con piedras calientes",
        "Masaje reductivo",
        "Drenaje linfático"
      ],
      price: "Desde $70"
    },
    {
      id: 4,
      title: "Tratamientos Corporales",
      description: "Moldea y tonifica tu cuerpo con nuestros tratamientos avanzados",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      treatments: [
        "Cavitación",
        "Radiofrecuencia corporal",
        "Presoterapia",
        "Mesoterapia",
        "Criolipolisis"
      ],
      price: "Desde $90"
    },
    {
      id: 5,
      title: "Cuidado de Uñas",
      description: "Mantén tus uñas hermosas y saludables",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      treatments: [
        "Manicura clásica",
        "Pedicura spa",
        "Esmaltado permanente",
        "Extensión de uñas",
        "Nail art"
      ],
      price: "Desde $35"
    },
    {
      id: 6,
      title: "Tratamientos Anti-Edad",
      description: "Combate los signos del envejecimiento con tecnología avanzada",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      treatments: [
        "Botox",
        "Rellenos de ácido hialurónico",
        "Plasma rico en plaquetas",
        "Hilos tensores",
        "Láser anti-edad"
      ],
      price: "Desde $150"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de tratamientos estéticos diseñados para realzar tu belleza 
            natural y ayudarte a sentirte mejor contigo misma
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <figure>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-base-content/70 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tratamientos incluidos:</h4>
                  <ul className="text-sm text-base-content/70 space-y-1">
                    {service.treatments.map((treatment, index) => (
                      <li key={index} className="flex items-center">
                        <div className="badge badge-primary badge-sm mr-2">✓</div>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-actions justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <button className="btn btn-primary">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="hero bg-base-200 rounded-lg mt-16">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg text-base-content/70 mb-6">
                Ofrecemos consultas personalizadas para crear el tratamiento perfecto para ti
              </p>
              <button className="btn btn-primary btn-lg">
                Consulta Personalizada
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué elegir nuestros servicios?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="avatar placeholder mb-4">
                <div className="bg-primary text-primary-content w-16 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Resultados Garantizados</h3>
              <p className="text-base-content/70">
                Trabajamos con las mejores técnicas y productos para asegurar los mejores resultados
              </p>
            </div>
            <div className="text-center">
              <div className="avatar placeholder mb-4">
                <div className="bg-primary text-primary-content w-16 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Profesionales Certificados</h3>
              <p className="text-base-content/70">
                Nuestro equipo está compuesto por especialistas con certificaciones internacionales
              </p>
            </div>
            <div className="text-center">
              <div className="avatar placeholder mb-4">
                <div className="bg-primary text-primary-content w-16 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Atención Personalizada</h3>
              <p className="text-base-content/70">
                Cada tratamiento se adapta específicamente a tus necesidades y objetivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
