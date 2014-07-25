var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




var session = require('express-session');
var RedisStore = require('connect-redis')(session);
//var VelaStore = require('./tt_modules/penton-connect-vela')(session);

var redis = require('redis');
var options = {client: redis.createClient(null, null, {detect_buffers: true})}; //session.MemoryStore

app.use(session({secret: 'keyboard cat', store: new RedisStore(options)}));




app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/users', users);

var raven = require('raven');

app.use(raven.middleware.express(
    'https://9c499c71e92d438cb973f753f9e29156:f5089c54c7944d509045a0843b3262a1@app.getsentry.com/15563'
));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    'use strict';
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//app.configure('development', function(){
//    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
//});
//
//app.configure('production', function(){
//    app.use(express.errorHandler());
//});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        'use strict';
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    'use strict';
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
