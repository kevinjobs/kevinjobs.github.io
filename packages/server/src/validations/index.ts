const register = {
    body: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                minLength: 3,
                maxLength: 32,
            },
            password: {
                type: 'string',
                minLength: 8,
                maxLength: 20,
            },
            role: {
                type: 'integer',
                enum: [0, 1, 2, 3],
            },
            invitation: {
                type: 'string',
                minLength: 36,
                maxLength: 36,
            }
        },
        required: ['name', 'password', 'role', 'invitation']
    }
};

export {
    register,
};
