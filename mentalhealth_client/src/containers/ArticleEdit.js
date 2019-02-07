import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateArticle } from '../actions/index';
import uuid from 'uuid';


class ArticleEdit extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        created_at:'',
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            id: uuid()
        })
        this.props.updateArticle(this.state);
        alert("Your article has been updated!")
        this.props.history.push('/articles') 
    }

    handleChange = event => {
        this.setState({
          [event.target.ref]: event.target.value
        });
      }
   
    render() {
        return(
            <div className="article-edit">
                <h1 className="title">Update Article</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label className="label">Title</label>
                      <div className="control">
                        <input className="input" type="text" placeholder="Title" ref="title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Content</label>
                      <div className="control">
                        <textarea className="textarea" rows="10" placeholder="Article Content" ref="content" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                      </div>
                    </div>
                        <div className="field">
                          <label className="label">Author</label>
                          <div className="control">
                            <input className="input" type="text" placeholder="Author Name" ref="author" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                          </div>
                        </div>
                   
                    <div className="field is-grouped">
                          <div className="control">
                            <button className="button is-link">Update</button>
                          </div>
                    </div>
                    <a className='cancelLink'
                    onClick={() => this.props.history.push('/articles')}
                  >
                    Cancel
                  </a>
                </form>
            </div>
        );
    }
};



export default withRouter(connect(null, { updateArticle })(ArticleEdit));


