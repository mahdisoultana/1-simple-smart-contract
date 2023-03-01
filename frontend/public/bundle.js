const contractABI = [];
const simpleSmartContractAddress = '0xDbF9ffec90d79ECac189Ba2e08bCf2CdE7cF57f7';

const web3 = new Web3('http://127.0.0.1:9545');
const simpleSmartContract = new web3.eth.Contract(
  contractABI,
  simpleSmartContractAddress,
);
console.log(simpleSmartContract);
web3.eth.getAccounts().then(console.log);
