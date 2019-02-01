
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticle, articleView } from '../actions/index';
import Article from '../containers/Article'


class Articles extends Component {

	componentDidMount() {
		this.props.fetchArticle()
	}

	articleSelectedHandler = (id) => {
		const { articles } = this.props;
		let filter = articles.filter(article => article.id === id)
		this.props.articleView(filter);
		this.props.history.push({pathname:'/articles/' + id});
	}

	render(){
		
		let { articles } = this.props
		let renderArticles;
		if (this.props && this.props.articles.length !== 0){
		renderArticles = articles.map(article => {
			return(
			<Link to={"/articles/" + article.id} key={article.id} >
					<Article
					title={article.title} 
					content={article.content}
					author={article.author}
					clicked={() => this.articleSelectedHandler(article.id)} />
			</Link>
			);
		})};
		
		return(
			<div>
					{renderArticles}				
			</div>
		);
	}
};
const mapStateToProps = state => {
	return {
	  articles: state.allArticles.articles,
	}
  }

export default connect(mapStateToProps, { fetchArticle, articleView })(Articles);