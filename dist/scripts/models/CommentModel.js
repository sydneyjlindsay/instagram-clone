//Comment Model

var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null, 
		userId: null, 
		photoId: null, 
		text: null, 
		createdAt: null 
	}, 

	urlRoot: '', 
	idAttribute: '_id'
});