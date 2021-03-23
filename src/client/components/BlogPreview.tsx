import React from 'react'
import { Link } from 'react-router-dom'
import { IBlog } from '../App';

const BlogPreview: React.FC<IBlog> =  (props) => {
    
    
    
    return (
        <>
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">
              {props.title}
            </h2>
            <h3 className="post-subtitle">
              {props.content}
            </h3>
          </a>
          <p className="post-meta">Posted by {props.name}</p>
          <Link className="btn btn-info" to={`/blog/${props.id}`}>Details</Link>
        </div>
        <hr></hr>
        </>
    )
}

export default BlogPreview;

