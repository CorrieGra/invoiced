import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';

import BaseRoute from './routes/v1';

(() => {
	const app = express();

	app.use(cors());
	app.use(morgan('tiny'));
	app.use(express.json());

	app.use('/v1', BaseRoute);

	app.listen(process.env.PORT, () => {
		console.log(`listening on port ${process.env.PORT}`);
	});
})();
