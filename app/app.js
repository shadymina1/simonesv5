var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session'); // to use session  === session stuff

var contactRouter = require('./routes/contact');
var enrollRouter = require('./routes/enroll');
var enroll2Router = require('./routes/enroll2');
var enrolledRouter = require('./routes/enrolled');
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var ourclassesRouter = require('./routes/ourclasses');
var paymentRouter = require('./routes/payment');
var sendPasswordRouter = require('./routes/sendPassword');
var thanksRouter = require('./routes/thanks');
var accessDeniedRouter = require('./routes/accessDenied');
var enroll2ProfileRouter = require('./routes/enroll2Profile');
var profileStudentRouter = require('./routes/profileStudent');
var changingDataRouter = require('./routes/changingData');
var logoutRouter = require('./routes/logout');

//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret:'ABCD'})); //to create the session === session stuf
app.use(session({
  //secret: cookie_secret,
  //name: cookie_name,
  //store: sessionStore, // connect-mongo session store
  proxy: true,
  resave: true,
  saveUninitialized: true})); //to create the session === session stuf



app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/thanks', thanksRouter);
app.use('/enroll', enrollRouter);
app.use('/enroll2', enroll2Router);
app.use('/enrolled', enrolledRouter);
app.use('/login', loginRouter);
app.use('/ourclasses', ourclassesRouter);
app.use('/payment', paymentRouter);
app.use('/sendPassword', sendPasswordRouter);
app.use('/accessDenied', accessDeniedRouter);
app.use('/enroll2Profile', enroll2ProfileRouter);
app.use('/profileStudent', profileStudentRouter);
app.use('/changingData', changingDataRouter);
app.use('/logout', logoutRouter);

//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(res.redirect('/accessDenied'));
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
