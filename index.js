let web3 = require('web3');

let infuraUrl = "https://ropsten.infura.io/v3/304ed06f11c348e2b05c1dbc9e6a2c38";
let walletAddress = "0x635B4764D1939DfAcD3a8014726159abC277BecC";
let infuraConnect = new web3(infuraUrl);

infuraConnect.eth.getBalance(walletAddress).then(console.log);