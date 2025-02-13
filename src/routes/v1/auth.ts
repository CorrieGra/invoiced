import { Request, Response, Router } from 'express';
import { AuthService } from '../../services';

const AuthRouter = Router();

AuthRouter.post('/register', async (request: Request, response: Response) => {
	try {
		const authorisedResponse = await AuthService.register(request.body);

		const _t = authorisedResponse._t!;
		delete authorisedResponse._t;

		response
			.status(201)
			.setHeader('x-invoiced-token', _t)
			.json(authorisedResponse);
	} catch (e) {
		console.error(e);
		response.status(500).json({
			message: e,
		});
	}
});

AuthRouter.post('/login', async (request: Request, response: Response) => {
	try {
		const authorisedResponse = await AuthService.login(request.body);

		const _t = authorisedResponse._t!;
		delete authorisedResponse._t;

		response
			.status(201)
			.setHeader('x-invoiced-token', _t)
			.json(authorisedResponse);
	} catch (e) {
		console.log(e);
		response.status(500).json({
			message: e,
		});
	}
});

export default AuthRouter;
