import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';

const AuthRouter = Router();
let password: string;

AuthRouter.post('/register', async (request: Request, response: Response) => {
	try {
		password = await bcrypt.hash(request.body.password, 10);
		response.json({
			password,
		});
	} catch (e) {
		console.log('Something went wrong');
	}
});

AuthRouter.post('/login', async (request: Request, response: Response) => {
	try {
		response.json({
			status: await bcrypt.compare(request.body.password, password),
		});
	} catch (e) {
		console.log('Something went wrong');
		response.send('shitteroo');
	}
});

export default AuthRouter;
