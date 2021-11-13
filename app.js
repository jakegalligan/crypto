const { sign } = require("./sign");
const { verify } = require("./verify");
const { Wallet } = require("./Wallet");

const bob = Wallet.create();
const alice = Wallet.create();

// Case #1: Order that has a valid signature:
const orderOne = 'send ten dollars from bob to alice';
const orderOneIssuer = bob.publicKey;
const orderOneSignature = sign(orderOne, orderOneIssuer, bob.privateKey);

// Case #2: Order that has a fraud signature from another person:
const orderTwo = 'send thousand bucks from bob to alice';
const orderTwoIssuer = bob.publicKey;
const orderTwoSignature = sign(orderTwo, orderOneIssuer, alice.privateKey);

console.log('Order #1 status:', verify(orderOne, orderOneIssuer, orderOneSignature));
console.log('Order #2 status:', verify(orderTwo, orderTwoIssuer, orderTwoSignature));
