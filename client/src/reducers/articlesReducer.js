

const initial_State= {
	articles: []
};

const allArticles = (state = initial_State, action) => {

	switch(action.type){
		case 'FETCH_ARTICLES':
			return{ ...state, articles: action.payload } 
		case 'ADD_ARTICLE':
        	return { ...state, articles: state.articles.concat(action.payload)}
        case 'LIKE_ARTICLE':{
	      let idx = state.articles.findIndex((article) => {return action.payload.id === article.id})
	      let newState = [...state.articles.slice(0,idx), action.article, ...state.articles.slice(idx+1,state.length+1)]
	      return newState
	  }
        case 'DELETE_ARTICLE':
        	return {...state, articles: state.articles.filter(article => article.id !== action.payload.id)}
		default:
			return state;
	}
}

  export default allArticles;
 