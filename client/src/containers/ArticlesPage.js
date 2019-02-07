import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, likesArticle } from '../actions/index';
import moment from "moment";



class ArticlesPage extends Component {

    handleClickDelete = (event) => {
        event.preventDefault()
        this.props.deleteArticle(this.props.article[0].id);
        this.props.history.push({pathname:'/articles/'});
    }

    handleClickLike= (event) => {
        event.preventDefault()
        let currentArticle = this.props.article[0]
       currentArticle.likes += 1
        console.log(this.props.likesArticle(currentArticle));
       //this.props.likesArticle(this.props.article[0])

   };

    render(){
            const { article } = this.props;
            
                
            let likekey = article[0].likes === 1 ? 'like' : 'likes';

        return(
            <div className="articleshow">
                <h1 className="title"> {article[0].title}</h1>
                 <div>
                  <img 
                    className="image"
                    src={article[0].image}
                    alt={article[0].title}

                    />
                </div>

                <br></br>
                <div>
                    <p className = "content"> {article[0].content}</p>
                </div>
                <p> Author: {article[0].author}</p>
                <br></br>
                <div>
                    <p> Date: { moment(article[0].created_at).format('MMMM Do YYYY') }</p>
                </div>
                <br></br>
                <div>
                    <button className="btn-primary" value={article[0].id} onClick={this.handleClickLike}>Like!</button>
                      <div style={{display: 'inline', marginLeft: 10}}>
                        { article[0].likes } {likekey}
                        </div>
                </div>
                <br></br>
                <div className="field">
                        <p className="control">
                          <button className="button is-success" onClick={this.handleClickDelete}>
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

