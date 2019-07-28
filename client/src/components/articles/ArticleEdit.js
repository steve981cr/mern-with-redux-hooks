import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { patch } from 'axios';
import { setArticle, replaceArticle } from '../../actions';

function ArticleEdit(props) {
  const initialState = useSelector((state) => state.article)
  let [article, changeArticle] = useState(initialState)
  const dispatch = useDispatch();

  function handleChange(event) {
    changeArticle({...article, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!article.title || !article.content ) return
    patch(`/api/articles/${article._id}`, {title: article.title, content: article.content})
      .then(function(response) {
        dispatch(setArticle(article));
        dispatch(replaceArticle(article));
      })
      .then(function() {
        props.history.push(`/articles/${article._id}`)
      })
      .catch(function(error) { console.log(error); });
  };

  function handleCancel() {
    props.history.push(`/articles/${article._id}`);
  }

  return (
    <div>
      <h1>Edit {article.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" defaultValue={article.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" rows="5" defaultValue={article.content} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ArticleEdit;