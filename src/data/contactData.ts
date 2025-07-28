// Datos de contacto y ubicaciones de las clínicas Revitalis

import type { contenidoPagina } from "../interfaces";

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

export const tratamientosFaciales = [
	{
		title: "Lifting Facial Antiage",
		description: "Combina Radiofrecuencia y Bellaction generando la contracción y regeneración de las fibras de colágeno y logrando un notable rejuvenecimiento facial.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67c900d353386ef40ca37c25.png",
	},
	{
		title: "Mesoterapia Facial Dermapen",
		description: "Utiliza múltiples agujas finas provocando un estimulo que se traducirá en la producción de colágeno y elastina.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67ca288376e09cdad63c7754.png",
	},
	{
		title: "Peeling Químico",
		description: "Consiste en la aplicación de una sustancia química para la descamación del estrato superficial de la piel.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67fc24dc266b6f151391bc49.png",
	},
	{
		title: "Electroestimulación facial",
		description: "Bio estimulación muscular facial que genera contracciones rítmicas a alta intensidad produciendo una tonificación a nivel muscular.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/680e3ed9a00f648a78f19e55.png",
	},
	{
		title: "Microdermoabrasión",
		description: "Es un tratamiento realizado para ayudar a suavizar la piel, desobstruir los poros y revelar el brillo de la piel.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682922af8acc4ae215b7ea77.png",
	},
	{
		title: "Radioface",
		description: "Tratamiento tensor con resultados inmediatos. Utiliza la última tecnología en Radiofrecuencia y se potencia con máscaras tensoras.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67ca2883c1a2cb01319f8f31.png",
	},
	{
		title: "Limpieza facial",
		description: "Renueva tu piel desde lo profundo, eliminando impurezas y mejorando su textura para un rostro más fresco, suave y luminoso.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682921e0a6cf15a41f66de31.png",
	},
	{
		title: "Hifu facial",
		description: "Reafirma y redefine el rostro desde las capas más profundas, estimulando colágeno para una piel más tensa, lisa y rejuvenecida sin cirugía.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6825ee4f39adaad0a2ddb06d.png",
	},
];

export const tratamientosCorporales = [
	{
		title: "Masaje Descontracturante",
		description: "Masaje manual en cuello y espalda. Duración 45 minutos",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67ca398bc3deb822835ca867.png",
	},
	{
		title: "Drenaje Linfático Manual",
		description: "Masaje manual que contribuye a mejorar diversas alteraciones médico-estéticas mediante el estímulo de la circulación sanguínea y linfática.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67ca398b96e761b67327238d.png",
	},
	{
		title: "Maderoterapia",
		description: "Consiste en aplicar un intenso masaje usando utensilios de madera y que consiguen combatir la celulitis, tonificar y reafirmar el cuerpo",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67ca398bcd9cc51fff91a4a6.png",
	},
	{
		title: "Bio Roll",
		description: "Un tratamiento reductor que combina Pulsos magnéticos y Radio frecuencia, favoreciendo también la producción de colágeno y elastina en la piel.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67fc31b6266b6fa8c491c5ad.png",
	},
	{
		title: "Mio Up",
		description: "Bio estimulación muscular que genera contracciones rítmicas a alta intensidad produciendo una tonificación a nivel muscular.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67fc43f571384b9004b3d32d.png",
	},
	{
		title: "Hifu corporal",
		description:
			"Activa la producción de colágeno y elastina en las capas profundas de la piel, mejorando la firmeza, redefiniendo contornos y reduciendo adiposidad localizada sin intervención invasiva.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6825eb8d5b62632ce2745d25.png",
	},
	{
		title: "Criolipólisis",
		description: "Procedimiento no invasivo que utiliza el frío controlado y focalizado para eliminar la adiposidad.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682923a48acc4a6eb6b7eb81.png",
	},
	{
		title: "Radiofrecuencia multipolar + Vacum-Dermo Movilizacion",
		description: "Recupera las condiciones microcirculatorias que mejoran la calidad de la piel y la redistribución del tejido adiposo",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67fc49fcfba702ca7b675f9f.png",
	},
];

