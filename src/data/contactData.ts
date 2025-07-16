// Datos de contacto y ubicaciones de las clínicas Revitalis

export interface ClinicLocation {
	id: number;
	name: string;
	address: string;
	position: [number, number];
	url: string;
	urlWP?: string;
	phone?: string;
	email?: string;
}

export const clinicLocations: ClinicLocation[] = [
	{
		id: 1,
		name: "Revitalis - San Miguel de Tucumán",
		address: "25 de Mayo 639, Local 1, San Miguel de Tucumán",
		position: [-26.8223278, -65.2031367],
		urlWP: "https://wa.me/5493815540611",
		url: "https://www.google.com/maps/place/revitalis/@-26.8223278,-65.2031367,19.33z/data=!4m6!3m5!1s0x94225f1a45e05e8b:0x4893c9741320bff1!8m2!3d-26.8222718!4d-65.2024649!16s%2Fg%2F11ydztfyzm?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
		phone: "+54 9 381 5540611",
		email: "administracion@clinicaesteticarevitalis.com",
	},
	{
		id: 2,
		name: "Revitalis - Yerba Buena",
		address: "Solar del Cerro Shopping, Avenida Aconquija 1336, Piso 1, Local 102, Yerba Buena, Tucumán",
		position: [-26.8145252, -65.2924097],
        urlWP: "https://wa.me/5493815712134",
		url: "https://www.google.com/maps/place/Solar+del+Cerro+Shopping/@-26.8145252,-65.2924097,17z/data=!3m1!4b1!4m6!3m5!1s0x942242d5915c81bb:0x38d3c56ee0b18ff6!8m2!3d-26.81453!4d-65.2898348!16s%2Fg%2F1tdf2fyh?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
		phone: "+54 9 381 5712134",
		email: "administracion@clinicaesteticarevitalis.com",
	},
];

// Información de contacto general
export const contactInfo = {
	generalEmail: "administracion@clinicaesteticarevitalis.com",
	socialMedia: {
		instagram: "https://www.instagram.com/clinicarevitalis/",
		facebook: "https://www.facebook.com/profile.php?id=61573944629110&sk=about",
		whatsapp: "https://wa.me/5493815540611", // Reemplazar con número real
	},
	businessHours: {
		monday: "9:00 - 19:00",
		tuesday: "9:00 - 19:00",
		wednesday: "9:00 - 19:00",
		thursday: "9:00 - 19:00",
		friday: "9:00 - 19:00",
		saturday: "9:00 - 17:00",
		sunday: "Cerrado",
	},
};

// Servicios disponibles para el formulario de contacto
export const services = [
	{ value: "depilacion-laser", label: "Depilación Láser" },
	{ value: "medicina-estetica", label: "Medicina Estética" },
	{ value: "estetica-avanzada", label: "Estética Avanzada" },
	{ value: "acido-hialuronico", label: "Ácido Hialurónico" },
	{ value: "botox", label: "Toxina Botulínica (Botox)" },
	{ value: "plasma-rico-plaquetas", label: "Plasma Rico en Plaquetas" },
	{ value: "mesoterapia", label: "Mesoterapia" },
	{ value: "peeling-quimico", label: "Peeling Químico" },
	{ value: "hilos-tensores", label: "Hilos Tensores" },
	{ value: "hydrafacial", label: "HydraFacial" },
	{ value: "radiofrecuencia", label: "Radiofrecuencia" },
	{ value: "cavitacion", label: "Cavitación" },
	{ value: "presoterapia", label: "Presoterapia" },
	{ value: "consulta-general", label: "Consulta General" },
];

// Preguntas frecuentes
export const faqs = [
	{
		question: "¿Cómo puedo reservar una cita?",
		answer: "Puedes reservar una cita llamándonos directamente, enviándonos un mensaje a través de este formulario, por WhatsApp o visitándonos en nuestras instalaciones.",
	},
	{
		question: "¿Ofrecen consultas gratuitas?",
		answer: "Sí, ofrecemos consultas gratuitas de 15 minutos para evaluar tus necesidades y recomendarte el mejor tratamiento.",
	},
	{
		question: "¿Qué métodos de pago aceptan?",
		answer: "Aceptamos efectivo, tarjetas de crédito/débito y ofrecemos planes de financiamiento para tratamientos específicos.",
	},
	{
		question: "¿Puedo cancelar mi cita?",
		answer: "Sí, puedes cancelar tu cita hasta 24 horas antes sin costo. Cancelaciones con menos tiempo pueden tener un cargo.",
	},
	{
		question: "¿Los tratamientos tienen garantía?",
		answer: "Todos nuestros tratamientos cuentan con seguimiento post-procedimiento y garantía de calidad según el tipo de tratamiento.",
	},
	{
		question: "¿Necesito preparación especial antes de los tratamientos?",
		answer: "Algunos tratamientos requieren preparación previa. Te proporcionaremos todas las indicaciones necesarias durante la consulta.",
	},
];

// Videos para las páginas de servicios
export interface ServiceVideo {
	id: string;
	title: string;
	subtitle: string;
	buttonText: string;
	videoUrl: string;
	gradientFrom?: string;
	gradientTo?: string;
}

export const serviceVideos: ServiceVideo[] = [
	{
		id: "depilacion-laser",
		title: "Depilación Láser",
		subtitle: "Tecnología de vanguardia para una depilación definitiva, segura y eficaz",
		buttonText: "Solicitar Consulta Gratuita",
		videoUrl: "https://storage.googleapis.com/msgsndr/QzCL7gUKiNyPNiAEh1vR/media/67d0dd7c602854a606b999d3.mp4", // URL del video - actualizar con la URL real
		gradientFrom: "primary/30",
		gradientTo: "secondary/30",
	},
	{
		id: "medicina-estetica",
		title: "Medicina Estética",
		subtitle: "Tratamientos médicos avanzados para realzar tu belleza natural de forma segura",
		buttonText: "Consulta Médica Especializada",
		videoUrl: "https://storage.googleapis.com/msgsndr/QzCL7gUKiNyPNiAEh1vR/media/67e8cb801870f40398480c09.mp4", // URL del video - actualizar con la URL real
		gradientFrom: "secondary/30",
		gradientTo: "accent/30",
	},
	{
		id: "estetica-avanzada",
		title: "Estética Avanzada",
		subtitle: "Tecnología de última generación para tratamientos corporales y faciales integrales",
		buttonText: "Descubre Nuestros Tratamientos",
		videoUrl: "https://storage.googleapis.com/msgsndr/QzCL7gUKiNyPNiAEh1vR/media/67ccfbbe3d10885ae1d7e1bc.mp4", // URL del video - actualizar con la URL real
		gradientFrom: "accent/30",
		gradientTo: "primary/30",
	},
];
