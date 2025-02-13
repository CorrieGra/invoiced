interface ClientContactDetails {
	email: string;
	mobile: string;
	[K: string]: string;
}

interface ClientCompanyDetails {
	name: string;
	address: string;
	companyContact: ClientContactDetails;
	componayPersonContact: ClientContactDetails & {
		firstName: string;
		lastName: string;
	};
}

interface ClientCompany {
	company: ClientCompanyDetails;
	projects: Project[];
	createdAt: Date;
	updatedAt: Date | null;
	isActive: boolean;
	hasAccessRevoked: boolean;
}
