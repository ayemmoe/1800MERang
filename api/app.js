var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var favoritesRouter = require('./routes/favorites');
<<<<<<< HEAD
var authRouter = require('./routes/auth');

=======
var removeFavRouter = require('./routes/removeFav')
>>>>>>> 6a9075e8a73cb0a93c400ed1955e8667266ceea7
var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/favorites', usersRouter);
app.use('/userFavorites', favoritesRouter);
<<<<<<< HEAD
app.use('/auth', authRouter);

=======
app.use('/removeFav', removeFavRouter);
>>>>>>> 6a9075e8a73cb0a93c400ed1955e8667266ceea7
// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
