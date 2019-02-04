import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';
import moment from "moment";



class ArticlesPage extends Component {

    handleClick = () => {
        this.props.deleteArticle(this.props.article[0].id);
        this.props.history.push({pathname:'/articles/'});
    }

    render(){
        return(
            <div class="articleshow">
                <h1 class="title"> {this.props.article[0].title}</h1>
                <h2 class = "content"> {this.props.article[0].content}</h2>
                <h2> Author: {this.props.article[0].author}</h2>
                <h5> Written: { moment(this.props.article[0].created_at).format('MMMM Do YYYY') }</h5>
                <br></br>
                <div class="field">
                        <p class="control">
                          <button class="button is-success" onClick={this.handleClick}>
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
    }
}
export default connect(mapStateToProps, { deleteArticle })(ArticlesPage);

