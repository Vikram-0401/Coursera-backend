const { Router } = require('express');
const { adminModel } = require('../db');
const adminRouter = Router();
const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD = 'shetty';

adminRouter.post('/signup', async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        msg: "signup"
    });
});

adminRouter.post('/signin', async function(req, res) {
    const { email, password } = req.body;
    
    const admin = await adminModel.findOne({
        email,
        password
    })

    if(admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD)
    

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