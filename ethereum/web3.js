import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider);

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //we are in browser and ,etamask is running
  web3= new Web3(window.web3.currentProvider);

} else{
  //we are on server or user not running metamask
  const provider= new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/c60ec9840fc642d5b25db6bd58839db6'
  );
  web3=new Web3(provider);
}

export default web3;
