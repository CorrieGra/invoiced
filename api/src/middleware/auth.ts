import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

import { ErrorMessages } from '../constants';
import RequestWithCustomHeaders from 'types/base';

export const Authorise = (
	request: RequestWithCustomHeaders,
	response: Response,
	next: NextFunction,
) => {
	try {
		const isAuthorised = jwt.verify(
			request.headers['x-invoiced-token'],
			process.env.JWT_SECRET,
		);
		if (!isAuthorised) throw new Error('Unauthorised');
		next();
	} catch (error) {
		console.error(error);
		response.status(401).json({
			message: ErrorMessages.Unauthorised,
		});
	}
};
