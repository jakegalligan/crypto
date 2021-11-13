const { Wallet } = require('./Wallet');
const { createVerify} = require('crypto');

const verify = (data, publicKey, signature) => {
    const cert = Wallet.getNodePublicKey(publicKey);
    return createVerify('SHA256').update(data).verify(cert, signature, 'hex');
}

module.exports.verify = verify;