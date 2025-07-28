import ContentPage from "../components/ContentPage";
import HeroCasmara from "../components/HeroCasmara";
import VideoHero from "../components/VideoHero";
import { paginaDepilacionLaser, serviceVideos } from "../data/contactData";

const DepilacionLaser = () => {
	const videoData = serviceVideos.find((video) => video.id === "depilacion-laser");

	if (!videoData) {
		// Fallback en caso de que no se encuentre el video
		return <div>Error: No se encontró la configuración del video</div>;
	}

	const list = ["Resultados permanentes", "Tratamiento indoloro", "Apto para todo tipo de piel", "Sin efectos secundarios"];
	const faqs = [
		{
			question: "¿Cuántas sesiones necesito?",
			answer: "Generalmente se requieren entre 6-8 sesiones para obtener resultados óptimos, dependiendo del tipo de vello y zona a tratar.",
		},
		{
			question: "¿Es doloroso el tratamiento?",
			answer: "El tratamiento es prácticamente indoloro. Algunos pacientes pueden sentir una leve sensación de calor, similar a un pequeño pellizco.",
		},
		{
			question: "¿Cuánto tiempo dura cada sesión?",
			answer: "Depende de la zona: axilas 10-15 min, piernas completas 45-60 min, bikini 15-20 min.",
		},
		{
			question: "¿Qué cuidados debo tener después del tratamiento?",
			answer: "Evitar la exposición solar directa, usar protector solar y seguir las indicaciones específicas que te proporcionaremos.",
		},
	];
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
				<h2 className="text-3xl font-bold mb-6 text-primary">¿Qué es la Depilación Láser?</h2>
				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<p className="text-lg mb-4 text-justify text-base-content/80">
							La depilación láser es un tratamiento médico estético que utiliza luz láser concentrada para destruir los folículos pilosos, eliminando el vello de manera definitiva.
						</p>
						<p className="text-lg mb-6 text-justify text-base-content/80">
							Nuestro equipo de última generación permite tratamientos seguros y efectivos en todo tipo de piel, con resultados visibles desde las primeras sesiones.
						</p>
					</div>
					<div className="space-y-2 flex flex-col w-1/2 center">
						{list.map((item, index) => (
							<div key={index} className="flex items-center">
								<div className="badge badge-primary mr-3">✓</div>
								<span>{item}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<HeroCasmara />
			<div className="container mx-auto px-4 py-16">
				{/* Packs de depilación */}

				{paginaDepilacionLaser.map((pagina, index) => (
					<ContentPage key={index} index={index} pagina={pagina} />
				))}

				{/* Preguntas frecuentes */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-12 text-primary">Preguntas Frecuentes</h2>

					<div className="space-y-4 max-w-4xl mx-auto">
						{faqs.map((faq, index) => (
							<div key={index} className="collapse collapse-plus bg-base-100 shadow-lg">
								<input type="radio" name="faq-depilacion" />
								<div className="collapse-title text-xl font-medium">{faq.question}</div>
								<div className="collapse-content">
									<p>{faq.answer}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DepilacionLaser;
