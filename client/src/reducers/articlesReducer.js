import { SET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, REPLACE_ARTICLE } from '../actions';

const initialState = { articles: [] }
export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return action.articles;
    case ADD_ARTICLE:
      return [action.article, ...state];
    case REMOVE_ARTICLE:
      return state.filter(article => article._id !== action._id);
    case REPLACE_ARTICLE:
      return state.map(function(article) {
        if (article._id === action.article._id) {
          return {
            ...article,
            title: action.article.title,
            content: action.article.content,
          }
        } else return article;
      })
    default:
      return state;
  }
}