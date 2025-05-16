const express = require('express');

const app = express();

app.post('/user/signup', function(req, res) {
    res.json({
        msg : "signup"
    })
})

app.post('/user/signin', function(req, res) {
    res.json({
        msg : "signin"
    })
})

app.get('/user/courses', function(req, res) {
    res.json({
        msg : "Purchaed course"
    })
})

app.get('/courses', function(req, res) {
    res.json({
        msg : "All courses"
    })
})

app.post('/course/purchase', function(req, res) {
    res.json({
        msg : "Buy a course"
    })
})


app.listen(3000);