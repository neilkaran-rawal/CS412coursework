// A route using the POST method that retrieves data from an external API
const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/weatherMapAPI');

const redis = require('redis');
const client = redis.createClient();
client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});

router.get('find/:temp',async (req, res, next) => {
    let result = await fetch(CONFIG.url + '?q=california&appid=' + CONFIG.key);
    let weather = await result.json()

    client.exists(weather.main.temp, (err, match) => {  //looks for key
        if(err) { throw new Error(err) }
        if (match) { //key exists, grab value
            client.get(weather.main.temp, (err, response) => {
                console.table(response);
                res.send(JSON.stringify(response + ' cached '))
            })

        } else {
            const reversedName = weather.main.temp.split('').reverse().join(''); //reversew the string
            client.set(weather.main.temp, reversedName, (err, response) => { //name = key, reversedName = value
                console.table(response);
                res.send(JSON.stringify(reversedName + ' not cached '))

            })
        }
    })
})

//router.route('/current')
   // .get(async (req, res, next) => {
     //       let result = await fetch(CONFIG.url + '?q=california&appid=' + CONFIG.key);
     //       let weather = await result.json()
            //res.render('weatherTemplate', {title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp, temp_max: weather.main.temp_max});
            //res.render('weatherTemplate', {city: weather.name, temp_max: weather.main.temp_max});
            //res.send({temp_max: weather.main.temp_max})
            //res.send({title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp});
//    })
   //  .post(async (req, res, next) => {

  //      let result = await fetch(CONFIG.url + '?q=' + req.body.city + '&units=metric&appid=' + CONFIG.key);
   //      let weather = await result.json()
    //     res.render('ps4', {title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp});
   //  })

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










