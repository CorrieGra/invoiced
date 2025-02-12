import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { AuthRouter } from 'routes';

(() => {
	const app = express();

	app.use(cors());
	app.use(express.json());

	app.use('/api', [AuthRouter]);

	app.listen(9090, () => {
		console.log('linstening on port 9090');
	});
})();
