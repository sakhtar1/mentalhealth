

   const articleLike = (state = [], action) => {
    switch (action.type){
    case 'LIKE_ARTICLE':
      let idx = state.findIndex((article) => {return action.payload.id === article.id})
       let newState = [...state.slice(0,idx), action.article, ...state.slice(idx+1,state.length+1)]
      return newState
    default:
    return state
    }
}
export default articleLike;

