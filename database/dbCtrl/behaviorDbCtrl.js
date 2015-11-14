var behavior = require('../models/behaviorSchema');

module.exports = {
	
	create: function(req, res) {
    console.log(req.body)
		behavior.create(req.body, function(err, result) {
      console.log('EEEEERRRRRRR: ', err)
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
	
  read: function(req, res) {
    behavior.find().sort('description')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },
	
  show: function(req, res) {
    behavior.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },
	

  	update: function(req, res) {
		  behavior.findByIdAndUpdate(req.params.id, req.body, { new: true}, function(err, result){
			  if (err) return res.status(500).send(err);
			  res.json(result);
		  });
	  },
	  
	destroy: function(req, res) {
		behavior.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);
		})
	}
	
}