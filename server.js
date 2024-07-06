const crypto=require('crypto');
const hash=crypto.createHash('sha256');
hash.update('teja2003')
console.log(hash.digest('hex'));