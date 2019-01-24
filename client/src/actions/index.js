const API_URL = process.env.REACT_APP_API_URL;


export const login = user => {
  return {
    type: 'LOGIN',
    user

  }
};

 export const viewArticle = (payload) => {
    return {
      type: 'VIEW_ARTICLE',
      payload
    }
  }

  export const fetchArticle = () => {
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
              type: 'FETCH_ARTICLE',
              payload: articles
          })
        })
        .catch(err => err)
    }
  }
  
  export const addArticle = article => {
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    }
  
    return dispatch => {
      fetch(`${ API_URL }/articles`, data)
        .then(response => response.json())
        .then(article => dispatch({
          type: 'ADD_ARTICLE',
          payload: article
        }))
        .catch(err => err)
    }
  }

 export const deleteArticle = id => {
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

