/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-18 14:27:37
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\test\routes-test\picture.test.ts
 * @Description  : 
 */
import app from '../../src';
import request from 'supertest';
import { expect } from 'chai';
import { token } from './auth.test';

describe('#Picture', async () => {
  const url = '/v2/picture';
  let uid: string;
  const picture = {
    "title": "test picture",
    "author": "test user",
    "publish": "public",
    "tags": "test",
    "source": "test.jpg",
    "description": "test",
    "width": 4032,
    "height": 3024,
    "latitude": 31.977448,
    "longitude": 118.665843,
    "latitudeRef": "N",
    "longitudeRef": "E"
  }

  // 添加
  it(`#test POST ${url}`, async () => {
    await request(app)
      .post(url)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send(picture)
      .expect(200)
      .expect(res => {
        const resp = JSON.parse(res.text);
        expect(resp.code).equal(1);
        uid = resp.data.uid;
      })
  })

  // 获取列表
  it(`#test GET ${url + 's'}`, async () => {
    await request(app)
      .get(url + 's')
      .expect(200)
      .expect('content-type', /json/)
      .expect(res => {
        const resp = JSON.parse(res.text);
        expect(resp.code).equal(1);
      })
  })

  it(`#test GET ${url}?uid=xxx`, async () => {
    await request(app)
      .get(url)
      .query({uid: uid})
      .expect(200)
  })

  it(`#test PUT ${url}?uid=xxx`, async () => {
    await request(app)
      .put(url)
      .query({uid: uid})
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send({...picture, description: '<p>update test article</p>'})
      .expect(200)
  })

  it(`#test DEL ${url}?uid=xxx`, async () => {
    await request(app)
      .delete(url)
      .set('Authorization', `Bearer ${token}`)
      .query({uid: uid})
      .expect(200)
  })
})