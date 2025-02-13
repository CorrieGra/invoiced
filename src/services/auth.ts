import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

let passwordHash: string;

export const AuthService: IAuthService = {
	register: async (
		payload: RegistrationRequest,
	): Promise<AuthorisedResponse> => {
		// HAS PASSWORD
		const hash = await bcrypt.hash(payload.password, 10);
		// TODO: REMOVE ONCE DB IS CONNECTED
		passwordHash = hash;
		//

		// TODO: SAVE INTO DB

		// GENERATE JWT
		const token = jwt.sign(
			`${payload.email}${payload.username}`,
			process.env.JWT_SECRET,
		);

		// RETURN AUTHORISED RESPONSE
		return {
			email: payload.email,
			username: payload.username,
			_t: token,
		};
	},
	login: async (payload: LoginRequest): Promise<AuthorisedResponse> => {
		// VALIDATE PASSWORD
		// TODO: RETRIEVE PASSWORD & USERNAME FROM DB ONCE CONNECTED FOR USER EMAIL
		const isAuthorised = await bcrypt.compare(
			payload.password,
			passwordHash,
		);

		// IF UNAUTHORISED THROW
		if (!isAuthorised) throw new Error('Unauthorised');

		// GENERATE JWT
		// TODO: REPLACE 'someusername' IN TOKEN SIGN()
		// ONCE VALUE IS RETRIEVED FROM THE DB
		const token = jwt.sign(
			`${payload.email}someusername`,
			process.env.JWT_SECRET,
		);

		// RETURN AUTHORISED RESPONSE
		return {
			email: payload.email,
			username: 'someusername',
			_t: token,
		};
	},
};
