import { IRoute } from "@/types";
import { LogsController } from "../../controllers";

const logRoutes: IRoute[] = [
  // 日志系列
  { method: 'get', path: '/logs', fn: LogsController.getList, authRequired: true, },
  { method: 'get', path: '/logs/visit-data', fn: LogsController.visitData, authRequired: true, },
]

export default logRoutes;