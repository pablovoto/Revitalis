import VideoHero from "../components/VideoHero";
import { serviceVideos } from "../data/contactData";

const DepilacionLaser = () => {
  const videoData = serviceVideos.find(video => video.id === "depilacion-laser");
  
  if (!videoData) {
    // Fallback en caso de que no se encuentre el video
    return <div>Error: No se encontró la configuración del video</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <VideoHero
        title={videoData.title}
        subtitle={videoData.subtitle}
        buttonText={videoData.buttonText}
        videoSrc={videoData.videoUrl}
        gradientFrom={videoData.gradientFrom}
        gradientTo={videoData.gradientTo}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Información del tratamiento */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">¿Qué es la Depilación Láser?</h2>
            <p className="text-lg mb-4 text-base-content/80">
              La depilación láser es un tratamiento médico estético que utiliza luz láser concentrada 
              para destruir los folículos pilosos, eliminando el vello de manera definitiva.
            </p>
            <p className="text-lg mb-6 text-base-content/80">
              Nuestro equipo de última generación permite tratamientos seguros y efectivos en todo 
              tipo de piel, con resultados visibles desde las primeras sesiones.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="badge badge-primary mr-3">✓</div>
                <span>Resultados permanentes</span>
              </div>
              <div className="flex items-center">
                <div className="badge badge-primary mr-3">✓</div>
                <span>Tratamiento indoloro</span>
              </div>
              <div className="flex items-center">
                <div className="badge badge-primary mr-3">✓</div>
                <span>Apto para todo tipo de piel</span>
              </div>
              <div className="flex items-center">
                <div className="badge badge-primary mr-3">✓</div>
                <span>Sin efectos secundarios</span>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">Zonas de Tratamiento</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="badge badge-outline badge-lg">Piernas</div>
                <div className="badge badge-outline badge-lg">Brazos</div>
                <div className="badge badge-outline badge-lg">Axilas</div>
                <div className="badge badge-outline badge-lg">Bikini</div>
                <div className="badge badge-outline badge-lg">Rostro</div>
                <div className="badge badge-outline badge-lg">Espalda</div>
                <div className="badge badge-outline badge-lg">Pecho</div>
                <div className="badge badge-outline badge-lg">Abdomen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso del tratamiento */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Proceso del Tratamiento</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="avatar mb-4">
                  <div className="w-16 rounded-full bg-primary text-primary-content">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                </div>
                <h3 className="card-title justify-center mb-2">Consulta Inicial</h3>
                <p className="text-base-content/70">
                  Evaluación personalizada de tu tipo de piel y vello para diseñar el tratamiento ideal
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="avatar mb-4">
                  <div className="w-16 rounded-full bg-primary text-primary-content">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </div>
                <h3 className="card-title justify-center mb-2">Sesiones</h3>
                <p className="text-base-content/70">
                  Series de sesiones programadas según tu tipo de vello, generalmente entre 6-8 sesiones
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="avatar mb-4">
                  <div className="w-16 rounded-full bg-primary text-primary-content">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                </div>
                <h3 className="card-title justify-center mb-2">Resultados</h3>
                <p className="text-base-content/70">
                  Piel suave y libre de vello de manera definitiva, con seguimiento post-tratamiento
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Preguntas frecuentes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Preguntas Frecuentes</h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="collapse collapse-plus bg-base-100 shadow-lg">
              <input type="radio" name="faq-depilacion" />
              <div className="collapse-title text-xl font-medium">
                ¿Cuántas sesiones necesito?
              </div>
              <div className="collapse-content">
                <p>Generalmente se requieren entre 6-8 sesiones para obtener resultados óptimos, dependiendo del tipo de vello y zona a tratar.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow-lg">
              <input type="radio" name="faq-depilacion" />
              <div className="collapse-title text-xl font-medium">
                ¿Es doloroso el tratamiento?
              </div>
              <div className="collapse-content">
                <p>El tratamiento es prácticamente indoloro. Algunos pacientes pueden sentir una leve sensación de calor, similar a un pequeño pellizco.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow-lg">
              <input type="radio" name="faq-depilacion" />
              <div className="collapse-title text-xl font-medium">
                ¿Cuánto tiempo dura cada sesión?
              </div>
              <div className="collapse-content">
                <p>Depende de la zona: axilas 10-15 min, piernas completas 45-60 min, bikini 15-20 min.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow-lg">
              <input type="radio" name="faq-depilacion" />
              <div className="collapse-title text-xl font-medium">
                ¿Qué cuidados debo tener después del tratamiento?
              </div>
              <div className="collapse-content">
                <p>Evitar la exposición solar directa, usar protector solar y seguir las indicaciones específicas que te proporcionaremos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="card bg-primary text-primary-content shadow-xl max-w-2xl mx-auto">
            <div className="card-body">
              <h2 className="card-title justify-center text-3xl mb-4">¿Lista para comenzar?</h2>
              <p className="text-lg mb-6">
                Agenda tu consulta gratuita y descubre cómo la depilación láser puede cambiar tu rutina
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-secondary btn-lg">Agendar Consulta</button>
                <button className="btn btn-outline btn-secondary btn-lg">Más Información</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepilacionLaser;
