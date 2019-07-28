import React from 'react';
import { useSelector } from 'react-redux';      
import { Link } from 'react-router-dom';

function ArticleList(){
  const articles = useSelector(function(state) { return state.articles }); 
  return ( 
    <div>
      <h2>
        Articles
        <Link to="/articles/new" className="btn btn-primary float-right">Create Article</Link> 
      </h2>
      {articles.length && articles.map(function(article) { 
        return (
          <div key={ article._id }> 
            <hr/>               
            <h4><Link to={`/articles/${article._id}`}>{article.title}</Link></h4> 
            <small>id: {article._id}</small>      
          </div>
        );
      })}
    </div>
  )
}

export default ArticleList;