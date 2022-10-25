/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-18 14:27:14
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\test\routes-test\auth.test.ts
 * @Description  : 
 */
import app from '../../src';
import request from 'supertest';
import { expect } from 'chai';
import { InvitationModel } from '../../src/db/models';
import { v4 as UUIDV4 } from 'uuid';

let token: string;

describe('#Auth', () => {
  let uid: string;
  const code = UUIDV4();

  (async () => await InvitationModel.create({code}))();

  const user = {
    "name": "kevinjobs" + new Date().valueOf(),
    "password": "june1995",
    "role": 0,
    "invitation": code
  };
  
  // 注册用户
  it('#test POST /v2/register', async () => {
    await request(app)
      .post('/v2/register')
      .set('content-type', 'application/json')
      .send(user)
      .expect(200)
      .expect(res => {
        const resp = JSON.parse(res.text);
        uid = resp.data.uid;
      })
  })
  
  // 登陆
  it('#test POST /v2/token', async () => {
    await request(app)
    .post('/v2/token')
    .set('content-type', 'application/json')
    .send(user)
    .expect(200)
    .expect(res => {
      const resp = JSON.parse(res.text);
      expect(resp.data).to.be.a('string');
      token = resp.data;
    });
  })

  it('#test GET /v2/users', async () => {
    await request(app)
      .get('/v2/users')
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
  })

  it(`#test PUT /v2/user?uid=xxx`, async () => {
    await request(app)
      .put('/v2/user')
      .query({uid: uid})
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({...user, motto: 'update test'})
      .expect(200)
  })

  it(`#test DEL /v2/user?uid=xxx`, async () => {
    await request(app)
      .delete('/v2/user')
      .query({uid: uid})
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
  })
})

export {token};