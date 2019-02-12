import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticles, articleView } from '../actions/index';
import { withRouter } from 'react-router-dom';
import Article from '../components/Article'



class Articles extends Component {

	componentDidMount() {
		this.props.fetchArticles()
	}

	selectArticle = (id) => {
		const { articles } = this.props;
		let filterView = articles.filter(article => article.id === id)
		this.props.articleView(filterView);
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
					author={article.author}
					created_at={article.created_at}
					likes={article.likes} 
					image={article.image}
					clicked={() => this.selectArticle(article.id)} />
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

export default withRouter(connect(mapStateToProps, { fetchArticles, articleView })(Articles));
