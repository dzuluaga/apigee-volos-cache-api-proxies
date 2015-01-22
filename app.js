var cm = require('volos-cache-memory');
var cache = cm.create('name', { ttl: 1000 }); // specifies default ttl as 1000 ms
cache.set('key', 'value', function(error){
	console.log(error)
	cache.get('key', function(error, cachedValue){
		console.log(cachedValue.toString());
		//console.log(error)
	});
});
//cache.set('hola', 'hola value');
// cache.get('invalidKey', function(error, cachedValue){
// 	console.log(error); //returns undefined regardless cache key is defined or not
// 	//console.log(cachedValue.toString())
// });