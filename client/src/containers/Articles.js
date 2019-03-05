import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticles, articleView } from '../actions/articleActions';
import { withRouter } from 'react-router-dom';
import Article from '../components/Article'



class Articles extends Component {

	componentDidMount() {
		this.props.fetchArticles()
	}
	

	clickToSort = () => {
		this.props.articles.sort(function (a, b) {
			 if (b.created_at < a.created_at) {
				    return -1;
				  }
			if (b.created_at > a.created_at) {
				    return 1;
				  }
			return 0;
			});
		console.log(this.props.articles)
		this.props.history.push({pathname:'/articles'});
	}

	filterByLikes = () => {
		let filterlike = this.props.articles.filter(article => article.likes > 0)
		console.log(filterlike)
		//this.props.history.push({pathname:'/articles'});
	}
	

	

	selectArticle = (id) => {
		let filterView = this.props.articles.filter(article => article.id === id)
		this.props.articleView(filterView);
		this.props.history.push({pathname:'/articles/' + id});
	}

	render(){
	
		let renderArticles;
		
		if (this.props && this.props.articles.length !== 0){
			renderArticles = this.props.articles.map(article => {
			return(
				<Link to={"/articles/" + article.id} key={article.id} >
					<Article
					title={article.title} 
					author={article.author}
					created_at={article.created_at}
					likes={article.likes} 
					image={article.image}
					clicked={() => this.selectArticle(article.id)} />
					<hr/>
				</Link>	
			);
		})};
		
		return(
			<div>
				<div>	
					<button className='btn btn-secondary' onClick={() => this.clickToSort()}> Sort by Most Recent </button> 
					<button id='filterlike' className='btn btn-secondary' onClick={this.filterByLikes}> Sort by Likes </button>
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

export default withRouter(connect(mapStateToProps, { fetchArticles, articleView })(Articles));
