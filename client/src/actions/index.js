 const API_URL = 'http://localhost:3001/api';

export const login = (user) => {
  return {
    type: 'LOGIN',
    user

  }
};

 export const articleView = (payload) => {
    return {
      type: 'VIEW_ARTICLE',
      payload
    }
  }



export const likeArticle = (article) => {
  return { type: 'LIKE_ARTICLE', article };
};



export const fetchArticles = () => {
  return dispatch => {
    return fetch(`${API_URL}/articles`)
    .then(res => res.json())
    .then(articles => {
      dispatch({
              type: 'FETCH_ARTICLES',
              payload: articles
          });
    }).catch(err => console.log(err))
  };
};


export const addArticle= (article, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ article })
    })
    .then(res => res.json())
    .then(article => {
      if (article.id) {
          dispatch({
          type: 'ADD_ARTICLE',
          payload: article
        });
      } else {
        const err = article.errors.join('\n\n')
        alert(`${article.message}\n\n${err}`)
      }
    }).catch(err => console.log(err));
  };
};

export const deleteArticle = (articleId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/articles/${articleId}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.status === 204) {
        routerHistory.replace('/articles')
        dispatch({
          type: 'DELETE_ARTICLE',
          payload: articleId
        });
      }
    }).catch(err =>  console.log(err));
  };
};

export const likesArticle = (article) => {
  return dispatch => {
    return fetch(`${API_URL}/articles/${article.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ article })
    })
    .then(res => res.json())
    .then(article => {
      dispatch(likeArticle(article));
    }).catch(err => console.log(err));
  };
};


