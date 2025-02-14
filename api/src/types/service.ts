interface IBaseService<REQUEST, RESPONSE> {
	create: (payload: REQUEST) => RESPONSE;
	update: (payload: REQUEST) => RESPONSE;
	remove: (id: string) => void;
	findById: (id: string) => RESPONSE;
	find: () => RESPONSE[];
}

interface IAuthService {
	register: (payload: RegistrationRequest) => Promise<AuthorisedResponse>;
	login: (payload: LoginRequest) => Promise<AuthorisedResponse>;
}

interface IClientService
	extends IBaseService<ClientCompanyDetails, ClientCompany> {
	revokeAccess: (id: string) => void;
	reinstateAccess: (id: string) => void;
}
