import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, likesArticle, articleView } from '../actions/index';
import moment from "moment";



class ArticlesPage extends Component {


    handleClickDelete = (event) => {
        event.preventDefault()
        this.props.deleteArticle(this.props.article.id);
        alert("Your article has been deleted!")
        this.props.history.push({pathname:'/articles/'});
    }

    handleClickLike= (event) => {
        event.preventDefault()
        let currentArticle = this.props.article
       currentArticle.likes += 1
        this.props.likesArticle(currentArticle);

   };

    render(){
            const { article } = this.props;
        
            let  likekey  = article.likes === 1 ? 'like' : 'likes';

        return(
            <div className="articleshow">

                <h1 className="title"> {article.title}</h1>
                 <div>
                  <img 
                    className="image"
                    src={article.image}
                    alt={article.title}

                    />
                </div>

                <br></br>
                <div>
                    <p className = "content"> {article.content}</p>
                </div>
                <p> Author: {article.author}</p>
                <br></br>
                <div>
                    <p> Date: { moment(article.created_at).format('MMMM Do YYYY') }</p>
                </div>
                <br></br>
                <div>
                    <input type='button' className= 'btn-primary' value='Like!' onClick={this.handleClickLike.bind(this) } />
                      <div style={{display: 'inline', marginLeft: 10}}>
                        {article.likes} {likekey}
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
       article: state.articleView[0][0]
 
    };
}
export default connect(mapStateToProps, { deleteArticle, likesArticle, articleView })(ArticlesPage);

