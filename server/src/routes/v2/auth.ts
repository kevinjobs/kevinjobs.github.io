import { IRoute } from '../../types';
import * as validation from '../../validations';
import { AuthController } from '../../controllers';

const authRoutes: IRoute[] = [
    {
        method: 'post',
        path: '/token',
        fn: AuthController.token,
        authRequired: false,
    },
    {
        method: 'post',
        path: '/register',
        fn: AuthController.register,
        authRequired: false,
        validation: validation.register,
    },
];

export default authRoutes;