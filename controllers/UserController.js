const crypto = require('crypto')
const Users = require("../models/UserModal");

const handleLoginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    
    if (!user) return res.status(404).json({ error: "user not exist" });

    const salt = user._doc.salt
    const userHashPassword = crypto.pbkdf2Sync( password, salt, 10000, 64, 'sha512').toString('hex')
    const originalPassword = user._doc.password

    // console.log(userHashPassword, originalPassword, password, email, user._doc.email)

    if(userHashPassword !== originalPassword || user._doc.email !== email) return res.status(404).json({ error: 'invalid email or password'})
    await Users.findOneAndUpdate({ email }, { login: true})
    const payload = {
        ...user._doc,
        salt: null,
        password: null
    }
    return res.status(200).json(payload);
};

const handleRegisterUser = async (req, res) => {
    const {
        role,
        user_name,
        email,
        password,
        phone_number,
        area,
        street,
        city,
        state,
        country,
    } = req.body;

    
    if(!user_name || !email || !password) return res.status(500).json({ error: 'blank'})

    const salt = crypto.randomBytes(16).toString('hex')

    await crypto.pbkdf2( password, salt, 10000, 64, 'sha512', async (err, derivedKey) => {

        if(err) return res.status(500).json({err: 'internal error'})
        const hashPassword = derivedKey.toString('hex')
        
        const user = await Users.create({
            role,
            user_name,
            email,
            salt,
            password: hashPassword,
            phone_number,
            area,
            street,
            city,
            state,
            country,
        });
        return res.status(200).json(user);
    })
};

module.exports = {
    handleRegisterUser,
    handleLoginUser
};
