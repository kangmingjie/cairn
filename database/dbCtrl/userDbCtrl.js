var User = require('../models/userSchema');

module.exports = {

  // create: function(req, res) {
  //   User.create(req.body, function(err, result) {
  //     if (err) return res.status(500).send(err);
  //     res.json(result);
  //   });
  // },

  // read: function(req, res) {
  //   User.find().sort('username').limit(1)
  //   .exec(function(err, result) {
  //     if (err) return res.status(500).send(err);
  //     res.json(result);
  //   });
  // },

  // show: function(req, res) {
  //   User.findById(req.params.id, function(err, result) {
  //     if (err) return res.status(500).send(err);
  //     res.json(result);
  //   });
  // },

  // update: function(req, res) {
  //   User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
  //     if (err) return res.status(500).send(err);
  //     res.json(result);
  //   });
  // },

  // destroy: function(req, res) {
  //   User.findByIdAndRemove(req.params.id, function(err, result) {
  //     if (err) return res.status(500).send(err);
  //     res.json(result);
  //   });
  // }
	  register: function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, user) {
      if(err) return res.send(err);
      user.password = null;
      return res.send(user);
    });
  },

  me: function(req, res) {
    if (!req.user) return res.send("current user not defined");
    req.user.password = null;
    return res.json(req.user);
  },

  update: function(req, res, done) {
    User.findByIdAndUpdate(req.user._id, req.body, function(err, result) {
      if (err) done(err);
      res.sendStatus(200);
    });
  }
};