var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String },
	age: { type: Number },
	gender: { type: String },
	incidents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'incidentSchema' }],
	behaviors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'behaviorSchema' }]
});

module.exports = mongoose.model('studentSchema', schema);