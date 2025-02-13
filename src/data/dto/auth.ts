interface RegistrationRequest {
	email: string;
	password: string;
	username: string;
}

interface LoginRequest {
	email: string;
	password: string;
}

interface AuthorisedUser {
	email: string;
	username: string;
	_t?: string;
}
