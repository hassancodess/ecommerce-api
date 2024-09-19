export const UsersSwagger = {
    '/users/': {
        get: {
            tags: ['Users'],
            summary: 'Retrieve a list of users',
            description: 'Fetch all the users from the database.',
            operationId: 'getUsers',
            responses: {
                '200': {
                    description: 'A list of users.'
                },
                '500': {
                    description: 'Internal Server Error'
                }
            }
        },
        post: {
            tags: ['Users'],
            summary: 'Create a new user',
            description: 'Add a new user to the system.',
            operationId: 'postUsers',
            responses: {
                '201': {
                    description: 'User created successfully'
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
