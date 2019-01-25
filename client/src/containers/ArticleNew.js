import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';
import uuid from 'uuid';
import { Field, reduxForm } from 'redux-form';

class ArticleNew extends Component {
    state = {
        title: '',
        content: '',
        author: '',
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
            <div>
                <h1>Add an Article</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <br></br>
                        <input type="text" ref="title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                        <br></br>
                        <label>Content: </label>
                        <br></br>
                        <textarea ref="content" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                        <br></br>
                        <label>Author Name: </label>
                        <br></br>
                        <input type="text" ref="author" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                        <br></br>
                    </div>
                    <br></br>
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
};



export default withRouter(connect(null, { addArticle })(ArticleNew));

