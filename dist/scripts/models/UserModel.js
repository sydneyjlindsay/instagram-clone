//User Model

var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $;

var validator = require('validator');

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null, 
		userName: null, 
		password: null
	}, 

	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/instagram-users', 
	idAttribute: '_id', 

	validate: function(attr) {
		if(!attr.username) {
			return 'You must enter a username.'; 
		}
		else if(!attr.password) {
			return 'You must enter a password'; 
		}
		else if(!validator.isAlphanumeric(attr.username)) { //using the validator within backbone
			return 'Username must contain only letters and numbers';
		}
		else if(attr.password.length < 6) {
			return 'Your passoword is too short';
		}
		return false;
	}
});