export const tratamientosCapilares = [
	{
		title: "Radiofrecuencia Capilar",
		description: "Aumenta la temperatura de los tejidos y la actividad celular, estimulando el tejido desde el interior y potenciando el flujo sanguíneo.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67ca472376e09ce8dc3cc9d3.png",
	},
	{
		title: "Mesoterapia Capilar Con Dermapen",
		description: "Tratamiento de bioestimulación que a través de pequeñas inyecciones indoloras activa el crecimiento capilar.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d504b41b97ac290bfe35cb.png",
	},
];

export const packsDepilacionFem = [
	{
		title: "Cuerpo Completo",
		description: "Una solucion completa y definitiva para impulsar tu bienestar",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682294fedbcf316f0b29d319.png",
	},
	{
		title: "Pack 1",
		description: "Elegí 3 zonas y combinalas como más te guste",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682293c825c6ca1d1ed3884e.png",
	},
	{
		title: "Pack 2",
		description: "Elegí 5 zonas y combinalas como más te guste",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682296a782348a2bf90928ed.png",
	},
];

export const packsDepilacionMasc = [
	{
		title: "Cuerpo Completo",
		description: "Una solucion completa y definitiva para impulsar tu bienestar",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d514661b97ac28f8fe4874.jpeg",
	},
	{
		title: "Pack 1",
		description: "Elegí 3 zonas y combinalas como más te guste",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d23fec3d1088ff04e22d98.png",
	},
	{
		title: "Pack 2",
		description: "Elegí 5 zonas y combinalas como más te guste",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d5fa591b97acc0bcffda4e.png",
	},
];

export const packsZonasFem = [
	{
		title: "Zonas Grandes",
		description: "Piernas completas, Brazos completos, Espalda completa, Abdomen",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682297b07345a9148bc9ad11.png",
	},
	{
		title: "Zonas Medianas",
		description: "Medias piernas, Medios brazos, Abdomen, Pecho, Facial o Bikini integral",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d0f2f99138279247e55670.png",
	},
	{
		title: "Zonas Pequeñas",
		description: "Axilas, Ingles, Pubis, Nalgas, Interglúteos, Hombros, Lumbar ó Cuello",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67e8bb7913c4b682b6145c9a.png",
	},
	{
		title: "Zonas Minis",
		description: "Línea alba, Areolas, Labio, Mentón, Patillas - Entrecejo, Manos, Pies",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d22dcf3d10887b51e21898.png",
	},
];
export const packsZonasMasc = [
	{
		title: "Zonas Grandes",
		description: "Piernas completas, Brazos completos, Espalda completa, Abdomen",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d23530e86818d1a7cbda25.png",
	},
	{
		title: "Zonas Medianas",
		description: "Medias piernas, Medios brazos, Abdomen, Pecho, Facial o Bikini integral",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d51b887a11864374741bec.png",
	},
	{
		title: "Zonas Pequeñas",
		description: "Axilas, Ingles, Pubis, Nalgas, Interglúteos, Hombros, Lumbar ó Cuello",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d5f6117a1186fdde75a2a7.png",
	},
	{
		title: "Zonas Minis",
		description: "Línea alba, Areolas, Labio, Mentón, Patillas - Entrecejo, Manos, Pies",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d5f6118b2801571dc211e6.png",
	},
];

