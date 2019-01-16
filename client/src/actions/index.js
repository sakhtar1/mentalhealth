export function fetcharticles() {
  const articles = [
    {id: 1, name: 'Taking care of yourself', description: 'Lorem Ipsum'},
    {id: 2, name: 'Rest', description: 'Lorem Ipsum'},
    {id: 3, name: 'Going for a Walk', description: 'Lorem Ipsum'}
  ];
  return {
    type: 'FETCH_ARTICLES',
    articles
  };
}

export function addArticle(article){
  return {
    type: 'ADD_ARTICLE',
    article
  };
};

