import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IBlog } from '../App';

const BlogPreview: React.FC<IBlog> =  (props) => {
    const [blogTag, setBlogTag] = useState("")

    useEffect(() => {
        getBlogTag();
    })
    
    const getBlogTag = async () => {
        let resTag = await fetch(
            `http://localhost:3000/api/tags/${props.id}`
          );
          let resTagName = (await resTag.json())[0].name;
          setBlogTag(resTagName);
    }
    
    return (
        <>
        <div className="post-preview">
          <Link className="" to={`/blog/${props.id}`}>
            <h2 className="post-title">
              {props.title}
            </h2>
            <p className="badge badge-success">{blogTag}</p>
            <h3 className="post-subtitle">
              {props.content}
            </h3>
            </Link>
          <p className="post-meta">Posted by {props.name}</p>
        </div>
        <hr></hr>
        </>
    )
}

export default BlogPreview;
