const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3= require('web3');
const compiledFactory= require('./build/CampaignFactory.json');

const provider= new HDWalletProvider('magic gather stay genuine jealous grape fold antenna cook fiscal magic laundry',
'https://rinkeby.infura.io/v3/c60ec9840fc642d5b25db6bd58839db6');

const web3= new Web3(provider);

const deploy=async()=>{
  const accounts=await web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);

  const result= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data:compiledFactory.bytecode})
  .send({gas:'1000000', from:accounts[0] });

  console.log('contract deployed to ', result.options.address);

};
deploy();
