const SimpleSmartContract = artifacts.require('SimpleSmartContract');

contract('SimpleSmartContract', () => {
  it('SimpleSmartContract Should Be Deployed', async () => {
    const simpleSmartContract = await SimpleSmartContract.deployed();

    assert(simpleSmartContract.address !== '');
  });
});
