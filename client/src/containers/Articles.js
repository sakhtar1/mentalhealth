import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticles, articleView } from '../actions/articleActions';
import { withRouter } from 'react-router-dom';
import Article from '../components/Article'



class Articles extends Component {

	state = {
		// when this component is mounted the intial state is an empty array
		// then we fetch the articles from our backend and dispatch the articles
		// to our reducer and update the reducer, bc we're returning this entire operation,
		// after it is done, it'll allow us to hit this.setState then and by the time we hit this.setState
		// then, the articles will be in the reduc store, and b/c we connected our component to the redux store
		// we'll have access to those articles in the props
		// and that's why we can say setState articles to this.props.articles
		// because we're diplaying state by the time we hit renderarticles, the articles is the array from the store
		// The array of articles in its default array. Then when we hit this.sortarticles it will sort
		// this article from props, then we set this current state into the new state we want it to be
		// we will sort the articles according to its created date, once its sorted we're going to
		// tell the component I have a new value for your component it'll be the sorted array
		
		articles: []
	}

	componentDidMount() {
		this.props.fetchArticles().then(() => this.setState({articles: this.props.articles}))
    ;
	}
	

	clickToSort = () => {
		let sortArticles = [...this.props.articles].sort(function (a, b) {
			 if (b.created_at < a.created_at) {
				    return -1;
				  }
			if (b.created_at > a.created_at) {
				    return 1;
				  }
			return 0;
			})
		this.setState({articles: sortArticles})
	}

	filterByLikes = () => {
		let filterLike = this.props.articles.filter(article => article.likes > 0).sort(function(a, b) {
			return a.likes - b.likes
		})
		//console.log(filterLike);
		this.setState({articles: filterLike})
		
	}
	

	

	selectArticle = (id) => {
		let filterView = this.props.articles.filter(article => article.id === id)
		this.props.articleView(filterView);
		this.props.history.push({pathname:'/articles/' + id});
	}

	render(){
		//console.log(this.props.articles)
		let renderArticles;
		
		if (this.state && this.state.articles.length !== 0){
			renderArticles = this.state.articles.map(article => {
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
					<button id='filterlike' className='btn btn-secondary' onClick={() => this.filterByLikes()}> Filter by Likes </button>
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