export const tratamientos = [
	{
		title: "Botox",
		description: "Suaviza líneas de expresión y previene arrugas con resultados naturales y efecto rejuvenecedor inmediato.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682927e7a6cf1510b066e678.png",
	},
	{
		title: "Rellenos con Ácido hialurónico",
		description: "Se aplica en la capa más superficial del borde labial, manteniendo su perfil natural.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6833aaa79681676f98c1e1e8.png",
	},
	{
		title: "Inductores de Colágeno con Ácido Poliláctico",
		description: "Estimulan la producción natural de colágeno para una piel más firme, densa y rejuvenecida a largo plazo.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68156ab198b82929980be638.png",
	},
	{
		title: "Mesoterapia",
		description: "Microinyecciones con activos que revitalizan, hidratan y mejoran la calidad de la piel desde el interior.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68156fbeca20000c322fb2a9.png",
	},
	{
		title: "Carboxiterapia",
		description: "Elimina la grasa localizada por medio de la ruptura de adipocitos. Mejora la circulación sanguínea y el drenaje linfático en la zona aplicada.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68157c6e98b8297f6a0bf428.png",
	},
	{
		title: "Morpheus",
		description: "Radiofrecuencia fraccionada con microagujas. Se utiliza para tratar arrugas finas, cicatrices, flacidez y otros problemas de la piel.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/680e435ba00f642269f1a3f4.png",
	},
	{
		title: "Hilos Tensores",
		description: "Estimulan el colágeno y generan un efecto lifting inmediato, mejorando la firmeza y redefiniendo contornos sin necesidad de cirugía.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6833ab65814a9d69e701d24e.png",
	},
	{
		title: "Peeling químico médico",
		description: "Renueva las capas superficiales de la piel, mejorando manchas, arrugas y textura para un rostro más uniforme, luminoso y revitalizado.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6825f8edfeeed782f7e8c612.png",
	},
	{
		title: "Polinucleótidos",
		description: "Regeneran la piel desde el interior, mejorando firmeza, hidratación y textura con un efecto revitalizante y duradero.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6825f9bcd6d6de7cab3a07fd.png",
	},
	{
		title: "Plasma Rico en Plaquetas (PRP)",
		description: "Terapia regenerativa que utiliza tu propio plasma para estimular colágeno y renovar la piel.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d702f78b28010adac368f6.png",
	},
	{
		title: "Exosomas",
		description: "Biotecnología avanzada que regenera la piel, reduce arrugas y mejora visiblemente la calidad cutánea.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68292bebe5ca6c427bf33a91.png",
	},
	{
		title: "Hiperhidrosis",
		description: "Controla la sudoración excesiva en axilas, manos o pies mediante la aplicación de Botox.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68157fd30013193ac204749d.png",
	},
	{
		title: "Rejuvenecimiento de Cuello y Escote",
		description: "Estimulan la producción natural de colágeno para una piel más firme, densa y rejuvenecida a largo plazo.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68159a36ca2000103830097a.png",
	},
	{
		title: "Rejuvenecimiento Facial con Láser CO2 Fraccionado",
		description: "Corrige manchas, arrugas, cicatrices y rosácea, renovando profundamente la piel del rostro.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68292beba6cf1519c566eb1f.png",
	},
	{
		title: "Mesoterapia lipolítica",
		description: "Microinyecciones de sustancias lipolíticas para reducir la grasa localizada en áreas como el abdomen, los muslos o la papada.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68180fc7572c82e2e504990d.png",
	},
	{
		title: "Sonrisa Gingival",
		description: "Tratamiento con Botox que armoniza la sonrisa reduciendo la exposición excesiva de encías.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68157f9bea81018962ed13eb.png",
	},
	{
		title: "Bruxismo",
		description: "Alivia el rechinar de dientes y la tensión mandibular con Botox, mejorando la calidad de vida.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68292aec954010508e797406.png",
	},
];

