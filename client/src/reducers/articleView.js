
  const articleView = (state = [], action) => {
    switch (action.type){
    case "VIEW_ARTICLE":
        return [ action.payload ]
    default:
    return state
    }
}
export default articleView;

