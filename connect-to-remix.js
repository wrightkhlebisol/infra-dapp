let Web3 = require('web3');

let web3 = new Web3('http://127.0.0.1:7545');

web3.eth.getTransactionCount('0x1A6190a491a1152E71a3D5eC6DED148e90EB97cE').then(console.log);