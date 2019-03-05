import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addArticle } from '../actions/articleActions';



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
        this.props.addArticle(this.state);
        alert("Your article has been created!")
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
                <h1 className="title">Blog Post</h1>
               
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
                      <div className="field">
                          <label className="label">Image</label>
                          <div className="control">
                            <input className="input" type="text" placeholder="Paste URL" ref="image" value={this.state.image} onChange={(event) => this.setState({image: event.target.value})}/>
                          </div>
                        </div>
                   
                    <div className="field is-grouped">
                          <div className="control">
                            <button className="button is-link">Create</button>
                          </div>
                    </div>
                      <div><button className='cancelLink'
                      onClick={() => this.props.history.push('/articles')}>
                    Cancel
                  </button>
                  </div>
                </form>
            </div>
        );
    }
};



export default withRouter(connect(null, { addArticle })(ArticleNew));

