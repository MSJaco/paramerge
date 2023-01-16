var createError = require('http-errors');

// Llamcleaado a express
var express = require('express'); 

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Llamamos a MainRouter
var MainRouter = require('./routes/mainRouter');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// Guardamos la funcion en una variable app
var app = express();

const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// indicamos que carpetas vamos a usar

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Hacemos publica la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Indicamos que vamos a usar el MainRouter
app.use('/', MainRouter);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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

app.listen (port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});

module.exports = app;