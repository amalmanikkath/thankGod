var express = require('express');
var router = express.Router();
var https = require('https');

router.get('/v1/shares/price', function(request, response){
  response.setHeader('Content-Type','application/json');
  //https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json
  var options = {
    host : 'www.nseindia.com',
    port : 443,
    method : 'GET',
    path : '/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json',
    headers : {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language' : 'en-US,en;q=0.8',
        'Upgrade-Insecure-Requests' : '1',
        'User-Agent' : 'Mozilla/5.0'
    }
  };

//
// Accept-Encoding:gzip, deflate, sdch, br
// Accept-Language:en-US,en;q=0.8
// Cache-Control:max-age=0
// Connection:keep-alive
// Host:www.nseindia.com
// Upgrade-Insecure-Requests:1
// User-Agent:Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30


  var req = https.request(options, function(res) {
    //      res.setEncoding('utf-8');
      var responseString = '';
     res.on('data', function(data) {
        console.log('data obtained ['+ data + ']');
          responseString += data;
      });

      res.on('end', function() {
        console.log('printing within end ')
        //console.log(responseString);
        //var responseObject = JSON.parse(responseString);
        response.status(200).send(responseString);
      });
  });
  req.write('test');
  req.end();
  req.on('error', function(err){
    console.log('printing err ['+ JSON.stringify(err) + ']');
    response.status(500).send(err);
  });
});



/* *******************************************************next call***************************************************************** */

router.get('/v1/shares/juniorNiftyStockWatch', function(request, response){
  response.setHeader('Content-Type','application/json');
  //https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/juniorNiftyStockWatch.json
  var options = {
    host : 'www.nseindia.com',
    port : 443,
    method : 'GET',
    path : '/live_market/dynaContent/live_watch/stock_watch/juniorNiftyStockWatch.json',
    headers : {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language' : 'en-US,en;q=0.8',
        'Upgrade-Insecure-Requests' : '1',
        'User-Agent' : 'Mozilla/5.0'
    }
  };


  var req = https.request(options, function(res) {
    //      res.setEncoding('utf-8');
      var responseString = '';
     res.on('data', function(data) {
        console.log('data obtained ['+ data + ']');
          responseString += data;
      });

      res.on('end', function() {
        console.log('printing within end ')
        //console.log(responseString);
        //var responseObject = JSON.parse(responseString);
        response.status(200).send(responseString);
      });
  });
  req.write('test');
  req.end();
  req.on('error', function(err){
    console.log('printing err ['+ JSON.stringify(err) + ']');
    response.status(500).send(err);
  });
});


/* *******************************************************next call***************************************************************** */

router.get('/v1/shares/niftyMidcap50StockWatch', function(request, response){
  response.setHeader('Content-Type','application/json');
  //https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyMidcap50StockWatch.json
  var options = {
    host : 'www.nseindia.com',
    port : 443,
    method : 'GET',
    path : '/live_market/dynaContent/live_watch/stock_watch/niftyMidcap50StockWatch.json',
    headers : {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language' : 'en-US,en;q=0.8',
        'Upgrade-Insecure-Requests' : '1',
        'User-Agent' : 'Mozilla/5.0'
    }
  };


  var req = https.request(options, function(res) {
    //      res.setEncoding('utf-8');
      var responseString = '';
     res.on('data', function(data) {
        console.log('data obtained ['+ data + ']');
          responseString += data;
      });

      res.on('end', function() {
        console.log('printing within end ')
        //console.log(responseString);
        //var responseObject = JSON.parse(responseString);
        response.status(200).send(responseString);
      });
  });
  req.write('test');
  req.end();
  req.on('error', function(err){
    console.log('printing err ['+ JSON.stringify(err) + ']');
    response.status(500).send(err);
  });
});

module.exports = router;