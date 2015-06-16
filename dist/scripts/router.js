var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
	routes: {
		'': 'home',
        'login': 'login',
        'register': 'register',
        'feed': 'feed',
    },

    home: function() {
        $('#register').hide();
        $('#landing-page').show();
        console.log('test string for route');
    },

    login: function() {
        $('.page').hide();
        $('#login').show();
        console.log('test string for route');
    },

    feed: function() {
        $('.page').hide();
        $('#feed').show();
        console.log('test string for route');
    },

    register: function() {
        $('.page').hide();
        $('#register').show();
        console.log('test string for route');
    }

});