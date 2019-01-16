import { createStore, combineReducers } from 'redux';
import articlesReducer from '../Reducers/articlesReducer'




const rootReducer = combineReducers({
  articles: articlesReducer


})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)


export default store 