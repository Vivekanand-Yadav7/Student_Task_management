import bcrypt from 'bcryptjs';
import { prisma } from '../config/db.js';
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        const user_with_same_email = await prisma.user.findUnique({ where: { email } });
        if (user_with_same_email) {
            res.status(400).json({ error: 'User with this email already exists' });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json(user);
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export default registerUser;
//# sourceMappingURL=registerUser.js.map