export const medicinaCapilar = [
	{
		title: "Mesoterapia Capilar",
		description: "Microinyecciones con vitaminas y activos que estimulan el crecimiento, fortalecen el folículo y mejoran la calidad del cabello desde la raíz.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681584ffca20008d7d2ff2b2.png",
	},
	{
		title: "PRP Capilar - Plasma Rico en Plaquetas",
		description: "Terapia regenerativa que utiliza tu propio plasma para reactivar los folículos y frenar la caída del cabello de forma efectiva.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68158734ea8101a6e7ed2344.png",
	},
	{
		title: "Trasplante Capilar",
		description: "Técnica de microinjerto capilar que redistribuye tu propio cabello para lograr resultados definitivos, naturales y sin cicatrices visibles.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681586ca98b82985160c6052.png",
	},
];

export const cirugiaPlastica = [
	{
		title: "Blefaroplastia con y sin cirugía",
		description: "Procedimiento personalizado que elimina el exceso de piel, bolsas o flacidez en los párpados. Ya sea con cirugía o mediante técnicas no invasivas.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6833acdd9cf831d8a39d5910.png",
	},
	{
		title: "Mamoplastia de Aumento o Reducción",
		description:
			"Procedimiento quirúrgico que tiene como objetivo modificar el tamaño, la forma o la posición de las mamas, ya sea para aumentar el tamaño (aumento mamario), reducirlo (reducción mamaria) o cambiar la forma (mastopexia).",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68158c29ea81015bbded2c34.png",
	},
	{
		title: "Abdominoplastia",
		description: "Define el abdomen eliminando piel excedente y reforzando la pared abdominal.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6815951e1e3c1ebdc412c7d3.png",
	},
	{
		title: "Endoláser - Papada, Lifting Facial, Grasa Abdominal",
		description: "Tecnología láser de última generación que redefine contornos y elimina grasa localizada sin cortes ni cicatrices visibles.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6815951e1e3c1ebb3412c7d2.png",
	},
];

export const medicinaVascular = [
	{
		title: "Arañas vasculares",
		description: "Tratamiento estético mínimamente invasivo para eliminar capilares visibles y devolverle uniformidad a la piel.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681596c9ca20004f453006e2.png",
	},
	{
		title: "Várices",
		description: "Abordaje médico de várices que alivia molestias, mejora la circulación y recupera la estética de tus piernas.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681596c9ca20007b863006e1.png",
	},
	{
		title: "Cirugía Endovascular con Láser",
		description: "Técnica avanzada que trata várices internas con precisión, menos dolor y una recuperación más rápida.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6815972a00131985bd0491b4.png",
	},
];

export const medicinayNutricion = [
	{
		title: "Nutrición y Plan Nutricional",
		description: "Asesoramiento integral y personalizado para lograr cambios sostenibles en hábitos y composición corporal.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681597deea810151a9ed35ca.png",
	},
	{
		title: "Balón Gástrico",
		description: "Método no quirúrgico que ayuda a controlar el apetito y bajar de peso de forma efectiva y segura.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68159a360013192fd3049440.png",
	},
	{
		title: "Cirugía Bariátrica",
		description: "Procedimiento quirúrgico para pacientes con obesidad, con alto impacto en la salud y la calidad de vida.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d725941031c91e73996243.png",
	},
	{
		title: "Criolipólisis",
		description: "Procedimiento no invasivo que utiliza el frío controlado y focalizado para eliminar la adiposidad.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6829237a954010390d796af7.png",
	},
	{
		title: "Mesoterapia Lipolítica",
		description: "Microinyecciones de sustancias lipolíticas para reducir la grasa localizada en áreas como el abdomen, los muslos o la papada.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/67d616e45106d516aa33d550.png",
	},
	{
		title: "Endoláser Facial y Corporal",
		description: "Técnica láser que redefine el contorno facial y corporal disolviendo grasa de forma precisa y mínimamente invasiva.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68292cf7e5ca6cf981f33bee.png",
	},
];

