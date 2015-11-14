var Student = require('../models/studentSchema');

module.exports = {
	
  create: function(req, res) {
     Student.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  read: function(req, res) {
     Student.find().sort('name')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  show: function(req, res) {
     Student.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
     Student.findByIdAndUpdate(req.params.id, {$push:{behaviors:req.body.behaviorId}}, { new: true }, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  destroy: function(req, res) {
     Student.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }	
	
};