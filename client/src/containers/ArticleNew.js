import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';
import uuid from 'uuid';


class ArticleNew extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        created_at:'',
        image: '',
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
            <div className="article-new">
                <h1 className="title">Add an Article</h1>
               
                <form onSubmit={this.handleSubmit}>
                    <div class="field">
                      <label class="label">Title</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Title" ref="title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Content</label>
                      <div class="control">
                        <textarea class="textarea" rows="10" placeholder="Article Content" ref="content" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                      </div>
                    </div>
                        <div class="field">
                          <label class="label">Author</label>
                          <div class="control">
                            <input class="input" type="text" placeholder="Author Name" ref="author" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                          </div>
                        </div>
                      <div class="field">
                          <label class="label">Image Link</label>
                          <div class="control">
                            <input class="input" type="text" placeholder="Paste URL" ref="image" value={this.state.image} onChange={(event) => this.setState({image: event.target.value})}/>
                          </div>
                        </div>
                       
                       
                        <div class="field">
                          <label class="label">Date</label>
                          <div class="control">
                            <input class="input" type="text" placeholder="Date" ref="created_at" value={this.state.created_at} onChange={(event) => this.setState({created_at: event.target.value})}/>
                          </div>
                        </div>
                   
                    <div class="field is-grouped">
                          <div class="control">
                            <button class="button is-link">Create</button>
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



export default withRouter(connect(null, { addArticle })(ArticleNew));

