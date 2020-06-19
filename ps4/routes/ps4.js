// A route using the POST method that retrieves data from an external API
const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/weatherMapAPI');

router.route('/current')
    .get(async (req, res, next) => {
            let result = await fetch(CONFIG.url + '?q=california&appid=' + CONFIG.key);
            let weather = await result.json()
            res.render('weatherTemplate', {title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp, temp_max: weather.main.temp_max});
            //res.render('weatherTemplate', {city: weather.name, temp_max: weather.main.temp_max});
            //res.send({temp_max: weather.main.temp_max})
            //res.send({title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp});
    })
     .post(async (req, res, next) => {

         let result = await fetch(CONFIG.url + '?q=' + req.body.city + '&units=metric&appid=' + CONFIG.key);
         let weather = await result.json()
         res.render('ps4', {title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp});
     })

module.exports = router;

// Post-Man Generated API GET Information
//var request = require('request');
//var options = {
//    'method': 'GET',
//    'url': CONFIG.url + '?q=california&appid=7b48eab29907a73f709e5206331ccc16' + CONFIG.key,
//    'headers': {
//    }
//};
//request(options, function (error, response) {
//    if (error) throw new Error(error);
//    console.log(response.body);
//});










