export default function handler(req, res) {
    res.status(401).json({ message: 'You are not authenticated for this page.' });
};