var $ = jQuery = require('jquery'); 
var Backbone = require('backbone'); 
var _ = require('backbone/node_modules/underscore');
var validator = require('validator');
var bootstrap = require('bootstrap');
Backbone.$ = $;  


//define models, collections, and router
var CommentModel = require('./models/CommentModel');
var CommentCollection = require('./collections/CommentCollection');

var PhotoModel = require('./models/PhotoModel.js');
var PhotoCollection = require('./collections/PhotoCollection');

var TagModel = require('./models/TagModel');
var TagCollection = require('./collections/TagCollection');
 
var UserModel = require('./models/UserModel');
var UserCollection = require('./collections/UserCollection');

var AppRouter = require('./router');

$(document).ready(function() {
	var instaClone = new AppRouter(); 
	Backbone.history.start(); 

	$('#btn-home-login').on('click', function() {
		console.log('button clicked');
		$('#login').show();
		$('#landing-page').hide();
	});

	var users = new UserCollection(); 
	var loggedInUser = false;

	users.fetch({success: onUsersLoaded});

	function onUsersLoaded() {
		$('#form-register').on('submit', function(e) {
			e.preventDefault(); 

			//Create new model
			var newUser = new UserModel({
				username: $('#register-username-input').val(), 
				password: $('#register-password-input').val()
			});

			//Validate input
			if(!newUser.isValid()) {
				$('#register-error').html(newUser.validationError);
			}
			else {
				newUser.save();
				app.navigate('feed', {trigger: true});
			}
		});

		$('#form-login').on('submit', function(e) {
			e.preventDefault(); 

			$('#login-error').html('');

			//Create new model
			var currentUser = new UserModel({
				username: $('#login-username').val(), //Grab values out of input fields
				password: $('#login-password').val()
			});

			//Validate input
			if(!currentUser.isValid()) {
				$('#login-error').html(currentUser.validationError);
			}
			else {
				loggedInUser = users.findWhere({
					username: $('#login-username').val(),
					password: $('#login-password').val()
				});

				if(loggedInUser) {
					app.navigate('feed', {trigger: true});
				}
				else {
					$('#login-error').html('Your username/passowrd combination is incorrect');
				}
			}

		});
	}

});
