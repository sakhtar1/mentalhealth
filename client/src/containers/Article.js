import React, { Component, Suspense } from 'react';
import Articles from '../../components/Articles';
import { Link } from 'react-router-dom';
import ArticlesPage from './ArticlesPage';
import { Route, NavLink, Switch } from 'react-router-dom';
import Login from '../components/userLogin';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchArticle, getArticles } from '../actions/index';
import ArticleNew from './ArticleNew';

class Articles extends Component {

	componentDidMount() {
		this.props.fetchArticles()
	}

	bookSelectedHandler = (id) => {
		let filter = this.props.articles.filter(article => article.id === id)
		this.props.getArticles(filter);
		this.props.history.push({pathname:'/articles/' + id});
	}

	render(){
		const renderArticles = () => this.props.articles.map(article => {
			return(
			<Link to={"/articles/" + article.id} key={article.id} >
					<Article
					title={article.title} 
					content={article.content}
					clicked={() => this.articleSelectedHandler(article.id)} />
			</Link>
			);
		});
	
		return(
			<div className="Challenge">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/articles" exact>Library</NavLink></li>
                            <li><NavLink to={{pathname: '/new-article'}}>Add Article</NavLink></li>
							<li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/login" component={Login} />
					<Route path="/articles/:id" component={FullBook} />
                       <Route path="/new-article" render={(props) => (
                        <Suspense fallback={<div>Loading...</div>} >
                            <ArticleNew />
                        </Suspense>
                        )} />
						<section>
							{renderArticles()}				
						</section> 
               </Switch>
			</div>
		);
	}
};
const mapStateToProps = state => {
	return {
	  articles: state.manageArticles.articles,
	}
  }

export default withRouter(connect(mapStateToProps, { fetchArticles, getArticles })(Articles));