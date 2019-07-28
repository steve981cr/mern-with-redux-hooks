import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import { setArticle, removeArticle } from '../../actions'; 

function ArticleInfo(props) { 
  const article = useSelector((state) => state.article) 
  const dispatch = useDispatch(); 

  useEffect(function() { 
    axios.get(`/api/articles/${props.match.params._id}`)
      .then(function(response) {
        dispatch(setArticle(response.data)); 
      })
      .catch(function(error) { 
        console.log('error', error);
      });
  }, [dispatch, props]); 

  function handleDelete() { 
    axios.delete(`/api/articles/${article._id}`)
      .then(function() {
        dispatch(removeArticle(article._id));
        props.history.push("/")
      })
      .catch(function(error) { console.log('error', error) });
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <small>id: {article._id}</small>
      <p>{article.content}</p>
      <div className="btn-group">
        <Link to={{ pathname: `/articles/${article._id}/edit` }} className='btn btn-info'>Edit</Link>
        <button className="btn btn-danger" type="button" onClick={handleDelete}>Delete</button>
        <Link to="/" className="btn btn-secondary">Close</Link>
      </div>
      <hr/>
    </div>
  )
}

export default ArticleInfo;