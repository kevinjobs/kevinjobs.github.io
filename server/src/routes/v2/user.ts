import { IRoute } from "../../types";

import { UserController } from "../../controllers";

const authRoutes: IRoute[] = [
  { method: 'get', path: '/users', fn: UserController.getList, authRequired: true, },
  { method: 'delete', path: '/user', fn: UserController.delete, authRequired: true, },
  { method: 'put', path: '/user', fn: UserController.put, authRequired: true,},
]

export default authRoutes;