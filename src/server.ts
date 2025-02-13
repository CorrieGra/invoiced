import 'dotenv/config';
import 'module-alias/register';
import './config/env.validator';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { v1BaseRouter } from './routes/index';

(() => {
	const app = express();

	app.use(cors());
	app.use(morgan('tiny'));
	app.use(express.json());

	app.use('/v1', v1BaseRouter);

	app.listen(process.env.PORT, () => {
		console.log(`listening on port ${process.env.PORT}`);
	});
})();
