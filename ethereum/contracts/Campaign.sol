pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint mc )public{
        address newCampaign= new Campaign(mc,msg.sender);
        deployedCampaigns.push(newCampaign);

    }

    function getDeployedCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}


contract Campaign{

    address public manager ;
    uint public minimumContribution;
    mapping(address=>bool) public approvers;
    Request[] public requests;
    uint public approversCount;

    struct Request{
        string description;
        uint amount;
        address recepient;
        bool complete;
        mapping(address=>bool) approvals;
        uint approvalCount;
    }

    modifier restricted{
        require(msg.sender==manager);
        _;
    }

    function Campaign(uint mc, address _manager) public{
        manager=_manager;
        minimumContribution=mc;
    }

    function contribute() public payable{
        require(msg.value>minimumContribution);
        approvers[msg.sender]= true;
        approversCount++;
    }

    function createRequest(string _description, uint _amount,address _recepient )public restricted{
        Request memory newRequest=Request({
            description: _description,
            amount: _amount,
            recepient: _recepient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);

    }

    function approveRequest(uint index)public {
        require(approvers[msg.sender]==true);
        require(!requests[index].approvals[msg.sender]==true);

        requests[index].approvalCount++;
        requests[index].approvals[msg.sender]=true;

    }

    function finalizeRequest(uint index)public restricted{
        require(!requests[index].complete);
        require(requests[index].approvalCount>(approversCount/2));

        requests[index].complete=true;
        requests[index].recepient.transfer(requests[index].amount);
    }


    function getSummary() public view returns(
      uint,uint,uint,uint,address
      ){
      return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint){
      return requests.length;
    }
}
