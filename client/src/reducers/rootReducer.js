import { combineReducers } from 'redux';
import allArticles from './articlesReducer';
import allUsers from './loginReducer';
import articleView from './articleView';
import articleLike from './articleLike';


const rootReducer = combineReducers({
	allArticles,
	allUsers,
	articleView,
	articleLike
});

export default rootReducer