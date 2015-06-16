//Photo Model

var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null, 
		url: null, 
		caption: null, 
		numLikes: 0,
		createdAt: null 
	}, 

	urlRoot: '', 
	idAttribute: '_id'
	
});