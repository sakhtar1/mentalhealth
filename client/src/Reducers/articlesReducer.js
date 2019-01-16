export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return action.articles;
    case 'ADD_ARTICLE':
      const article = Object.assign({}, action.article, { id: state.length + 1} );
      return [ ...state, article ];
    default:
      return state;
  }
};