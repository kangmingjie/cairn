var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var schema = new mongoose.Schema({
	password: { type: String },
	name: {
		first: { type: String },
		last: { type: String}
	},
	isAdmin: {type: Boolean }, 
	email: { type: String }
});

schema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

schema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('userSchema', schema);