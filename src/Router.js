import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Health from './components/Health'
import Articles from './components/Articles'
import Homepage from './components/Homepage'

const Router = () => (
	<Switch>
		<Route exact path='/' component={Homepage} />
		<Route exact path='/Health' component={Health} />
		<Route exact path='/Articles' component={Articles} />
	</Switch>
	)

export default Router