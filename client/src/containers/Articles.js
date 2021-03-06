import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticles, articleView } from '../actions/articleActions';
import { withRouter } from 'react-router-dom';
import Article from '../components/Article'



class Articles extends Component {

   
	 constructor(props){
      	super(props)
     	 this.state = {
     	 	articles: [],
     	 }
     
  }

	componentDidMount() {
		this.props.fetchArticles();
	}

	componentWillReceiveProps(props){
		this.setState({
			articles: props.articles
		})
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
	
		this.setState({articles: [...sortArticles]})

	}

	filterByLikes = () => {
		let filterLike = this.state.articles.filter(article => article.likes > 0).sort(function(a, b) {	
		return a.likes - b.likes
			})

		this.setState({articles: [...filterLike]})			


 	}	


	selectArticle = (id) => {
		let filterView = this.state.articles.filter(article => article.id === id)
		this.props.articleView(filterView);
		this.props.history.push({pathname:'/articles/' + id});
	}



	render(){
		let renderArticles;
		
		
		if (this.state.articles.length !== 0){
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
			})
		} 	
	
		return(
			<div>
				<div>	
					<button className='btn btn-secondary' onClick={this.clickToSort}> 
					Sort by Most Recent </button> 
					  <br></br>
					  <br></br>
					 <button className='btn btn-secondary' onClick={this.filterByLikes}> Filter by Likes </button> 	
				</div>
				 <br></br>

				<div>
					{renderArticles} 
				</div>				
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