export const ginecoestatica = [
	{
		title: "Blanqueamiento íntimo",
		description: "Tratamiento no invasivo para unificar el tono de la piel en la zona íntima, con resultados visibles y seguros.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681819f6572c82554a04aa94.png",
	},
	{
		title: "Plasma Rico en Plaquetas - PRP",
		description: "Regeneración celular y mejora de la salud íntima femenina mediante la aplicación de plasma propio.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6815a180ea8101c33ded3f4b.png",
	},
	{
		title: "Aumento de labios mayores",
		description: "Rejuvenecimiento estético que aporta volumen y mejora la turgencia de la zona genital externa.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6815a1e90013192d5d049c50.png",
	},
	{
		title: "Labioplastia Menor",
		description: "Cirugía estética y funcional que redefine los labios menores, mejorando confort y apariencia.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681813cfefb1e55aa3a9683b.png",
	},
	{
		title: "Rejuvenecimiento Vaginal",
		description: "Tratamientos láser que restauran tono, lubricación y funcionalidad, mejorando la calidad de vida íntima.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68181d65efb1e519d6a97f88.png",
	},
	{
		title: "Incontinencia Urinaria con Láser",
		description: "Solución no invasiva que refuerza el tejido vaginal, disminuyendo episodios de incontinencia leve a moderada.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6829303fd08385dba616a04b.png",
	},
];

export const odontoestetica = [
	{
		title: "Blanqueamiento Dental con Láser",
		description: "Aclara varios tonos en una sola sesión, con tecnología segura que protege el esmalte y potencia la sonrisa.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681813ce1eb49f17d489d7f6.png",
	},
	{
		title: "Ortodoncia Estética",
		description: "Alinea tu sonrisa con sistemas casi invisibles que se adaptan a tu estilo de vida.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6825f370d6d6de6d1839f324.png",
	},
	{
		title: "Implantes dentales",
		description: "Solución duradera y estética para reemplazar piezas dentales, con resultados naturales y funcionales.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/681817eadcbfaa3b2f04d96b.png",
	},
	{
		title: "Diseño de Sonrisa",
		description: "Transformación integral que equilibra forma, color y proporción dental para una sonrisa armónica y personalizada.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68292e9a8acc4ad8e9b7f97c.png",
	},
];

export const medicinaIntegrativa = [
	{
		title: "Sueroterapia",
		description: "Rehidrata, desintoxica y nutre tu cuerpo con vitaminas y minerales esenciales para recuperar energía y fortalecer el sistema inmunológico.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/6826202b150879a950fe6513.png",
	},
	{
		title: "Hormonoterapia",
		description: "Restablece el equilibrio hormonal de forma personalizada para mejorar tu vitalidad, estado de ánimo y bienestar general.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682620cd9ce13306cb3f87bb.png",
	},
	{
		title: "Medicina Orthomolecular",
		description: "Optimiza las funciones del cuerpo a través de nutrientes específicos, ayudando a prevenir desequilibrios y mejorar tu salud de forma natural.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68262135523c1722359cfb66.png",
	},
	{
		title: "Terapia Celular",
		description: "Estimula la regeneración desde el interior, revitalizando tejidos y fortaleciendo el organismo a nivel profundo.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/682621dba32ad3c516162449.png",
	},
	{
		title: "Terapia Neural",
		description: "Regula el sistema nervioso y alivia dolores crónicos mediante microinyecciones que restauran el equilibrio del cuerpo.",
		image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/QzCL7gUKiNyPNiAEh1vR/media/68158158db0184e88b87ab5a.jpeg",
	},
];

