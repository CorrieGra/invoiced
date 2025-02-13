import { IncomingHttpHeaders } from 'http2';

export default interface RequestWithCustomHeaders extends Request {
	headers: IncomingHttpHeaders & {
		'x-invoiced-token': string;
	};
}
