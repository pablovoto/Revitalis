import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	
	return (
		<div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						<li>
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<p>Servicios</p>
							<ul className="p-2">
								<li>
									<Link to="/depilacion-laser">Depilación Láser</Link>
								</li>
								<li>
									<Link to="/medicina-estetica">Medicina Estética</Link>
								</li>
								<li>
									<Link to="/estetica-avanzada">Estética Avanzada</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/contacto">Contacto</Link>
						</li>
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost text-xl text-primary font-bold">
					<img src="/src/assets/img/revitalis.png" alt="Revitalis" className="h-8 w-auto mr-2" />
				</Link>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/" className="btn btn-ghost font-bold">
							Inicio
						</Link>
					</li>
					<li className="dropdown dropdown-hover">
						<details>
							<summary className="btn btn-ghost">Servicios</summary>
							<ul className="">
								<li>
									<Link to="/depilacion-laser">Depilación Láser</Link>
								</li>
								<li>
									<Link to="/medicina-estetica">Medicina Estética</Link>
								</li>
								<li>
									<Link to="/estetica-avanzada">Estética Avanzada</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link to="/contacto" className="btn btn-ghost font-bold">
							Contacto
						</Link>
					</li>
				</ul>
			</div>

			<div className="navbar-end hidden lg:flex">
				<h1 className="font-bold">Medicina Estética Avanzada</h1>
			</div>
		</div>
	);
};

export default Header;
