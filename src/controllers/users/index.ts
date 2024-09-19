import { prisma } from '@/lib/prisma';
import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.status(200).send('Get Users');
};

export const createUser = async (req: Request, res: Response) => {
    const newUser = await prisma.user.create({
        data: {
            name: 'Hassan Hanif',
            email: 'hassan@example.com'
        }
    });
    res.status(200).send(newUser);
};
