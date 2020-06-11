// Demonstrating GET and POST Method by outputting a string
const express = require('express');
const router = express.Router();

router.route('/exercise')  //these will be on localhost:3000/users/exercise
    .get((req, res, next) => {
        //console.table(`In exercise ${req.query}`);
        //res.send(`This was a GET: ${req.query.message}`);
        res.render('testExercise')
    })
    .post((req, res, next) => {
        console.log(`In exercise: (POST)`)
        res.send(`This was a POST, firstName = ${req.body.firstName}`);
        res.render('testExercise')
    })


module.exports = router;