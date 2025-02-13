import { Request, Response, Router } from 'express';
import { ClientService } from '../../services';

const ClientRouter = Router();

ClientRouter.get('/', async (_, response: Response) => {
	try {
		const client = ClientService.find();

		if (!client) throw new Error('Company could not be found.');

		response.status(200).json(client);
	} catch (error) {
		console.error(error);
		response.status(500).json({
			message: error,
		});
	}
});

ClientRouter.get('/:id', async (request: Request, response: Response) => {
	try {
		const client = ClientService.findById(request.params.id);

		if (!client) throw new Error('Company could not be found.');

		response.status(200).json(client);
	} catch (error) {
		console.error(error);
		response.status(500).json({
			message: error,
		});
	}
});

ClientRouter.post('/', async (request: Request, response: Response) => {
	try {
		const client = ClientService.create(request.body);

		if (!client) throw new Error('Something went wrong sis');

		response.status(201).json(client);
	} catch (error) {
		console.error(error);
		response.status(500).json({
			message: error,
		});
	}
});

export default ClientRouter;
