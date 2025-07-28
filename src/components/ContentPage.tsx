import CardPacks from "./CardPacks";

interface Props {
    index: number;
    pagina: {
        title?: string;
        description?: string;
        content: {
            image: string;
            title: string;
            description: string;
        }[];
    };
};

const ContentPage = (props: Props) => {
	return (
		<div key={props.index}>
			<div className="flex flex-col justify-center items-center mb-12">
				{props.pagina.title && <h1 className="lg:text-[60px] text-[40px] font-bold text-center text-primary">{props.pagina.title}</h1>}
				{props.pagina.description && <h2 className="lg:text-[27px] text-[25px] text-center lg:w-2/3">{props.pagina.description}</h2>}
			</div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-items-center">
                {props.pagina.content.map((item, itemIndex) => (
                    <CardPacks key={itemIndex} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
		</div>
	);
};

export default ContentPage;
