import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, likesArticle } from '../actions/index';
import moment from "moment";



class ArticlesPage extends Component {

    handleClick = () => {
        this.props.deleteArticle(this.props.article[0].id);
        this.props.history.push({pathname:'/articles/'});
    }

    handleClickLike = () => {
        let currentArticle = this.props.article[0]
        currentArticle.likes += 1;
        this.props.likesArticle(currentArticle);
   };

    render(){

            let likekey = this.props.article[0].likes === 1 ? 'like' : 'likes';
                
        return(
            <div className="articleshow">
                <h1 className="title"> {this.props.article[0].title}</h1>
                 <div>
                  <img 
                    className="image"
                    src={this.props.article[0].image}
                    alt={this.props.article[0].title}
                    />
                </div>

                <br></br>
                <div>
                    <p className = "content"> {this.props.article[0].content}</p>
                </div>
                <p> Author: {this.props.article[0].author}</p>
                <br></br>
                <div>
                    <p> Date: { moment(this.props.article[0].created_at).format('MMMM Do YYYY') }</p>
                </div>
                <br></br>
                <div>
                    <input type='button' className='btn-primary' value='Like Me!' onClick={this.handleClickLike} />
                      <div style={{display: 'inline', marginLeft: 10}}>
                        { this.props.article[0].likes} {likekey}
                        </div>
                </div>
                <br></br>
                <div className="field">
                        <p className="control">
                          <button className="button is-success" onClick={this.handleClick}>
                            Delete
                          </button>
                        </p>
                      </div>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return{
       article: state.articleView[0]
    };
}
export default connect(mapStateToProps, { deleteArticle, likesArticle })(ArticlesPage);

