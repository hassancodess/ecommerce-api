import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // maximum number of request inside a window
    message: 'You have exceeded the 100 requests in 10 minutes limit!', // the message when they exceed limit
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
});

export default rateLimiter;
