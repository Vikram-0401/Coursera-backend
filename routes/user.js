const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup', function(req, res) {
    res.json({
        msg: "signup"
    });
});

userRouter.post('/signin', function(req, res) {
    res.json({
        msg: "signin"
    });
});

userRouter.get('/courses', function(req, res) {
    res.json({
        msg: "Purchased course"
    });
});

module.exports = {
    userRouter: userRouter
}