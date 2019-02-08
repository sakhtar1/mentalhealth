
  const articleView = (state = [], action) => {
    switch (action.type){
    case "VIEW_ARTICLE":
    // debugger
        return [ action.payload ]
     // debugger
    default:
    return state
    }
}
export default articleView;

