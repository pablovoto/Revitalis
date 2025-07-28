import ContentPage from "../components/ContentPage";
import HeroCasmara from "../components/HeroCasmara";
import VideoHero from "../components/VideoHero";
import { serviceVideos } from "../data/contactData";
import { paginaMedicinaEstetica } from "../data/contactData";

const MedicinaEstetica = () => {
	const videoData = serviceVideos.find((video) => video.id === "medicina-estetica");

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

			<div className="my-10">
				<HeroCasmara />
			</div>

			<div className="container mx-auto px-4 py-16">
				{/* Tratamientos principales */}
				<div className="mb-16">
					{paginaMedicinaEstetica.map((pagina, index) => (
						<ContentPage key={index} index={index} pagina={pagina} />
					))}
				</div>
			</div>
			<div
				className="hero min-h-[60vh] justify-center relative overflow-hidden mb-10"
				style={{ backgroundImage: `url(https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68293e60d08385369d16d5b3.png)` }}
			>
				<div className="hero-content text-center justify-center flex-col px-20 text-white">
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="flex flex-col gap-8 z-0 font-normal">
						<h1 className="text-[52px]">Centro de Resolución de Complicaciones Medico Esteticas</h1>
						<div>
							<h2 className="text-[21px]">¿Tu tratamiento estético no salió como esperabas? </h2>
							<h2 className="text-[21px] font-light">
								En revitalis, ayudamos a pacientes que atraviesan situaciones difíciles después de procedimientos realizados por otros profesionales, con resultados que no cumplieron sus expectativas.
							</h2>
						</div>
						<div className="flex w-full justify-center px-4 mt-4">
							<button className="btn btn-soft btn-primary btn-lg py-7 rounded-full w-1/2 text-[23px]">Descubrila en nuestros centros</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MedicinaEstetica;
