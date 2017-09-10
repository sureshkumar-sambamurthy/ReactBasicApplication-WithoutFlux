'use strict';

import React from 'react';
import {withRouter} from 'react-router-dom';
import AuthorFormPage from './authorform';
import api from '../../api/mockapi';

class addauthor extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			author: {id:'', firstName: '', lastName: ''},
			errors:{}
		}
	}
	componentWillMount(){
		
			var authorId = this.props.match.params.id;
			if(authorId){
				alert("call author by id")
				this.setState({author: api.getAuthorById(authorId)});
			}
		
	}
	// static propTypes:{
 //        history: PropTypes.object.isRequired
 //    }
    setAuthorSate(event){
    	var field = event.target.name;
    	var value = event.target.value;
    	this.state.author[field] = value;
    	return this.setState({author: this.state.author});
     }
     isAuthorFormValid(){
     	var isFormValid = true;
        this.state.errors = {};
     	if(this.state.author.firstName.length === 0){
            this.state.errors.firstName = "The firstname is required";
            isFormValid = false;
     	}

     	if(this.state.author.lastName.length === 0){
            this.state.errors.lastName = "The lastName is required";
            isFormValid = false;
     	}

     	this.setState({errors:this.state.errors});
     	return isFormValid;

     }
     saveAuthorDetails(event){
     	event.preventDefault();
     	if(this.isAuthorFormValid()){
     	  api.saveAuthor(this.state.author);
     	  this.props.history.push('/');
        }
     }
	render() {
	  
	   return (
			 <div>
			 <AuthorFormPage 
			 author={this.state.author} onChange={this.setAuthorSate.bind(this)} saveHandler={this.saveAuthorDetails.bind(this)} errors={this.state.errors}/>
			 </div>
		);
	}
};
export default withRouter(addauthor);