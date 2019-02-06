import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Health from './components/Health'
import Articles from './components/Articles'
import Homepage from './components/Homepage'
import ArticleNew from './containers/ArticleNew';
import Login from './containers/userLogin';
import ArticlesPage from './containers/ArticlesPage';
import Signup from './containers/signUp';




const Router = () => (
	<Switch>
		<Route exact path='/' component={Homepage} />
		<Route exact path='/health' component={Health} />
		<Route exact path='/articles' component={Articles} />
		<Route exact path='/new-article' component={ArticleNew} />
		<Route exact path='/login' component={Login} />
		<Route exact path='/articles/:id' component={ArticlesPage} />
		<Route exact path='/signup' component={Signup} />
		
	</Switch>
	)

export default Router