import React from 'react'

const BlogPreview: React.FC<IBlogPreviewProps> =  (props) => {
    
    
    
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
          <p className="post-meta">Posted by <a href="#"> {props.name}</a></p>
        </div>
        <hr></hr>
        </>
    )
}

export default BlogPreview;

interface IBlogPreviewProps {
    title: string;
    content: string;
    name: string;
    tagid: number;
  }