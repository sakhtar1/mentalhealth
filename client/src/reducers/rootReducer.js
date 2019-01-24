import { combineReducers } from 'redux';
import allArticles from './articlesReducer';
import allUsers from './loginReducer';
import articleView from './articleView';

export default combineReducers({
	allArticles,
	allUsers,
	articleView
});