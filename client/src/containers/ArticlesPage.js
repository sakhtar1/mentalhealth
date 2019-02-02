import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';

class ArticlesPage extends Component {

    handleClick = () => {
        this.props.deleteArticle(this.props.article[0].id);
        this.props.history.push({pathname:'/articles/'});
    }
    render(){
        return(
            <div>
                <h1> {this.props.article[0].title}</h1>
                <h2> {this.props.article[0].content}</h2>
                <h2> {this.props.article[0].author}</h2>
                <button onClick={this.handleClick}>Delete</button>
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

