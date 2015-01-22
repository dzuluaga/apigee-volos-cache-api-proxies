//var cm = require('volos-cache-memory');
var cm = require('volos-cache-apigee');
var cache = cm.create('name', { ttl: 60000, fallback: require('volos-cache-memory') });
var express = require('express');
var app = express();

app.get('/pets', function(req, res){
  //console.log(req.query.name);
  cache.get(req.query.name, function(error, storedVal){
  	console.log(req.query.name)
  	if(!storedVal){
  		cache.set(req.query.name, req.query.name, function(error){
  			if(error){
  				res.send('error storing pet');
  			}else{
  				res.send('pet stores : ' + req.query.name);
  			}
  		});
  	} else{
  		console.log(storedVal)
  		res.send('pet with name already exists: ' + storedVal);
  	}
  });
});

console.log('Run multiple times this command. curl http://localhost:3000/pets?name=shadow');

app.listen(3000);