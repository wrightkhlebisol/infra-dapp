/*##########################
##     CONFIGURATION      ##
##########################*/

//  -- Step 1: Set up the appropriate configuration
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving address
let sendingAddress = "0x739927A37ed86dBb54Bc6E00e8bDc7eaF6FfAcb3";
let receivingAddress = "0xC7C279dED5DbA928dcB02A3D959864Be16811dd6";

// -- Step 3: Check the balance of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// /*##########################
// ##  CREATE A TRANSACTION  ##
// ##########################*/

// // -- Step 4: Set up the transaction
// let rawTransacion = {

// }