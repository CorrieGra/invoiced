export const ErrorMessages = {
	Internal:
		'We are facing some technical issues, please try again later or if the issue persists, please contact the administrator.',
	Unauthorised: 'Provided email or password was incorrect, please try again.',
};

export type ErrorMessage = keyof typeof ErrorMessages;
