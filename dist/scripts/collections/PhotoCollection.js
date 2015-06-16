var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $; 

var PhotoModel = require('../models/PhotoModel');

module.exports = Backbone.Collection.extend({
	model: PhotoModel, 
	url: ''
});