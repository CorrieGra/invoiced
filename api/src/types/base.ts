import { IncomingHttpHeaders } from 'http2';

export default interface RequestWithCustomHeaders extends Request {
	headers: Headers & {
		'x-invoiced-token': string;
	};
}
