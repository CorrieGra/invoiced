import { Request, Response, Router } from 'express';

const AuthRouter = Router();

AuthRouter.post('/register', (request: Request, response: Response) => {
	try {
	} catch (e) {
		console.log('Something went wrong');
	}
});

AuthRouter.post('/login', (request: Request, response: Response) => {
	try {
	} catch (e) {
		console.log('Something went wrong');
	}
});

export default AuthRouter;
