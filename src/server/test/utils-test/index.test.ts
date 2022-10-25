/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-18 16:11:18
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\test\utils-test\index.test.ts
 * @Description  : 
 */
import { encrypt, genInvitationCode, ApiError } from '../../src/utils';
import { expect } from 'chai';
import validator from 'validator';

describe('#Utils', () => {
  it('#test encrypt', () => {
    const hex = encrypt('hello');
    expect(hex).to.be.a('string');
    expect(validator.isHexadecimal(hex)).to.be.true;
  })

  it('#test genInvitationCode', async () => {
    const codes = await genInvitationCode(5);
    expect(codes).to.be.an('array');
    expect(codes).to.has.length(5);
  })

  it('#test ApiError', () => {
    function fn() {
      throw new ApiError(404, '');
    }
    expect(fn).to.throw();
  })
})
