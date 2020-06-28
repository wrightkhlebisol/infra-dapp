/*##########################
##     CONFIGURATION      ##
##########################*/

//  -- Step 1: Set up the appropriate configuration
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx").Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving address
let sendingAddress = "0x739927A37ed86dBb54Bc6E00e8bDc7eaF6FfAcb3";
let receivingAddress = "0xC7C279dED5DbA928dcB02A3D959864Be16811dd6";

// -- Step 3: Check the balance of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

/*##########################
##  CREATE A TRANSACTION  ##
##########################*/

let strToHex = (val) => {
    return '0x' + val;
}
// -- Step 4: Set up the transaction
let rawTransaction = {
    nonce: ('0xC'),
    to: receivingAddress,
    gasPrice: strToHex('20000000'),
    gasLimit: strToHex('30000'),
    value: strToHex('10000000000000000'),
    data: strToHex(""),

}

// console.log(rawTransaction);

// const rawTransaction = {
//     nonce: '0x00',
//     gasPrice: '20000000',
//     gasLimit: '30000',
//     to: receivingAddress,
//     value: '0x00',
//     data: '',
// }

// /*##########################
// ##  Sign the transaction  ##
// ##########################*/

// // Step 5: Sign the transaction with the Hex value of the private key of the sender
let privateKeySender = "0ab0dff942dcdef8641179e201118d68006c9529e8995df9fcfaef60560bf840";
let privateKeySenderHex = Buffer.from(privateKeySender, 'hex');
// console.log(privateKeySenderHex);
let transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

// /*#########################################
// ##  Send the transaction to the network  ##
// #########################################*/

// // Step 6 : Send the serialised signed transction to the netowrk
let serialisedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serialisedTransaction);