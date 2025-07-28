interface inputProps {
	key: number | string;
	image: string;
	title: string;
	description: string;
}

const CardPacks = (props: inputProps) => {
	return (
		<div
			className="card h-[350px] md:h-[500px] w-2/3 md:w-full bg-base-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-base-300 hover:border-primary relative overflow-hidden"
			style={{ backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
		>
			<div className="absolute inset-0 hover:backdrop-blur-xs backdrop-blur-none"></div>
			<div className="card-body text-white absolute bottom-5 z-10 ">
				<h3 className="card-title text-[35px] leading-none">{props.title}</h3>
				<p className="text-[20px]">{props.description}</p>
			</div>
		</div>
	);
};

export default CardPacks;
