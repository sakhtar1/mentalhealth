import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBook } from '../../actions/index';
import uuid from 'uuid';

class ArticleNew extends Component {
    state = {
        title: '',
        content: '',
        user_name:'',
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            id: uuid()
        })
        this.props.addArticle(this.state);
        alert("Your article has been added!")
        this.props.history.push('/articles') 
    }

    handleChange = event => {
        this.setState({
          [event.target.ref]: event.target.value
        });
      }
   
    render() {
        return(
            <div className="ArticleNew">
                <h1>Add a Book</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" ref="title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                    <label>Author</label>
                    <input type="text" ref="content" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                    <label>Image URL</label>
                    <input type="text" ref="user_name" value={this.state.user_name} onChange={(event) => this.setState({user_name: event.target.value})}/>
                    <label>Description</label> 
                </form>
            </div>
        );
    }
};