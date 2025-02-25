import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }
    const secret = process.env.JWT_SECRET || 'defaultsecret';
    try {
        // Synchronous verification throws if token is invalid or expired.
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(403).json({ message: 'Token is invalid or expired' });
        return;
    }
};
