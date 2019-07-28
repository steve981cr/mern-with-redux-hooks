import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { post } from 'axios';
import { addArticle } from '../../actions'; 

function ArticleAdd(props) { 
  const initialState = { title: '', content: '' }
  const [article, setFields] = useState(initialState) 
  const dispatch = useDispatch(); 

  function handleChange(event) { 
    setFields({...article, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) { 
    event.preventDefault();
    if(!article.title || !article.content ) return
    post('/api/articles', {title: article.title, content: article.content})
      .then(function(response) {
        dispatch(addArticle(response.data));
      })
      .then(function() {
        props.history.push("/")
      })
      .catch(function(error) { console.log(error); });    
  };

  function handleCancel() {
    props.history.push("/");
  }

  return (
    <div>
      <h4>Add Article</h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <input type="text" name="title" required value={article.title} onChange={handleChange} className="form-control" placeholder="Title" />
        </div>
        <div className="form-group">
          <textarea name="content" rows="5" required value={article.content} onChange={handleChange} className="form-control" placeholder="Content" />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ArticleAdd;