export const paginaMedicinaEstetica: contenidoPagina[] = [
	{
		title: "TRATAMIENTOS",
		description: "Descubre nuestra amplia selección de tratamientos y elige el que mejor se adapte a tus necesidades",
		content: tratamientos,
	},
	{
		title: "MEDICINA CAPILAR",
		description: "Ciencia, innovación y tecnología para fortalecer, regenerar y recuperar tu cabello",
		content: medicinaCapilar,
	},
	{
		title: "CIRUGÍA PLÁSTICA",
		description: "Excelencia médica para lograr armonía estética realzando tu belleza natural",
		content: cirugiaPlastica,
	},
	{
		title: "MEDICINA VASCULAR",
		description: "Soluciones médicas para tratar varices y mejorar la circulación, foco en salud, estética y bienestar integral",
		content: medicinaVascular,
	},
	{
		title: "MEDICINA & NUTRICIÓN PARA EL SOBREPESO",
		description: "Descubre una manera de adquirir hábitos saludables y perder peso junto a nuestro equipo profesional",
		content: medicinayNutricion,
	},
	{
		title: "GINECOESTÉTICA",
		description: "Tratamientos de combinan estética, funcionalidad, bienestar y salud íntima",
		content: ginecoestatica,
	},
	{
		title: "ODONTOESTÉTICA",
		description: "Técnicas avanzadas para mejorar la estética dental con naturalidad, precisión y armonía facial",
		content: odontoestetica,
	},
	{
		title: "MEDICINA INTEGRATIVA",
		description: "Equilibra y revitaliza el organismo combinando terapias avanzadas para mejorar tu salud de forma profunda y natural",
		content: medicinaIntegrativa,
	},
];

export const paginaEsteticaAvanzada: contenidoPagina[] = [
	{
		title: "TRATAMIENTOS FACIALES",
		description: "Descubre nuestra amplia selección de tratamientos faciales y elige el que mejor se adapte a tus necesidades",
		content: tratamientosFaciales,
	},
	{
		title: "TRATAMIENTOS CORPORALES",
		description: "Descubre nuestra amplia selección de tratamientos corporales y elige el que mejor se adapte a tus necesidades",
		content: tratamientosCorporales,
	},
	{
		title: "TRATAMIENTOS CAPILARES",
		description: "Descubre nuestra amplia selección de tratamientos capilares y elige el que mejor se adapte a tus necesidades",
		content: tratamientosCapilares,
	},
];

export const paginaDepilacionLaser: contenidoPagina[] = [
	{
		title: "DEPILACIÓN FEMENINA",
		description: "Conoce nuestros packs de zonas combinadas y elegí el que mejor se adapte a tus necesidades",
		content: packsDepilacionFem,
	},
	{
		description: "Estas son algunas de las zonas disponibles para incorporar en tus Packs",
		content: packsZonasFem,
	},
	{
		title: "DEPILACIÓN MASCULINA",
		description: "Conoce nuestros packs de zonas combinadas y elegí el que mejor se adapte a tus necesidades",
		content: packsDepilacionMasc,
	},
	{
		description: "Estas son algunas de las zonas disponibles para incorporar en tus Packs",
		content: packsZonasMasc,
	},
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
		videoUrl: "https://storage.googleapis.com/msgsndr/QzCL7gUKiNyPNiAEh1vR/media/67d0dd7c602854a606b999d3.mp4",
		gradientFrom: "primary/30",
		gradientTo: "secondary/30",
	},
	{
		id: "medicina-estetica",
		title: "Medicina Estética",
		subtitle: "Tratamientos médicos avanzados para realzar tu belleza natural de forma segura",
		buttonText: "Consulta Médica Especializada",
		videoUrl: "https://storage.googleapis.com/msgsndr/QzCL7gUKiNyPNiAEh1vR/media/67e8cb801870f40398480c09.mp4",
		gradientFrom: "secondary/30",
		gradientTo: "accent/30",
	},
	{
		id: "estetica-avanzada",
		title: "Estética Avanzada",
		subtitle: "Tecnología de última generación para tratamientos corporales y faciales integrales",
		buttonText: "Descubre Nuestros Tratamientos",
		videoUrl: "https://storage.googleapis.com/msgsndr/QzCL7gUKiNyPNiAEh1vR/media/67ccfbbe3d10885ae1d7e1bc.mp4",
		gradientFrom: "accent/30",
		gradientTo: "primary/30",
	},
];
