import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Carousel />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de tratamientos estéticos para realzar tu belleza natural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="avatar placeholder mb-4">
                  <div className="bg-primary text-primary-content w-16 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="card-title justify-center">Tratamientos Faciales</h3>
                <p className="text-base-content/70 mb-4">
                  Rejuvenece tu piel con nuestros tratamientos faciales personalizados
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary btn-outline">
                    Conocer más →
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="avatar placeholder mb-4">
                  <div className="bg-primary text-primary-content w-16 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="card-title justify-center">Depilación Láser</h3>
                <p className="text-base-content/70 mb-4">
                  Elimina el vello no deseado de forma permanente y segura
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary btn-outline">
                    Conocer más →
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="avatar placeholder mb-4">
                  <div className="bg-primary text-primary-content w-16 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="card-title justify-center">Masajes Relajantes</h3>
                <p className="text-base-content/70 mb-4">
                  Relájate y renuévate con nuestros masajes terapéuticos
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary btn-outline">
                    Conocer más →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="hero min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Clínica Estética"
                className="max-w-sm rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-lg text-base-content/70 mb-6">
                  En Estética Bella, nos dedicamos a realzar tu belleza natural con los mejores 
                  tratamientos y tecnología de vanguardia. Nuestro equipo de profesionales 
                  altamente capacitados se compromete a brindarte una experiencia única y 
                  resultados excepcionales.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="badge badge-primary mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold">Tecnología Avanzada</h3>
                      <p className="text-base-content/70">Equipos de última generación para mejores resultados</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="badge badge-primary mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold">Profesionales Expertos</h3>
                      <p className="text-base-content/70">Equipo certificado con años de experiencia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="badge badge-primary mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold">Atención Personalizada</h3>
                      <p className="text-base-content/70">Tratamientos adaptados a tus necesidades específicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-content mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-xl text-primary-content/80 mb-8 max-w-2xl mx-auto">
            Reserva tu cita hoy mismo y descubre los increíbles resultados que podemos lograr juntas
          </p>
          <button className="btn btn-neutral btn-lg">
            Reservar Cita Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
