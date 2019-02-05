
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticles, articleView } from '../actions/index';
import Article from '../containers/Article'


class Articles extends Component {

	componentDidMount() {
		this.props.fetchArticles()
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
					author={article.author}
					clicked={() => this.articleSelectedHandler(article.id)} />
				</Link>
				
					
				
			);
		})};
		
		return(
			<div>
					<div>
			            <img 
			              className="image"
			              src="http://www.wiltshire.gov.uk/images/1797/scaledcropped/651x366/resources/1797/health-and-wellbeing-image.jpg"
			              alt="new"
			              />
              		</div>
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

export default connect(mapStateToProps, { fetchArticles, articleView })(Articles);