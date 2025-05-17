const { Router } = require('express');
const { userModel } = require('../db');
const userRouter = Router();
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = 'vikram';

userRouter.post('/signup', async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        msg: "signup"
    });
});

userRouter.post('/signin', async function(req, res) {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({
        email,
        password
    })

    if(user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)
    

       res.json({
         token: token
        })
    }
    else {
        res.status(403).json({
          msg: "incorrect cred"
        })
    }

});

userRouter.get('/courses', function(req, res) {
    res.json({
        msg: "Purchased course"
    });
});

module.exports = {
    userRouter: userRouter
}