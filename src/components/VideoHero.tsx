interface VideoHeroProps {
	title: string;
	subtitle: string;
	buttonText: string;
	videoSrc: string;
	gradientFrom?: string;
	gradientTo?: string;
}

const VideoHero = ({
	title,
	subtitle,
	buttonText,
	videoSrc,
	gradientFrom = "primary/20",
	gradientTo = "secondary/20",
}: VideoHeroProps) => {
	return (
		<div className="hero min-h-[60vh] relative overflow-hidden">
			{/* Video Background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src={videoSrc} type="video/mp4" />
				{/* Fallback para navegadores que no soportan video */}
				Tu navegador no soporta videos HTML5.
			</video>

			{/* Overlay con gradiente */}
			<div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} z-10`}></div>

			{/* Contenido del Hero */}
			<div className="hero-content text-center relative z-20">
				<div className="max-w-4xl text-white">
					<h1 className="text-5xl font-bold mb-6 drop-shadow-lg">{title}</h1>
					<p className="text-xl mb-8 drop-shadow-md opacity-90">
						{subtitle}
					</p>
					<button className="btn btn-primary btn-lg shadow-lg">
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VideoHero;
