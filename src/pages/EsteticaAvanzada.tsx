import ContentPage from "../components/ContentPage";
import HeroCasmara from "../components/HeroCasmara";
import VideoHero from "../components/VideoHero";
import { serviceVideos, paginaEsteticaAvanzada } from "../data/contactData";

const EsteticaAvanzada = () => {
	const videoData = serviceVideos.find((video) => video.id === "estetica-avanzada");

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
				<div className="my-10">
					<HeroCasmara />
				</div>

				<div className="container mx-auto px-4 py-16">
					{paginaEsteticaAvanzada.map((pagina, index) => (
						<ContentPage key={index} index={index} pagina={pagina} />
					))}

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
				</div>
			</main>
		</div>
	);
};

export default EsteticaAvanzada;
