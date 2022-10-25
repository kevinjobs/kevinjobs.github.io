/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-18 15:51:47
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\utils\invitation.ts
 * @Description  : 
 */
import { v4 as UUIDV4 } from 'uuid';
import { InvitationModel } from '../db/models';

export async function genInvitationCode(t: number = 1) {
  const codes = [];

  for (let i = 0; i < t; i++) {
    codes.push({code: UUIDV4()});
  }

  try {
    await InvitationModel.bulkCreate(codes);
    return codes;
  } catch(err) {
    throw new Error(err);
  }
}