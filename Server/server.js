var connect =require('connect'),
	serveStatic=require('serve-static');

connect().(useserveStatic(__dirname)).listen(8080,
	function(){ console.log('lalal');});