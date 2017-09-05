

const express = require('express');
const routes = require('./routes/index');
var port = process.env.PORT || 3000;
var app = express();
app.use('/static', express.static(process.cwd() + '/static'));
app.set('view_engine', 'ejs');

routes(app);
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});