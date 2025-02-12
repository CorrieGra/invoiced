import { z } from 'zod';

const envSchema = z.object({
	PORT: z.number(),
	DB_PORT: z.number(),
	DB_HOST: z.string(),
	DB_NAME: z.string(),
	DB_USER: z.string(),
	DB_PASSWORD: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error('Invalid environment variables');
	process.exit(1);
}
