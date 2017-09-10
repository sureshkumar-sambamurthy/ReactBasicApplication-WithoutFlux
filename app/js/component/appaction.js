'use strict';

import Dispatcher from './appdispatcher';
import api from '../../api/mockapi';

var AthorAction = {

   createAuthor: function(author) {

   	  var newAuthor = api.saveAuthor(author);

   	  Dispatcher.dispatch({
   	  	actionType : 'CREATE_AUTHOR',
   	  	author: newAuthor
   	  })
   }
}

module.exports = AuthorAction;