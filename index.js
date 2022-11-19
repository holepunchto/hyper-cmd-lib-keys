const sodium = require('sodium-universal')

function parseKeyPair (k) {
  const kp = JSON.parse(k)
  return {
    secretKey: Buffer.from(kp.secretKey, 'hex'),
    publicKey: Buffer.from(kp.publicKey, 'hex')
  }
}

function randomBytes (n) {
  const b = Buffer.alloc(n)
  sodium.randombytes_buf(b)
  return b
}

module.exports = {
  randomBytes: randomBytes,
  parseKeyPair: parseKeyPair
}
