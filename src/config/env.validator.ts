import { z } from 'zod';

const envSchema = z.object({
	PORT: z.string(),
	DB_PORT: z.string(),
	DB_HOST: z.string(),
	DB_NAME: z.string(),
	DB_USER: z.string(),
	DB_PASSWORD: z.string(),
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
