
app = module.exports = require('express')();
express = require('express');
const PORT = 3000;
bodyparser = require('body-parser');

server  = require('http').createServer(app);
router = require('./routes/')(app);

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
