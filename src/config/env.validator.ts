import { z } from 'zod';

const envSchema = z.object({
	PORT: z.string(),
	POSTGRES_PORT: z.string(),
	POSTGRES_HOST: z.string(),
	POSTGRES_DATABASE: z.string(),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	JWT_SECRET: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error('Invalid environment variables');
	parsedEnv.error.issues.forEach((error) => {
		console.log(`${error.path[0]} is ${error.message}`);
	});
	process.exit(1);
}
