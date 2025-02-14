declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'staging' | 'production';
		PORT: number;
		POSTGRES_HOST: string;
		POSTGRES_PORT: number;
		POSTGRES_USER: string;
		POSTGRES_PASSWORD: string;
		POSTGRES_DB: string;
		JWT_SECRET: string;
	}
}
