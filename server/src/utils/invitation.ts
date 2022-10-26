import { v4 as UUID } from 'uuid';
import { InvitationModel } from '../db/models';

export async function genInvitationCode(t: number = 1) {
  const codes = [];

  for (let i = 0; i < t; i++) {
    codes.push({code: UUID()});
  }

  try {
    await InvitationModel.bulkCreate(codes);
    return codes;
  } catch(err) {
    throw new Error(err);
  }
}