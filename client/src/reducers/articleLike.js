const articleLike = (state = [], action) => {
  switch (action.type){
    case 'LIKE_ARTICLE':
      let articles = [ ...state ]     
      let idx = articles.findIndex(article => article.id === action.article.id)

      if(idx !== -1) {
        articles[idx] = action.article
      } else {
        articles = [ action.article ]
      }
      
      return articles 
    default:
      return state
      
  }
}

export default articleLike;

