//Tag Model

var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null, 
		photoId: null, 
		text: null
	}, 

	urlRoot: '', 
	idAttribute: '_id'
});