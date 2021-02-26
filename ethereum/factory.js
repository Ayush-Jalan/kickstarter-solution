import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x027bE4E1Be3fd8c70a63b1d26F437A38bB12E4d8'
);

export default instance;
