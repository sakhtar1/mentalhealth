
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticle, articleView } from '../actions/index';


class Articles extends Component {

	componentDidMount() {
		this.props.fetchArticle()
	}

	articleSelectedHandler = (id) => {
		let filter = this.props.articles.filter(article => article.id === id)
		this.props.viewArticle(filter);
		this.props.history.push({pathname:'/articles/' + id});
	}

	render(){
		const renderArticles = () => this.props.articles.map(article => {
			return(
			<Link to={"/articles/" + article.id} key={article.id} >
					<Articles
					title={article.title} 
					content={article.content}
					author={article.author}
					clicked={() => this.articleSelectedHandler(article.id)} />
			</Link>
			);
		});
	
		return(
			<div>
				<section>
					{renderArticles()}				
				</section> 
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