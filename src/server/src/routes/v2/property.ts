import { PropertyController } from '../../controllers';

import { IRoute } from '@/types';

const propertyRoutes: IRoute[] = [
  // 文章系列
  { method: 'get', path: '/properties', fn: PropertyController.getList, authRequired: true,  },
  { method: 'get', path: '/property', fn: PropertyController.get, authRequired: true, },
  { method: 'post', path: '/property', fn: PropertyController.post, authRequired: true, },
  { method: 'put', path: '/property', fn: PropertyController.put, authRequired: true, },
  { method: 'delete', path: '/property', fn: PropertyController.delete, authRequired: true, },
]

export default propertyRoutes;