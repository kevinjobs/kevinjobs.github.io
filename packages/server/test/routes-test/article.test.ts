/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-09 22:31:37
 * @LastEditTime : 2022-03-18 16:15:19
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\test\routes-test\article.test.ts
 * @Description  : 
 */
import app from '../../src';
import request from 'supertest';
import { expect } from 'chai';
import { token } from './auth.test';

describe('#Article', async () => {
  let uid: string;
  const article = {
    title: 'test article',
    author: 'test user',
    publish: 'public',
    tags: 'test',
    cover: 'https://test.com',
    content: '<p>test article</p>',
    extension: 'html',
    excerpt: 'test article',
  }

  // 添加一篇文章
  it('#test POST /v2/article', async () => {
    await request(app)
      .post('/v2/article')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send(article)
      .expect(200)
      .expect(res => {
        const resp = JSON.parse(res.text);
        expect(resp.code).equal(1);
        uid = resp.data.uid;
      })
  })

  // 获取文章列表
  it('#test GET /v2/articles', async () => {
    await request(app)
      .get('/v2/articles')
      .expect(200)
      .expect('content-type', /json/)
      .expect(res => {
        const resp = JSON.parse(res.text);
        expect(resp.code).equal(1);
      })
  })

  it('#test PUT /v2/article?uid=xxx', async () => {
    await request(app)
      .put('/v2/article')
      .query({uid: uid})
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send({...article, content: '<p>update test article</p>'})
      .expect(200)
  })

  it('#test GET /v2/article?uid=xxx', async () => {
    await request(app)
      .get('/v2/article')
      .query({uid: uid})
      .expect(200)

    await request(app)
      .get('/v2/article')
      .query({uid: 'dfad-dare-dafa93949-33e'})
      .expect(500)
  })

  it('#test DEL /v2/article?uid=xxx', async () => {
    await request(app)
      .delete('/v2/article')
      .set('Authorization', `Bearer ${token}`)
      .query({uid: uid})
      .expect(200)
  })
})