const express = require('express')
const app = express()

const exec = require('child_process').exec;

function shutdown(callback){
    exec('sudo shutdown -r now', function(error, stdout, stderr){ 
			console.log('error ',  error);
			console.log('stdout: ', stdout);
			console.log('stderr: ', stderr);
			callback(stdout); });
};

app.get('/shutdown', function (req, res) {
	console.log('node shutdown');
	shutdown();
});

app.use('/', express.static(__dirname));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})