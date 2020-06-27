let web3 = require('web3');

let infuraUrl = "https://127.0.0.1:8545";
let walletAddress = "0xcC5f5adCD9984ba32e41E870dEF8d9d761b0b988";
let infuraConnect = new web3(infuraUrl);

console.log(infuraConnect.eth);

// infuraConnect.eth.getBalance(walletAddress).then(console.log);