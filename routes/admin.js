const { Router } = require('express');
const adminRouter = Router();

adminRouter.post('/signup', function(req, res) {
    res.json({
        msg: "signup"
    });
});

adminRouter.post('/signin', function(req, res) {
    res.json({
        msg: "signin"
    });
});


adminRouter.post('/course', function(req, res) {
    res.json({
        msg: "Create a course"
    });
});


adminRouter.put('/course', function(req, res) {
    res.json({
        msg: "Update a course"
    });
});


adminRouter.get('/bulk', function(req, res) {
    res.json({
        msg: "get all course"
    });
});

module.exports = {
    adminRouter : adminRouter
}