/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-06-05 20:50:48
 * @LastEditTime : 2022-06-05 21:33:46
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \submitter\test\test.spec.js
 * @Description  : 
 */
const request = require('supertest');
const expect = require('expect.js');

const app = require('../src/server/app');

describe('/items', function() {
  it('POST /items/all', function(done) {
    request(app)
      .post('/items/all')
      .expect('content-type', /json/)
      .expect(200, done)
      .expect(function(res) {
        // console.log(res.body);
        expect(res.body.code).to.be(0);
        expect(res.body.msg).to.be('get success');
        expect(res.body.msgCN).to.be('获取成功');
        expect(res.body.data).to.be.an('array');
      })
  })

  it('POST /items/not-expires', function(done) {
    request(app)
      .post('/items/not-expires')
      .expect('content-type', /json/)
      .expect(200, done)
      .expect(function(res) {
        expect(res.body.code).to.be(0);
        expect(res.body.msg).to.be('get success');
        expect(res.body.msgCN).to.be('获取成功');
        expect(res.body.data).to.be.an('array');
      })
  })
})

describe('/item', function() {
  it('POST /item', function(done) {
    request(app)
      .post('/item')
      .send({projectName: 'test', expiration: '2022-09-08', formatter: 'test.docx'})
      .expect(200, done)
      .expect(function(res) {
        expect(res.body.code).to.be(0);
        expect(res.body.msg).to.be('add success');
        expect(res.body.msgCN).to.be('添加成功');
      })
  })

  it('POST /item/del', function(done) {
    request(app)
      .post('/item/del')
      .send({projectName: 'test'})
      .expect(200, done)
      .expect(function(res) {
        expect(res.body.code).to.be(0);
        expect(res.body.msg).to.be('delete success');
        expect(res.body.msgCN).to.be('删除成功');
      })
  })

})
