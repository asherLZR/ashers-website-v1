const express = require("express");
const path = require('path');
const history = require("connect-history-api-fallback");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname + '/dist/')));
app.use(history({
	index: "das.html"
}));
app.get(/.*/, function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port);
