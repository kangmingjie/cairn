// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var mongoose = require('mongoose');

//Controllers
var BehaviorCtrl = require('./database/dbCtrl/behaviorDbCtrl');
var ClassCtrl = require('./database/dbCtrl/classDbCtrl');
var IncidentCtrl = require('./database/dbCtrl/incidentDbCtrl');
var StudentCtrl = require('./database/dbCtrl/studentDbCtrl');
var UserCtrl = require('./database/dbCtrl/userDbCtrl');

// SERVICES //
var passport = require('./services/passport');

// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  return next();
};

// Express
var app = express();

// Middle-Earth
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: 'gweriwrb-erfawrg45-oasWsd',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

// View CRUD
app.get('/behavior', BehaviorCtrl.read);
app.post('/behavior', BehaviorCtrl.create);
app.put('/behavior', BehaviorCtrl.update);
app.delete('/behavior', BehaviorCtrl.destroy);

app.get('/class', ClassCtrl.read);
app.post('/class', ClassCtrl.create);
app.put('/class', ClassCtrl.update);
app.delete('/class', ClassCtrl.destroy);

app.get('/incident', IncidentCtrl.read);
app.post('/incident', IncidentCtrl.create);
app.put('/incident', IncidentCtrl.update);
app.delete('/incident', IncidentCtrl.destroy);

app.get('/student', StudentCtrl.read);
app.get('/student/:id', StudentCtrl.show);
app.post('/student', StudentCtrl.create);
app.put('/student/:id', StudentCtrl.update);
app.delete('/student', StudentCtrl.destroy);

// app.get('/user', UserCtrl.read);
// app.post('/user', UserCtrl.create);
// app.put('/user', UserCtrl.update);
// app.delete('/user', UserCtrl.destroy);
app.post('/user', UserCtrl.register);
app.get('/user', isAuthed, UserCtrl.me);
app.put('/user', isAuthed, UserCtrl.update);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/user'
}));
app.get('/logout', function(req, res) {
  req.logout();
  return res.send('logged out');
});

app.get('/class', function(req, res) {
	res.json('some kinda bai chi de zi');	
});
app.get('/login', function(req, res) {
	res.json('some kinda bai chi de zi');	
});
app.get('/signUp', function(req, res) {
	res.json('some kinda bai chi de zi');	
});



// Connection
var mongoURI = process.env.MONGO_LABS_URI;

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('db listening on port 27017')
});

// API Connenction
var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('listening on', port);
});