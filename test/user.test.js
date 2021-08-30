/* eslint-disable no-undef */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');

describe('api/convert', () => {
  describe('POST /', () => {
    it('arabic in body params is valid', async () => {
      const res = await request(app)
        .post('/api/convert')
        .send({
          roman: 'XX',
        });
      const data = res.body;
      expect(res.status).to.equal(200);
      expect(data).to.have.property('arabic');
    });

    it('resul is valid', async () => {
      const res = await request(app)
        .post('/api/convert')
        .send({
          roman: 'XX',
        });
      const data = res.body;
      expect(res.status).to.equal(200);
      expect(data.arabic).to.equal(20);
    });
  });
});
