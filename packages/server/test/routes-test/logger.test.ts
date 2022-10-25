/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-18 14:27:29
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\test\routes-test\logger.test.ts
 * @Description  : 
 */
import app from '../../src';
import request from 'supertest';
import { token } from './auth.test';
import dayjs from 'dayjs';

describe('#Logger', () => {
  const datetime = dayjs().format('YYYY-MM-DD');

  it(`#test GET /v2/logs?datetime=${datetime}`, async () => {
    await request(app)
      .get(`/v2/logs`)
      .query({datetime})
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .expect(200)
  })

  it(`#test GET /v2/logs/visit-data?dates=[xxx, xxx]`, async () => {
    const fmt = 'YYYY-MM-DD';
    const dates = JSON.stringify([
      dayjs().subtract(1, 'day').format(fmt),
      dayjs().subtract(2, 'day').format(fmt),
      dayjs().subtract(3, 'day').format(fmt),
      dayjs().subtract(4, 'day').format(fmt),
      dayjs().subtract(5, 'day').format(fmt),
    ]);

    await request(app)
      .get(`/v2/logs/visit-data`)
      .query({dates})
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .expect(200)
  })
})