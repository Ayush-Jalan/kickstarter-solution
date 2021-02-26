'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in browser and ,etamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are on server or user not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/c60ec9840fc642d5b25db6bd58839db6');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUE7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXVFLEFBQ3JFO0FBQ0E7U0FBTSxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBTixBQUVEO0FBSkQsT0FJTSxBQUNKO0FBQ0E7TUFBTSxXQUFVLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZCxBQURjLEFBQWhCLEFBR0E7U0FBSyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFMLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RlbGwvRGVza3RvcC9ldGhlcnVtL2tpY2tzdGFydGVyIn0=