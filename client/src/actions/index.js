import { get } from 'axios';

export const SET_ARTICLES = 'SET_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const SET_ARTICLE = 'SET_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const REPLACE_ARTICLE = 'REPLACE_ARTICLE';

export function setArticles() {
  return function(dispatch) {
    return get('/api/articles')
      .then(function(response) {
        dispatch({type: SET_ARTICLES, articles: response.data})
      })
      .catch(function(error) { console.log('error', error); });
  };
};

export function addArticle(article) {
  return {
    type: ADD_ARTICLE,
    article: article,
  };
};

export function setArticle(article) {
  return {
    type: SET_ARTICLE,
    article: article,
  };
};

export function removeArticle(_id) {
  return {
    type: REMOVE_ARTICLE,
    _id: _id,
  };
};

export function replaceArticle(article) {
  return {
    type: REPLACE_ARTICLE,
    article: article,
  };
}