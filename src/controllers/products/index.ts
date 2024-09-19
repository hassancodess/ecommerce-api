import { prisma } from '@/lib/prisma';
import { Request, Response } from 'express';

export const getProducts = (req: Request, res: Response) => {
    res.status(200).send('Get Products');
};

export const createProduct = async (req: Request, res: Response) => {
    const newProduct = await prisma.product.create({
        data: {
            name: 'Wireless Headphones',
            description: 'High-quality wireless headphones with noise cancellation.',
            price: 149.99,
            quantity: 50,
            imageUrl: 'https://example.com/images/wireless-headphones.jpg',
            isActive: true
        }
    });
    res.status(200).send(newProduct);
};
