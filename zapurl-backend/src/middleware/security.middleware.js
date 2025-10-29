import aj from "../config/arcjet.js"
import { slidingWindow } from '@arcjet/node';

const securityMiddleware = async (req, res, next) => {
    try {
        if (process.env.NODE_ENV !== 'production') {
            return next();
        }
        const client = aj.withRule(
            slidingWindow({
                mode: 'LIVE',
                interval: '1m', // 1-minute window
                max: 10,        // allow 10 requests per minute
                name: 'global-rate-limit',
            })
        );

        const decision = await client.protect(req);

        if (decision.isDenied()) {
            if (decision.reason.isBot()) {
                return res.status(403).json({
                    error: 'Forbidden',
                    message: 'Automated requests are not allowed',
                });
            }

            if (decision.reason.isRateLimit()) {
                return res.status(429).json({
                    error: 'Too Many Requests',
                    message: 'Rate limit exceeded, try again later.',
                });
            }

            if (decision.reason.isShield()) {
                return res.status(403).json({
                    error: 'Forbidden',
                    message: 'Request blocked by Arcjet security policy.',
                });
            }
        }

        next();
    } catch (err) {
        console.error('⚠️ Arcjet middleware error:', err.message);
        res.status(500).json({
            error: 'Internal Server Error',
            message: 'Something went wrong with Arcjet middleware',
        });
    }
};

export default securityMiddleware;