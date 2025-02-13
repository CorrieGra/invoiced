export const ClientService: IClientService = {
	create: (payload) => {
		// TODO: ACTUALLY SAVE INTO DB
		const response: ClientCompany = {
			company: {
				name: payload.name,
				address: payload.address,
				companyContact: payload.companyContact,
				componayPersonContact: payload.componayPersonContact,
			},
			projects: [],
			createdAt: new Date(),
			updatedAt: null,
			isActive: true,
			hasAccessRevoked: false,
		};

		return response;
	},
	update: (payload) => {
		// TODO: ACTUALLY UPDATE DB ENTRY
		const response: ClientCompany = {
			company: {
				name: payload.name,
				address: payload.address,
				companyContact: payload.companyContact,
				componayPersonContact: payload.componayPersonContact,
			},
			projects: [],
			createdAt: new Date(),
			updatedAt: null,
			isActive: true,
			hasAccessRevoked: false,
		};

		return response;
	},
	findById: (id: string) => {
		return {
			company: {
				name: 'YNCA',
				address: 'Somewhere',
				companyContact: {
					email: 'test@email.com',
					mobile: '0987654321',
				},
				componayPersonContact: {
					firstName: 'Jane',
					lastName: 'Doe',
					email: 'jane@email.com',
					mobile: '0987654321',
				},
			},
			projects: [],
			createdAt: new Date(),
			updatedAt: new Date(),
			isActive: true,
			hasAccessRevoked: false,
		} as ClientCompany;
	},
	find: () => {
		return [
			{
				company: {
					name: 'YNCA',
					address: 'Somewhere',
					companyContact: {
						email: 'test@email.com',
						mobile: '0987654321',
					},
					componayPersonContact: {
						firstName: 'Jane',
						lastName: 'Doe',
						email: 'jane@email.com',
						mobile: '0987654321',
					},
				},
				projects: [],
				createdAt: new Date(),
				updatedAt: new Date(),
				isActive: true,
				hasAccessRevoked: false,
			} as ClientCompany,
			{
				company: {
					name: 'KFC',
					address: 'Somewhere',
					companyContact: {
						email: 'test@email.com',
						mobile: '0987654321',
					},
					componayPersonContact: {
						firstName: 'John',
						lastName: 'Doe',
						email: 'john@email.com',
						mobile: '0987654321',
					},
				},
				projects: [],
				createdAt: new Date(),
				updatedAt: new Date(),
				isActive: true,
				hasAccessRevoked: true,
			} as ClientCompany,
		];
	},
	remove: (id: string) => {},
	revokeAccess: (id: string) => {
		// TODO: MARK hasAccessRevoked AS TRUE IN DB
	},
	reinstateAccess: (id: string) => {
		// TODO: MARK hasAccessRevoked AS FALSE IN DB
	},
};

export default ClientService;
