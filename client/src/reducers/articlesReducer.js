

const initial_State= {
	articles: []
};

const allArticles = (state = initial_State, action) => {

	switch(action.type){
		case 'FETCH_ARTICLES':
			return{ ...state, articles: action.payload } 
		case 'ADD_ARTICLE':
        	return { ...state, articles: state.articles.concat(action.payload)}
      	case 'LIKE_ARTICLE': 
	     {const index = state.articles.filter(article => article.id !== action.payload.id);
      		return [...state.slice(0, index), action.article, ...state.slice(index+1)]}
       case 'DELETE_ARTICLE':
        return {...state, articles: state.articles.filter(article => article.id !== action.payload.id)}
		default:
			return state;
	}
}

  export default allArticles;
