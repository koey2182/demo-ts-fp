import express from 'express';

export const router = express.Router();

router.get('/', async (req, res, next) => {
    return res.status(200).json({ message: 'hello, world!' });
});
