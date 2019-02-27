
const API_URL = 'http://localhost:3001/api'


 export const articleView = (payload) => {
    return {
      type: 'VIEW_ARTICLE',
      payload
    }
  }

  export const likeArticle = (article) => {
    return {
      type: 'LIKE_ARTICLE',
      article
    };
  };




export const fetchArticles = () => {
    let data = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    return dispatch => {
      fetch(`${ API_URL }/articles`, data)
        .then(response => response.json())
        .then(articles => {
          dispatch({
              type: 'FETCH_ARTICLES',
              payload: articles
          })
        })
        .catch(err => err)
    }
  }

  export const addArticle = (article) => {
    console.log('C')
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({article})
    }
   
    return dispatch => {

      fetch(`${ API_URL }/articles`, data)
        .then(response => response.json())
        .then(article => {
          console.log('D')
          dispatch({
                  type: 'ADD_ARTICLE', 
                  payload: article
                })})
        .catch(err => err)
    }
    console.log('E')
  }

  export const deleteArticle = (id) => {
    let data = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    } 
    return dispatch => {
      fetch(`${ API_URL }/articles/${ id }`, data)
        .then(response => response.json())
        .then(article => dispatch({
          type: 'DELETE_ARTICLE',
          payload: article
        }))
        .catch(err => err)
    }
  }

   export const likesArticle = (article) => {

   let data = {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({article})
      }
     
      return dispatch => {
        fetch(`${ API_URL }/articles/${article.id}`, data)
          .then(res => res.json())
          .then(article => {
          
          dispatch(likeArticle(article));
          
    }).catch(err => console.log(err));
  }
}