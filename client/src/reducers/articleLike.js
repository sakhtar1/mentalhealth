const articleLike = (state = [], action) => {
  switch (action.type){
    case 'LIKE_ARTICLE':
      let idx = state.findIndex(article => article.id === action.article.id)
      // let newState = [...state.slice(0,idx), action.article, ...state.slice(idx+1,state.length+1)]

      let articles = [ ...state ]
      
      if(idx !== -1) {
        articles[idx] = action.article
      } else {
        articles = [ action.article ]
      }
   
debugger
      return articles 

  debugger
    default:
      return state
      debugger
  }
}

export default articleLike;

