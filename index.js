const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', function (req, res) {
	let result = {
		method: req.method,
		path: req.path,
		query: req.query,
		body: req.body,
		headers: req.headers
	};

	console.log(JSON.stringify(result));
	res.send(result);
})

app.listen(3000)
