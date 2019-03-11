import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticles, articleView } from '../actions/articleActions';
import { withRouter } from 'react-router-dom';
import Article from '../components/Article'



class Articles extends Component {

	constructor() {
	    super();
	    
	    this.state = {
	      articles: [],
	      showMenu: false,
	    }
	    
	    this.showMenu = this.showMenu.bind(this);
	    this.closeMenu = this.closeMenu.bind(this);
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
		let filterLike = [...this.props.articles].filter(article => article.likes > 0).sort(function(a, b) {
			return a.likes - b.likes
		})
		this.setState({articles: filterLike})
		
	}

	sortByLeastLikes = () => {
		let sortLeast = [...this.props.articles].sort(function(a, b) {
			return a.likes - b.likes
		})
		this.setState({articles: sortLeast})
		
	}

	sortByMostLikes = () => {
		let sortMost = [...this.props.articles].sort(function(a, b) {
			return b.likes - a.likes
		})
		this.setState({articles: sortMost})
		
	}

	showMenu = (event) => {
		 event.preventDefault();
		    
		 this.setState({ showMenu: true }, () => {
		    document.addEventListener('click', this.closeMenu);
		  });
	}
	  
	closeMenu = (event) => {
	    
	    if (!this.dropdownMenu.contains(event.target)) {
	      
	      this.setState({ showMenu: false }, () => {
	        document.removeEventListener('click', this.closeMenu);
	      });  
	      
	    }
	 }

	

	selectArticle = (id) => {
		let filterView = this.props.articles.filter(article => article.id === id)
		this.props.articleView(filterView);
		this.props.history.push({pathname:'/articles/' + id});
	}

	render(){
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
					  <br></br>
					  <br></br>
					  <div class="dropdown-trigger">
				        <button className='btn btn-secondary' aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.showMenu}>
				          Filter by:
				        </button>      
				        {this.state.showMenu ? (
				              <div className="menu" ref={(element) => {this.dropdownMenu = element;}}>
				                <button class="dropdown-item" onClick={() => this.clickToSort()}> Most Recent Article </button>
				                <button class="dropdown-item" onClick={() => this.filterByLikes()}> Only Likes </button>
				                <button class="dropdown-item" onClick={() => this.sortByMostLikes()}> Most Likes </button>
				                <button class="dropdown-item" onClick={() => this.sortByLeastLikes()}> Least Likes </button>
				              </div>
				            ) : (null)}
				      </div>
			
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
