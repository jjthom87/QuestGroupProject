var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var session = require('express-session');
// have to pass on a Store object on to the session
var SequelizeStore = require('connect-session-sequelize')(session.Store);
// using local strategy, and setting it up here to give options.
var mysql = require('mysql');
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var bcrypt = require('bcryptjs');

// this is used to sync the data
var models = require('./src/Server/models');
var db = models.sequelize;

db.sync();

var app = express();
app.use(express.static('public'));
passport.serializeUser(function(user,done){
  done(null, user);
 });

passport.deserializeUser(function(obj,done){
  done(null, obj);
 });

module.exports = 
passport.use('local', new LocalStrategy(
  function(username, password, done){
    models.User.findOne({ where: {username: username}}).then(function(user){
        if (!user){
          return done(null, false, {message: 'Incorrect Username'});
        }
        if (!bcrypt.compareSync(password, user.get('password_hash'))){
          return done(null, false, {message: 'incorrect password'});
        }
        return done(null, user)
      });
    }
));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
 secret: 'jobtroll is the ticket to success',
  store: new SequelizeStore({
   db: db
 }),
 resave: true,
 saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//   /set up static files
app.use('/static', express.static(__dirname));

// ------------------------------------
// ROUTES
// ------------------------------------

//  ----- Log In  GET Request-------- //
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname);
});



 // app.get('/login', function(req, res) {
 //   res.render('login');
 // });

  app.get('/home', function (req, res){
        if (!req.isAuthenticated()){
            req.session.error = 'Please sign in!';
            res.redirect('/home');
            return false;
          };
          models.User.findOne({ where: {id: req.user.id}}).then(function(currentUser){
          var data = {
            currentUser: currentUser
          }
          res.redirect('/home');
        });
  });


  app.post('/users/login', 
    passport.authenticate('local', {
      successRedirect: '/home',
	    failureRedirect: '/'
    })
  );

// ----- Registration GET Request ------ //
  app.get('/register', function(req, res) {
   	res.render('register'); // uses register.handlebars
  });

     //Register user
  app.post('/users/create',function(req,res){
      models.User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }).then(function() {
        res.redirect('/');
      }).catch(function(err){
        throw err;
      });
  });


 app.get('/logout', function(req, res){
  req.logout();
  req.session.destroy();
  res.redirect('/');
 });

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});