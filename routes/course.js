const { Router } = require('express');
const courseRouter = Router();

courseRouter.get('/bulk', function(req, res) {
    res.json({
        msg: "All courses"
    });
});

courseRouter.post('/purchase', function(req, res) {
    res.json({
        msg: "Buy a course"
    });
});

module.exports = {
    courseRouter: courseRouter
}