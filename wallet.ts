class Wallet {
    constructor(options={}) {
        Object.assign(this, {
            publicKey: null, privateKey: null,
        }, options);
    }

    static getNodePrivateKey(user, key) {
        const t = '308184020100301006072a8648ce3d020106052b8104000a046d306b0201010420';
        const k = Buffer.from(t + user + 'a144034200' + key, 'hex').toString('base64');
        return `-----BEGIN PRIVATE KEY-----\n${k}\n-----END PRIVATE KEY-----`;
    }

    static getNodePublicKey(user){
        const t = '3056301006072a8648ce3d020106052b8104000a034200';
        const k = Buffer.from(t + user,  'hex').toString('base64');
        return `-----BEGIN PUBLIC KEY-----\n${k}\n-----END PUBLIC KEY-----`;
    }
}