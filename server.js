const express = require("express");
const path = require('path');
const history = require("connect-history-api-fallback");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname + '/dist/')));
app.use(history());
app.use(express.static(path.join(__dirname + '/dist/')));
app.get(/.*/, function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/'));
});
app.listen(port);
