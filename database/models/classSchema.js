var mongoose = require('mongoose'), 
	userSchema = require('./userSchema');

var schema = new mongoose.Schema({
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }]
});

module.exports = mongoose.model('classSchema', schema);