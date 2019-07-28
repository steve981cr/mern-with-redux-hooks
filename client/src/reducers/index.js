import { combineReducers } from 'redux';
import articles from './articlesReducer';
import article from './articleReducer';

export default combineReducers({
  articles: articles,
  article: article,
});