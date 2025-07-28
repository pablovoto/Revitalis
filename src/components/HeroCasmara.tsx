const HeroCasmara = () => {
	return (
		<div
			className="hero min-h-[60vh] justify-end relative overflow-hidden"
			style={{ backgroundImage: `url(https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6852b141f63e191159b4fab1.png)` }}
		>
			<div className="hero-content justify-start flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left max-w-lg">
					<img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6852b1cc1a0e2ed85f7c3cdf.png" className="h-auto" />
					<div className="flex w-full justify-end px-4">
						<p className="w-1/2 text-end text-white">La línea de cuidado preferida por los profesionales ahora está disponible para vos.</p>
					</div>
					<div className="flex w-full justify-center px-4 mt-4">
						<button className="btn btn-soft btn-primary btn-lg py-7 rounded-full w-1/2 text-[23px]">Descubrila en nuestros centros</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCasmara;
