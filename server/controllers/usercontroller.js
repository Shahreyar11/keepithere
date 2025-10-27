const User = require('../models/user')

async function handleSignUp(req, res){
    try{
        console.log('Data received on backend: ', req.body);
        const {username, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = await User.create({
            username: username,
            email: email,
            password: password,
        });
        res.status(201).json({
            message: 'User Created Successfully',
            user: newUser,
        });
    }
    catch(error){
        res.status(500).json({message: 'Error Creating User', error: error.message})
    }
};

module.exports = {
    handleSignUp
};