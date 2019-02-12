const articleLike = (state = [], action) => {
  switch (action.type){
    case 'LIKE_ARTICLE':
      let idx = state.findIndex(article => article.id === action.article.id)
      let articles = [ ...state ]     
      if(idx !== -1) {
        articles[idx] = action.article
      } else {
        articles = [ action.article ]
      }
      debugger
      return { articles } 
      debugger
    default:
      return state
      debugger
  }
}

export default articleLike;

