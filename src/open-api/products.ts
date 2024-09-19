export const productsSwagger = {
    '/products/': {
        get: {
            tags: ['Products'],
            summary: 'Retrieve a list of products',
            description: 'Fetch all available products from the database.',
            operationId: 'getProducts',
            responses: {
                '200': {
                    description: 'A list of products.'
                },
                '500': {
                    description: 'Internal Server Error'
                }
            }
        },
        post: {
            tags: ['Products'],
            summary: 'Create a new product',
            description: 'Add a new product to the system.',
            operationId: 'postProducts',
            responses: {
                '201': {
                    description: 'Product created successfully'
                },
                '400': {
                    description: 'Bad Request'
                },
                '500': {
                    description: 'Internal Server Error'
                }
            }
        }
    }
};
