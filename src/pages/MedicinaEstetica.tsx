import VideoHero from "../components/VideoHero";
import { serviceVideos } from "../data/contactData";

const MedicinaEstetica = () => {
	const videoData = serviceVideos.find(video => video.id === "medicina-estetica");
	
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
				{/* Tratamientos principales */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-12 text-primary">Nuestros Tratamientos</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Ácido Hialurónico */}
						<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
							<div className="card-body">
								<h3 className="card-title text-primary">Ácido Hialurónico</h3>
								<p className="text-base-content/70 mb-4">Rellenos faciales para suavizar arrugas y dar volumen a labios y mejillas</p>
								<div className="space-y-2">
									<div className="badge badge-outline">Labios</div>
									<div className="badge badge-outline">Surcos nasogenianos</div>
									<div className="badge badge-outline">Pómulos</div>
									<div className="badge badge-outline">Ojeras</div>
								</div>
								<div className="card-actions justify-end mt-4">
									<button className="btn btn-primary btn-sm">Más info</button>
								</div>
							</div>
						</div>

						{/* Botox */}
						<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
							<div className="card-body">
								<h3 className="card-title text-primary">Toxina Botulínica</h3>
								<p className="text-base-content/70 mb-4">Elimina arrugas de expresión y previene su formación</p>
								<div className="space-y-2">
									<div className="badge badge-outline">Arrugas frente</div>
									<div className="badge badge-outline">Patas de gallo</div>
									<div className="badge badge-outline">Entrecejo</div>
									<div className="badge badge-outline">Hiperhidrosis</div>
								</div>
								<div className="card-actions justify-end mt-4">
									<button className="btn btn-primary btn-sm">Más info</button>
								</div>
							</div>
						</div>

						{/* Plasma Rico en Plaquetas */}
						<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
							<div className="card-body">
								<h3 className="card-title text-primary">Plasma Rico en Plaquetas</h3>
								<p className="text-base-content/70 mb-4">Regeneración natural de la piel usando tus propias plaquetas</p>
								<div className="space-y-2">
									<div className="badge badge-outline">Rejuvenecimiento</div>
									<div className="badge badge-outline">Cicatrices</div>
									<div className="badge badge-outline">Caída cabello</div>
									<div className="badge badge-outline">Melasma</div>
								</div>
								<div className="card-actions justify-end mt-4">
									<button className="btn btn-primary btn-sm">Más info</button>
								</div>
							</div>
						</div>

						{/* Mesoterapia */}
						<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
							<div className="card-body">
								<h3 className="card-title text-primary">Mesoterapia Facial</h3>
								<p className="text-base-content/70 mb-4">Vitaminas y nutrientes directamente en la piel para hidratación profunda</p>
								<div className="space-y-2">
									<div className="badge badge-outline">Hidratación</div>
									<div className="badge badge-outline">Luminosidad</div>
									<div className="badge badge-outline">Antienvejecimiento</div>
									<div className="badge badge-outline">Firmeza</div>
								</div>
								<div className="card-actions justify-end mt-4">
									<button className="btn btn-primary btn-sm">Más info</button>
								</div>
							</div>
						</div>

						{/* Peeling Químico */}
						<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
							<div className="card-body">
								<h3 className="card-title text-primary">Peeling Químico</h3>
								<p className="text-base-content/70 mb-4">Renovación celular para una piel más joven y uniforme</p>
								<div className="space-y-2">
									<div className="badge badge-outline">Manchas</div>
									<div className="badge badge-outline">Textura</div>
									<div className="badge badge-outline">Acné</div>
									<div className="badge badge-outline">Fotoenvejecimiento</div>
								</div>
								<div className="card-actions justify-end mt-4">
									<button className="btn btn-primary btn-sm">Más info</button>
								</div>
							</div>
						</div>

						{/* Hilos Tensores */}
						<div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
							<div className="card-body">
								<h3 className="card-title text-primary">Hilos Tensores</h3>
								<p className="text-base-content/70 mb-4">Lifting facial sin cirugía para reafirmar y tensar la piel</p>
								<div className="space-y-2">
									<div className="badge badge-outline">Lifting facial</div>
									<div className="badge badge-outline">Reafirmación</div>
									<div className="badge badge-outline">Definición</div>
									<div className="badge badge-outline">Sin cirugía</div>
								</div>
								<div className="card-actions justify-end mt-4">
									<button className="btn btn-primary btn-sm">Más info</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Beneficios */}
				<div className="grid lg:grid-cols-2 gap-12 mb-16">
					<div>
						<h2 className="text-3xl font-bold mb-6 text-primary">¿Por qué elegir Medicina Estética?</h2>
						<div className="space-y-6">
							<div className="flex items-start">
								<div className="badge badge-primary mr-4 mt-1">
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Resultados Naturales</h3>
									<p className="text-base-content/70">Realzamos tu belleza natural sin cambiar tu expresión ni personalidad</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="badge badge-primary mr-4 mt-1">
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Tratamientos Seguros</h3>
									<p className="text-base-content/70">Productos aprobados y técnicas médicas avaladas científicamente</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="badge badge-primary mr-4 mt-1">
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Recuperación Rápida</h3>
									<p className="text-base-content/70">Procedimientos ambulatorios con mínimo tiempo de recuperación</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="badge badge-primary mr-4 mt-1">
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Personalización</h3>
									<p className="text-base-content/70">Cada tratamiento se adapta a tus necesidades específicas</p>
								</div>
							</div>
						</div>
					</div>

					<div className="card bg-secondary text-secondary-content shadow-xl">
						<div className="card-body">
							<h3 className="card-title text-2xl mb-4">Consulta Médica</h3>
							<p className="mb-6">Antes de cualquier procedimiento, realizamos una evaluación médica completa para determinar el mejor plan de tratamiento para ti.</p>

							<div className="space-y-3">
								<div className="flex items-center">
									<div className="badge badge-accent mr-3">✓</div>
									<span>Evaluación facial completa</span>
								</div>
								<div className="flex items-center">
									<div className="badge badge-accent mr-3">✓</div>
									<span>Plan personalizado</span>
								</div>
								<div className="flex items-center">
									<div className="badge badge-accent mr-3">✓</div>
									<span>Seguimiento post-tratamiento</span>
								</div>
								<div className="flex items-center">
									<div className="badge badge-accent mr-3">✓</div>
									<span>Médicos especializados</span>
								</div>
							</div>

							<div className="card-actions justify-center mt-6">
								<button className="btn btn-accent">Agendar Consulta</button>
							</div>
						</div>
					</div>
				</div>

				{/* Preguntas frecuentes */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-12 text-primary">Preguntas Frecuentes</h2>

					<div className="space-y-4 max-w-4xl mx-auto">
						<div className="collapse collapse-plus bg-base-100 shadow-lg">
							<input type="radio" name="faq-medicina" />
							<div className="collapse-title text-xl font-medium">¿A qué edad puedo comenzar con medicina estética?</div>
							<div className="collapse-content">
								<p>Los tratamientos preventivos pueden comenzar desde los 25-30 años, mientras que los correctivos se adaptan a cada edad y necesidad específica.</p>
							</div>
						</div>

						<div className="collapse collapse-plus bg-base-100 shadow-lg">
							<input type="radio" name="faq-medicina" />
							<div className="collapse-title text-xl font-medium">¿Cuánto duran los resultados?</div>
							<div className="collapse-content">
								<p>Depende del tratamiento: Botox 4-6 meses, ácido hialurónico 8-12 meses, PRP 6-8 meses. Los resultados varían según cada persona.</p>
							</div>
						</div>

						<div className="collapse collapse-plus bg-base-100 shadow-lg">
							<input type="radio" name="faq-medicina" />
							<div className="collapse-title text-xl font-medium">¿Los tratamientos son dolorosos?</div>
							<div className="collapse-content">
								<p>La mayoría son muy bien tolerados. Utilizamos anestesia tópica cuando es necesario y técnicas que minimizan las molestias.</p>
							</div>
						</div>

						<div className="collapse collapse-plus bg-base-100 shadow-lg">
							<input type="radio" name="faq-medicina" />
							<div className="collapse-title text-xl font-medium">¿Puedo combinar varios tratamientos?</div>
							<div className="collapse-content">
								<p>Sí, muchos tratamientos se complementan entre sí. En la consulta médica diseñamos un plan integral según tus objetivos.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Call to action */}
				<div className="text-center">
					<div className="card bg-primary text-primary-content shadow-xl max-w-2xl mx-auto">
						<div className="card-body">
							<h2 className="card-title justify-center text-3xl mb-4">Transforma tu belleza</h2>
							<p className="text-lg mb-6">Agenda tu consulta médica y descubre qué tratamientos son ideales para ti</p>
							<div className="card-actions justify-center">
								<button className="btn btn-secondary btn-lg">Consulta Médica</button>
								<button className="btn btn-outline btn-secondary btn-lg">WhatsApp</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MedicinaEstetica;
