import VideoHero from "../components/VideoHero";
import { serviceVideos } from "../data/contactData";

const EsteticaAvanzada = () => {
	const videoData = serviceVideos.find(video => video.id === "estetica-avanzada");
	
	if (!videoData) {
		// Fallback en caso de que no se encuentre el video
		return <div>Error: No se encontró la configuración del video</div>;
	}

	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-1">
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
					{/* Tratamientos Faciales */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-12 text-primary">Tratamientos Faciales Avanzados</h2>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* HydraFacial */}
							<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
								<div className="card-body">
									<h3 className="card-title text-primary">HydraFacial MD</h3>
									<p className="text-base-content/70 mb-4">Limpieza profunda, exfoliación, extracción e hidratación en un solo tratamiento</p>
									<div className="space-y-2 mb-4">
										<div className="badge badge-outline">Limpieza profunda</div>
										<div className="badge badge-outline">Hidratación intensa</div>
										<div className="badge badge-outline">Poros dilatados</div>
										<div className="badge badge-outline">Sin tiempo recuperación</div>
									</div>
									<div className="card-actions justify-end">
										<button className="btn btn-primary btn-sm">Ver más</button>
									</div>
								</div>
							</div>

							{/* Radiofrecuencia */}
							<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
								<div className="card-body">
									<h3 className="card-title text-primary">Radiofrecuencia Facial</h3>
									<p className="text-base-content/70 mb-4">Estimula la producción de colágeno para reafirmar y tensar la piel</p>
									<div className="space-y-2 mb-4">
										<div className="badge badge-outline">Reafirmación</div>
										<div className="badge badge-outline">Anti-edad</div>
										<div className="badge badge-outline">Producción colágeno</div>
										<div className="badge badge-outline">Resultados progresivos</div>
									</div>
									<div className="card-actions justify-end">
										<button className="btn btn-primary btn-sm">Ver más</button>
									</div>
								</div>
							</div>

							{/* Microdermoabrasión */}
							<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
								<div className="card-body">
									<h3 className="card-title text-primary">Microdermoabrasión</h3>
									<p className="text-base-content/70 mb-4">Exfoliación mecánica profunda para renovar completamente la piel</p>
									<div className="space-y-2 mb-4">
										<div className="badge badge-outline">Renovación celular</div>
										<div className="badge badge-outline">Textura uniforme</div>
										<div className="badge badge-outline">Manchas</div>
										<div className="badge badge-outline">Cicatrices superficiales</div>
									</div>
									<div className="card-actions justify-end">
										<button className="btn btn-primary btn-sm">Ver más</button>
									</div>
								</div>
							</div>

							{/* LED Terapia */}
							<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
								<div className="card-body">
									<h3 className="card-title text-primary">LED Terapia</h3>
									<p className="text-base-content/70 mb-4">Luz de diferentes longitudes de onda para diversos problemas cutáneos</p>
									<div className="space-y-2 mb-4">
										<div className="badge badge-outline">Acné</div>
										<div className="badge badge-outline">Rosácea</div>
										<div className="badge badge-outline">Cicatrización</div>
										<div className="badge badge-outline">Rejuvenecimiento</div>
									</div>
									<div className="card-actions justify-end">
										<button className="btn btn-primary btn-sm">Ver más</button>
									</div>
								</div>
							</div>

							{/* Ultrasonido */}
							<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
								<div className="card-body">
									<h3 className="card-title text-primary">Ultrasonido HIFU</h3>
									<p className="text-base-content/70 mb-4">Lifting facial no invasivo mediante ultrasonido microfocalizado</p>
									<div className="space-y-2 mb-4">
										<div className="badge badge-outline">Lifting sin cirugía</div>
										<div className="badge badge-outline">Contorno facial</div>
										<div className="badge badge-outline">Papada</div>
										<div className="badge badge-outline">Duración 1-2 años</div>
									</div>
									<div className="card-actions justify-end">
										<button className="btn btn-primary btn-sm">Ver más</button>
									</div>
								</div>
							</div>

							{/* Crioterapia */}
							<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
								<div className="card-body">
									<h3 className="card-title text-primary">Crioterapia Facial</h3>
									<p className="text-base-content/70 mb-4">Frío controlado para tonificar, desinflamar y revitalizar</p>
									<div className="space-y-2 mb-4">
										<div className="badge badge-outline">Descongestivo</div>
										<div className="badge badge-outline">Tonificante</div>
										<div className="badge badge-outline">Circulación</div>
										<div className="badge badge-outline">Efecto lifting</div>
									</div>
									<div className="card-actions justify-end">
										<button className="btn btn-primary btn-sm">Ver más</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Tratamientos Corporales */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-12 text-primary">Tratamientos Corporales</h2>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Cavitación */}
							<div className="card bg-base-100 shadow-lg">
								<div className="card-body">
									<h3 className="card-title text-primary mb-4">Cavitación Ultrasónica</h3>
									<p className="text-base-content/70 mb-4">Eliminación de grasa localizada mediante ultrasonido de baja frecuencia</p>

									<div className="grid grid-cols-2 gap-2 mb-4">
										<div className="badge badge-outline">Grasa localizada</div>
										<div className="badge badge-outline">Abdomen</div>
										<div className="badge badge-outline">Flancos</div>
										<div className="badge badge-outline">Muslos</div>
										<div className="badge badge-outline">Brazos</div>
										<div className="badge badge-outline">Espalda</div>
									</div>

									<div className="space-y-2 mb-4">
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">No invasivo</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Sin tiempo de recuperación</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Resultados desde primera sesión</span>
										</div>
									</div>
								</div>
							</div>

							{/* Radiofrecuencia Corporal */}
							<div className="card bg-base-100 shadow-lg">
								<div className="card-body">
									<h3 className="card-title text-primary mb-4">Radiofrecuencia Corporal</h3>
									<p className="text-base-content/70 mb-4">Reafirmación y tonificación de la piel corporal mediante calor controlado</p>

									<div className="grid grid-cols-2 gap-2 mb-4">
										<div className="badge badge-outline">Reafirmación</div>
										<div className="badge badge-outline">Celulitis</div>
										<div className="badge badge-outline">Flacidez</div>
										<div className="badge badge-outline">Post-parto</div>
										<div className="badge badge-outline">Glúteos</div>
										<div className="badge badge-outline">Piernas</div>
									</div>

									<div className="space-y-2 mb-4">
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Produce colágeno</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Mejora textura</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Resultados acumulativos</span>
										</div>
									</div>
								</div>
							</div>

							{/* Presoterapia */}
							<div className="card bg-base-100 shadow-lg">
								<div className="card-body">
									<h3 className="card-title text-primary mb-4">Presoterapia</h3>
									<p className="text-base-content/70 mb-4">Drenaje linfático mecánico para eliminar líquidos y toxinas</p>

									<div className="grid grid-cols-2 gap-2 mb-4">
										<div className="badge badge-outline">Retención líquidos</div>
										<div className="badge badge-outline">Circulación</div>
										<div className="badge badge-outline">Celulitis</div>
										<div className="badge badge-outline">Piernas cansadas</div>
										<div className="badge badge-outline">Post-quirúrgico</div>
										<div className="badge badge-outline">Relajante</div>
									</div>

									<div className="space-y-2 mb-4">
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Efecto inmediato</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Muy relajante</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Complementa otros tratamientos</span>
										</div>
									</div>
								</div>
							</div>

							{/* Mesoterapia Corporal */}
							<div className="card bg-base-100 shadow-lg">
								<div className="card-body">
									<h3 className="card-title text-primary mb-4">Mesoterapia Corporal</h3>
									<p className="text-base-content/70 mb-4">Inyecciones de principios activos para tratar grasa localizada y celulitis</p>

									<div className="grid grid-cols-2 gap-2 mb-4">
										<div className="badge badge-outline">Grasa localizada</div>
										<div className="badge badge-outline">Celulitis</div>
										<div className="badge badge-outline">Flacidez</div>
										<div className="badge badge-outline">Estrías</div>
										<div className="badge badge-outline">Lipolítica</div>
										<div className="badge badge-outline">Reafirmante</div>
									</div>

									<div className="space-y-2 mb-4">
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Resultados visibles</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Personalizable</span>
										</div>
										<div className="flex items-center">
											<div className="badge badge-primary mr-2">✓</div>
											<span className="text-sm">Complementa dieta/ejercicio</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Proceso y Metodología */}
					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h2 className="text-3xl font-bold mb-6 text-primary">Nuestra Metodología</h2>
							<div className="space-y-6">
								<div className="card bg-base-200">
									<div className="card-body">
										<div className="flex items-center mb-3">
											<div className="badge badge-primary mr-3">1</div>
											<h3 className="text-lg font-semibold">Diagnóstico Personalizado</h3>
										</div>
										<p className="text-base-content/70">Evaluación completa de tu piel y cuerpo para determinar los tratamientos más efectivos</p>
									</div>
								</div>

								<div className="card bg-base-200">
									<div className="card-body">
										<div className="flex items-center mb-3">
											<div className="badge badge-primary mr-3">2</div>
											<h3 className="text-lg font-semibold">Plan Integral</h3>
										</div>
										<p className="text-base-content/70">Diseñamos un protocolo que combina diferentes tecnologías para maximizar resultados</p>
									</div>
								</div>

								<div className="card bg-base-200">
									<div className="card-body">
										<div className="flex items-center mb-3">
											<div className="badge badge-primary mr-3">3</div>
											<h3 className="text-lg font-semibold">Seguimiento Continuo</h3>
										</div>
										<p className="text-base-content/70">Monitoreo de resultados y ajustes del tratamiento según tu evolución</p>
									</div>
								</div>
							</div>
						</div>

						<div className="card bg-primary text-primary-content shadow-xl">
							<div className="card-body">
								<h3 className="card-title text-2xl mb-4">Tecnología de Vanguardia</h3>
								<p className="mb-6">Contamos con equipos de última generación y las técnicas más avanzadas en estética</p>

								<div className="space-y-3">
									<div className="flex items-center">
										<div className="badge badge-secondary mr-3">✓</div>
										<span>Equipos FDA aprobados</span>
									</div>
									<div className="flex items-center">
										<div className="badge badge-secondary mr-3">✓</div>
										<span>Protocolos científicamente probados</span>
									</div>
									<div className="flex items-center">
										<div className="badge badge-secondary mr-3">✓</div>
										<span>Actualización tecnológica constante</span>
									</div>
									<div className="flex items-center">
										<div className="badge badge-secondary mr-3">✓</div>
										<span>Personal altamente capacitado</span>
									</div>
								</div>

								<div className="card-actions justify-center mt-6">
									<button className="btn btn-secondary">Conoce Nuestro Centro</button>
								</div>
							</div>
						</div>
					</div>

					{/* Call to action */}
					<div className="text-center">
						<div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl max-w-3xl mx-auto">
							<div className="card-body">
								<h2 className="card-title justify-center text-3xl mb-4">¿Lista para el cambio?</h2>
								<p className="text-lg mb-6">Descubre cómo nuestros tratamientos de estética avanzada pueden ayudarte a alcanzar tus objetivos</p>
								<div className="grid md:grid-cols-2 gap-4">
									<button className="btn btn-accent btn-lg">Evaluación Gratuita</button>
									<button className="btn btn-outline btn-accent btn-lg">Planes de Tratamiento</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default EsteticaAvanzada;
