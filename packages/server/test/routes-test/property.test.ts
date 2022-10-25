import app from '../../src';
import request from 'supertest';
import { expect } from 'chai';
import { token } from './auth.test';

describe('#Property', async () => {
  let uid: string;
  const property = {
    platform: "icbc",
    totalAmount: 98234.09,
    currency: "rmb",
    children: String([
      {
        project: "save",
        amount: 80000.00,
      }
    ])
  }

  // 添加一篇文章
  it('#test POST /v2/property', async () => {
    await request(app)
      .post('/v2/property')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send(property)
      .expect(200)
      .expect(res => {
        const resp = JSON.parse(res.text);
        expect(resp.code).equal(1);
        uid = resp.data.uid;
      })
  })

  // 获取文章列表
  it('#test GET /v2/properties', async () => {
    await request(app)
      .get('/v2/properties')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('content-type', /json/)
      .expect(res => {
        const resp = JSON.parse(res.text);
        expect(resp.code).equal(1);
      })
  })

  it('#test PUT /v2/property?uid=xxx', async () => {
    await request(app)
      .put('/v2/property')
      .query({uid: uid})
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send({...property, content: '<p>update test article</p>'})
      .expect(200)
  })

  it('#test GET /v2/property?uid=xxx', async () => {
    await request(app)
      .get('/v2/property')
      .set('Authorization', `Bearer ${token}`)
      .query({uid: uid})
      .expect(200)

    await request(app)
      .get('/v2/property')
      .set('Authorization', `Bearer ${token}`)
      .query({uid: 'dfad-dare-dafa93949-33e'})
      .expect(500)
  })

  it('#test DEL /v2/property?uid=xxx', async () => {
    await request(app)
      .delete('/v2/property')
      .set('Authorization', `Bearer ${token}`)
      .query({uid: uid})
      .expect(200)
  })
})