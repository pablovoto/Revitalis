import { useState } from "react";
import ContactMap from "../components/ContactMap";
import { services, faqs, clinicLocations, contactInfo } from "../data/contactData";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí iría la lógica para enviar el formulario
		console.log("Formulario enviado:", formData);

		// Show success toast (using DaisyUI toast would require additional setup)
		const modal = document.getElementById("success_modal") as HTMLDialogElement;
		modal?.showModal();

		setFormData({
			name: "",
			email: "",
			phone: "",
			service: "",
			message: "",
		});
	};

	return (
		<div className="min-h-screen py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
					<p className="text-xl text-base-content/70 max-w-3xl mx-auto">
						¿Tienes alguna pregunta o quieres reservar una cita? No dudes en contactarnos. Estamos aquí para ayudarte en tu camino hacia la belleza y el bienestar.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="card bg-base-200 shadow-lg">
						<div className="card-body">
							<h2 className="card-title text-2xl">Envíanos un mensaje</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<fieldset className="fieldset  p-4">
									<label className="label">Nombre completo *</label>
									<input type="text" name="name" value={formData.name} onChange={handleChange} required className="input w-full" placeholder="Tu nombre completo" />

									<label className="label">Correo electrónico *</label>
									<input type="email" name="email" value={formData.email} onChange={handleChange} required className="input w-full" placeholder="tu@email.com" />

									<label className="label">Teléfono</label>
									<input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input w-full" placeholder="Tu número de teléfono" />

									<label className="label">Servicio de interés</label>
									<select name="service" value={formData.service} onChange={handleChange} className="select select-bordered w-full">
										<option value="">Selecciona un servicio</option>
										{services.map((service) => (
											<option key={service.value} value={service.value}>
												{service.label}
											</option>
										))}
									</select>

									<label className="label">Mensaje *</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={4}
										className="textarea textarea-bordered w-full"
										placeholder="Cuéntanos cómo podemos ayudarte..."
									/>

									<button type="submit" className="btn btn-lg btn-primary w-full mt-20">
										Enviar Mensaje
									</button>
								</fieldset>
							</form>
						</div>
					</div>

					{/* Contact Info */}
					<div className="space-y-8">
						{/* Contact Details */}
						<div className="card bg-base-200 shadow-lg">
							<div className="card-body flex flex-col gap-5">
								<h2 className="card-title text-2xl">Información de contacto</h2>

								<ContactInfo badge phone email/>
							</div>
						</div>

						{/* Map Placeholder */}
						<div className="card bg-base-200 shadow-lg">
							<div className="card-body">
								<h2 className="card-title text-2xl">Ubicación</h2>
								<ContactMap />
							</div>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="card bg-base-200 mt-16">
					<div className="card-body">
						<h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{faqs.map((faq, index) => (
								<div key={index} className="collapse collapse-arrow bg-base-200">
									<input type="radio" name="faq-accordion" defaultChecked={index === 0} />
									<div className="collapse-title text-lg font-medium">{faq.question}</div>
									<div className="collapse-content">
										<p>{faq.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Success Modal */}
			<dialog id="success_modal" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">¡Mensaje enviado con éxito!</h3>
					<p className="py-4">Nos pondremos en contacto contigo pronto.</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn btn-primary">Cerrar</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Contact;
