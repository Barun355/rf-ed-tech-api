const jwt = require('jsonwebtoken')

const JWT_KEY = 'asdfASDFasdfL:JKAasdfasKL2423431)(__+:{":hhgYIuYHK45/*-++5410/:"{PIOJHT$8ghjjhvbbnk78808896fuy677ighbj}{":?><Mbnvbkyhfgio|+=878y7bb$34&inn(&%()_*()*(&^$7jhb&HBNI(*&hn(7878oj*(&*()(JI()&h9789jk*()()JM(&()-08908670=-=_&*%(^$*'

function getToken(payload){
    return jwt.sign(payload, JWT_KEY)
}

function verifyToken(token){
    return jwt.verify(token, JWT_KEY)
}

module.exports = {
    getToken,
    verifyToken
}