import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const googleAuthService = async (req, res) => {
    try {
        const { idToken } = req.body;
        if (!idToken) {
            res.status(400).json({ error: 'ID token is required' });
            return;
        }
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload) {
            res.status(401).json({ error: 'Invalid Google token' });
            return;
        }
        const { sub: googleId, email, name } = payload;
        if (!email) {
            res.status(400).json({ error: 'Email not provided by Google' });
            return;
        }
        let user = await prisma.user.findUnique({ where: { email } });
        if (user) {
            // Link account if googleId is missing
            if (!user.googleId) {
                user = await prisma.user.update({
                    where: { email },
                    data: { googleId }
                });
            }
        }
        else {
            // Create new user, note: password is now optional in schema
            user = await prisma.user.create({
                data: {
                    email,
                    name: name || 'Google User',
                    googleId,
                }
            });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
        res.status(200).json({
            message: 'Google login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        });
    }
    catch (error) {
        console.error('Error logging in with Google:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export default googleAuthService;
//# sourceMappingURL=googleAuthService.js.map