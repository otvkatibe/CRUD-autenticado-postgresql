import jwt from 'jsonwebtoken';
import { logError } from './logger.js';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        logError(new Error('Token não fornecido'), null, req.originalUrl);
        return res.status(401).json({ message: 'Token não fornecido. Por favor, faça login.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        logError(error, null, req.originalUrl);
        return res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
};

export default verifyToken;