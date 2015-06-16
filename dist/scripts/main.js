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

var router = require('./router');

