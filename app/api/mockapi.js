"user strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

var _clone = function(item){
    return JSON.parse(JSON.stringify(item));
}
var generateId = function(){
	return authors[authors.length -1] ? authors[authors.length -1].id +1 : 0;
}
var  mockApi = {

	getAllAuthors: function(){
         return _clone(authors);
	},
	saveAuthor: function(data){
		
		var id = generateId();
		if(id){
            data.id = id;
            authors.push(data);
		}
		return _clone(data);
	},
	getAuthorById:function(authorId){
		var author = _.find(authors, {id: authorId});
		console.log(author);
		return _clone(author);
	}

};

export default mockApi;
