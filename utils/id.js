const crypto = require('crypto')

function randomId(){
    return crypto.randomBytes(16).toString('hex')
}

module.exports = {
    randomId
}