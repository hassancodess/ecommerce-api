import z, { ZodError } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().positive().max(65536, `options.port should be >= 0 and < 65536`).default(3000),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    DATABASE_URL: z
        .string({
            description: 'DB Connection string',
            required_error: '😱 You forgot to add a database URL'
        })
        .url()
        .min(3)
});

const parsedEnv = envSchema.safeParse({
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL
});

const prettyPrintErrors = (errors: ZodError) => {
    const formattedError = errors.flatten().fieldErrors;
    console.log('🚀 ~ prettyPrintErrors ~ formattedError:', formattedError);
    Object.entries(formattedError).forEach(([key, value]) => {
        console.log(`${key}:`);
        if (Array.isArray(value)) {
            value.forEach((errorMessage: string) => {
                console.log(`  - ${errorMessage}`);
            });
        }
    });
};

if (!parsedEnv.success) {
    console.log('------------------------------------------------');
    console.log('There is an error with the environment variables');
    console.log('------------------------------------------------');
    console.log(prettyPrintErrors(parsedEnv.error));
    process.exit(1);
}

export const env = parsedEnv.data;
