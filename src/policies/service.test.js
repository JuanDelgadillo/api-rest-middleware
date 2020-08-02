const { expect } = require('chai');
const { describe, afterEach, it } = require('mocha');
const { insuranceApiEndpoint } = require('../consts');
const rewire = require('rewire');
const PoliciesService = rewire('./service');
const sinon = require('sinon');

const policies = [
  {
    id: '64cceef9-3a01-49ae-a23b-3761b604800b',
    amountInsured: '1825.89',
    email: 'inesblankenship@quotezart.com',
    inceptionDate: '2016-06-01T03:33:32Z',
    installmentPayment: true,
    clientId: 'a0ece5db-cd14-4f21-812f-966633e7be86',
  },
  {
    id: '7b624ed3-00d5-4c1b-9ab8-c265067ef58b',
    amountInsured: '399.89',
    email: 'inesblankenship@quotezart.com',
    inceptionDate: '2015-07-06T06:55:49Z',
    installmentPayment: true,
    clientId: 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb',
  },
];

describe.skip("Policies' service", () => {
  afterEach(() => {
    sinon.restore();
  });

  // Unit test
  describe('getPolicyById - Unit test', () => {
    it('should return a policy by its ID', async () => {
      const fakeGetPolicies = sinon.fake.resolves(policies);
      const revertPoliciesService = PoliciesService.__set__(
        'getPolicies',
        fakeGetPolicies
      );

      const policyId = '7b624ed3-00d5-4c1b-9ab8-c265067ef58b';
      const expectedPolicy = policies.filter(
        (policy) => policy.id === policyId
      );
      const req = {};
      const policy = await PoliciesService.getPolicyById(req, policyId);

      expect(policy[0]).to.equal(expectedPolicy[0]);
      expect(policy[0]).not.to.have.property('clientId');
      expect(fakeGetPolicies.calledOnce).to.be.true;
      expect(fakeGetPolicies.calledWithExactly(req)).to.be.true;
      revertPoliciesService();
    });
  });

  // Integration test
  describe('getPolicyById - Integration test', () => {
    it('should return a policy by its ID', async () => {
      const fakeAxios = {
        get: sinon.fake.resolves({ data: policies }),
      };
      const revertPoliciesService = PoliciesService.__set__('axios', fakeAxios);

      const policyId = '64cceef9-3a01-49ae-a23b-3761b604800b';
      const expectedPolicy = policies.filter(
        (policy) => policy.id === policyId
      );
      const req = {
        headers: {
          authorization: 'you-know-the-token',
        },
      };
      const policy = await PoliciesService.getPolicyById(req, policyId);

      expect(policy[0]).to.equal(expectedPolicy[0]);
      expect(policy[0]).not.to.have.property('clientId');
      expect(fakeAxios.get.calledOnce).to.be.true;
      expect(fakeAxios.get.args[0].length).to.equal(2);
      expect(
        fakeAxios.get.calledWithExactly(`${insuranceApiEndpoint}/policies`, {
          headers: req.headers,
        })
      ).to.be.true;
      revertPoliciesService();
    });
  });
});
