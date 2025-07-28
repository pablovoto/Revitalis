const Card = () => {
	return (
		<div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-base-300 hover:border-primary">
			<div className="card-body">
				<h3 className="card-title text-2xl mb-4 text-primary">Pack Básico</h3>
				<div className="mb-4">
					<span className="text-3xl font-bold text-primary">$299</span>
					<span className="text-lg text-base-content/60">/mes</span>
				</div>
				<ul className="space-y-2 mb-6">
					<li className="flex items-center">
						<span className="badge badge-primary badge-sm mr-2">✓</span>2 zonas pequeñas
					</li>
					<li className="flex items-center">
						<span className="badge badge-primary badge-sm mr-2">✓</span>6 sesiones incluidas
					</li>
					<li className="flex items-center">
						<span className="badge badge-primary badge-sm mr-2">✓</span>
						Consulta gratuita
					</li>
				</ul>
				<div className="card-actions justify-center">
					<button className="btn btn-primary btn-block hover:btn-secondary transition-colors">Elegir Pack</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
