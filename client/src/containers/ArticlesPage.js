import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, updateArticle } from '../actions/index';
import moment from "moment";



class ArticlesPage extends Component {

    handleClick = () => {
        this.props.deleteArticle(this.props.article[0].id);
        this.props.history.push({pathname:'/articles/'});
    }
    handleClickUpdate = (article) => {
        this.props.updateArticle(this.props.article[0].id);
        this.props.history.push({pathname:`/articles/${article[0].id}}/edit-article`});
    }

    render(){
            
                
        return(
            <div class="articleshow">
                <h1 class="title"> {this.props.article[0].title}</h1>
                 <div>
                  <img 
                    class="image"
                    src={this.props.article[0].image}
                    alt={this.props.article[0].title}
                    />
                </div>

                <br></br>
                <div>
                    <p class = "content"> {this.props.article[0].content}</p>
                </div>
                <p> Author: {this.props.article[0].author}</p>
                <br></br>
                <div>
                    <h7> Date: { moment(this.props.article[0].created_at).format('MMMM Do YYYY') }</h7>
                </div>
                <br></br>
                <div class="field">
                        <p class="control">
                          <button class="button is-success" onClick={this.handleClick}>
                            Delete
                          </button>
                        </p>
                      </div>
                <div class="field">
                        <p class>
                          <button class="button is-success" onClick={this.handleClickUpdate}>
                            Update
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
    }
}
export default connect(mapStateToProps, { deleteArticle, updateArticle })(ArticlesPage);

