import { clinicLocations } from "../data/contactData";

interface ContactInfoProps {
    badge?: boolean;
	email?: boolean;
	phone?: boolean;
}

const ContactInfo = (props: ContactInfoProps) => {
	return clinicLocations.map((clinic) => (
		<div key={clinic.id} className="">
			<h3 className="text-lg font-semibold mb-3">{clinic.name.toUpperCase()}</h3>
			<div className="space-y-1">
				<div className="flex items-center gap-3">
					<div className={props.badge ? "badge badge-primary" : ""}>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
					</div>
					<div>
						<p className="text-base-content/70">{clinic.address}</p>
					</div>
				</div>

				{props.email && clinic.email && (
					<div className="flex items-center gap-3">
						<div className={"flex items-center " + (props.badge ? "badge badge-primary" : "")}>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div className="break-all">
							<a href={`mailto:${clinic.email}`} className="text-base-content/70 hover:text-primary transition-colors">
								{clinic.email}
							</a>
						</div>
					</div>
				)}

				{props.phone && clinic.phone && (
					<div className="flex items-center gap-3">
						<div className={props.badge ? "badge badge-primary" : ""}>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								></path>
							</svg>
						</div>
						<div>
							<a href={clinic.urlWP} target="_blank" className="text-base-content/70 hover:text-primary transition-colors">
								{clinic.phone}
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	));
};

export default ContactInfo;
