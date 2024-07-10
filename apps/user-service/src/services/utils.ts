import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export async function generateToken(userId: number): Promise<string> {
    const secretKey = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign({ userId }, secretKey, { expiresIn: process.env.EXPIRES_IN || '1h' });
    return token;
}