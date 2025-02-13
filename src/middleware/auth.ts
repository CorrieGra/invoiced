import { NextFunction, Request, Response } from 'express';
import { ErrorMessages } from '../constants';
import jwt from 'jsonwebtoken';
import { IncomingHttpHeaders } from 'http';

interface RequestWithCustomHeaders extends Request {
	headers: IncomingHttpHeaders & {
		'x-invoiced-token': string;
	};
}

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
