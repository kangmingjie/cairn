var Incident = require('../models/incidentSchema'),
	Behavior = require('../models/behaviorSchema'),
	Student  = require('../models/studentSchema');

module.exports = {
	
	create: function(req, res) {
		Incident.create(req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			Student.findOne({'_id': result.student}, function(err, student) {
				student.incidents.push(result._id)
				student.save(function(err, updatedStudent) {
					if(err) return res.status(500).json(err);
					return res.status(200).json(updatedStudent);
				})
			})
			
		});
	},
	
	read: function(req, res) {
		Incident.find({}).sort('description')
		.exec(function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);		
		});
	},
	
	show: function(req, res) {
		Incident.findById(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);	
		});
	},
	
	update: function(req, res) {
		Incident.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
	
	destroy: function(req, res) {
		Incident.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	}	
};