

   const articleLike = (state = [], action) => {
    switch (action.type){
    case 'LIKE_ARTICLE':
    debugger
      let idx = state.articles.findIndex(article=> article.id === action.article.id)
    debugger
       let newState = [...state.slice(0,idx), action.article, ...state.slice(idx+1,state.length+1)]
    debugger
      return newState
  debugger
    default:
    return state
    }
}
export default articleLike;

