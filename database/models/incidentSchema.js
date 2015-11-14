var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	date: {type: String},
	student: {type: mongoose.Schema.Types.ObjectId, ref: 'studentSchema'},
	description: {type: String},
	severity: {type: Number, default: 5},
	behavior: {type: mongoose.Schema.Types.ObjectId, ref: 'behaviorSchema'}
});

module.exports = mongoose.model('incidentSchema', schema);