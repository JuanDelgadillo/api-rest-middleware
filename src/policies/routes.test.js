const { expect } = require('chai');
const { describe, afterEach, it } = require('mocha');
const app = require('../app');
const request = require('supertest')(app);
const sinon = require('sinon');

describe("Policies' routes", () => {
  afterEach(() => {
    sinon.restore();
  });

  // End to end test
  describe('/policies', () => {
    it('should return 400 bad request when token is malformed', async () => {
      const response = await request
        .get('/policies')
        .set('Authorization', 'you-know-the-token');

      expect(response.body).to.have.property('message');
      expect(response.statusCode).to.equal(400);
    });
  });
});
