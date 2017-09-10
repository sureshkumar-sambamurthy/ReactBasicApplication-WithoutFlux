'use strict';

import Dispatcher from './appdispatcher';
import EventEmitter from 'event';
import objectAssign from 'object-assing';
import _ from 'lodash';

var _author = [];
var authorStore = objectAssign({}, EventEmitter.prototype,{
   
     addChangeListener:function(callback){
         this.on("change", callback);
     },
     removeChangListener:function(callback){
         this.removeListener("change", callback);
     },
     emitChange:function(){
     	this.emit("change");
     },
     getAllAuthors:function(){
     	return _author;
     },
     getAuthorById:function(authorId){
        return _.find(_author, {id:authorId});
     }
});

Dipatcher.register(function(action){
   switch(action.actionType){
       case 'CREATE_AUTHOR':
        _author.push(action.author);
        break;
   }
});

module.export = authorStore;